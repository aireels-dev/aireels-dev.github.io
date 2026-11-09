#!/bin/bash
set -euo pipefail
python3 - "$@" <<'PYTHON'
import concurrent.futures, hashlib, json, os, re, sys, urllib.error, urllib.parse, urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

bases = list(dict.fromkeys([os.environ.get('SITE_URL', 'https://aireelstech.com').rstrip('/'), os.environ.get('MIRROR_URL', 'https://aireels-dev.github.io').rstrip('/')]))
artifact = Path(os.environ['ARTIFACT_DIR']) if os.environ.get('ARTIFACT_DIR') else None
pages = [''] + [f'{locale}/{page}' for locale in ['en', 'zh'] for page in ['', 'services/', 'about/', 'contact/', 'privacy/', '404/']]
records, failures = [], []

class Resources(HTMLParser):
    def __init__(self): super().__init__(); self.urls = set()
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ['img', 'script'] and a.get('src', '').startswith('/'): self.urls.add(a['src'])
        if tag == 'link' and a.get('rel') in ['stylesheet', 'icon', 'apple-touch-icon'] and a.get('href', '').startswith('/'): self.urls.add(a['href'])
        if tag == 'a' and 'download' in a and a.get('href', '').startswith('/'): self.urls.add(a['href'])

def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'AIReels-Release-Acceptance/1.0', 'Accept-Encoding': 'identity'})
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            return response.status, response.read(), response.geturl()
    except urllib.error.HTTPError as error:
        return error.code, error.read(), error.geturl()

def check(base):
    resources, host_records = set(), []
    def verified(path, status, body):
        expected = 404 if path in ['/review/control/', '/review/logo/'] else 200
        if status != expected: raise AssertionError(f'{path}: HTTP {status}, expected {expected}')
        if artifact and expected == 200:
            name = urllib.parse.urlsplit(path).path.lstrip('/')
            local = artifact / (name + 'index.html' if not name or name.endswith('/') else name)
            if local.is_file() and local.read_bytes() != body: raise AssertionError(f'{path}: bytes differ from workflow artifact')
        host_records.append({'path': path, 'status': status, 'sha256': hashlib.sha256(body).hexdigest()})
    for page in pages:
        path = '/' + page
        status, body, url = fetch(base + path)
        verified(path, status, body)
        html = body.decode('utf-8')
        if 'business@aireelstech.com' not in html: raise AssertionError(f'{path}: missing email')
        if re.search(r'aireels\.top|aiReels2025', html, re.I): raise AssertionError(f'{path}: outdated contact information')
        expected_marks = 3 if page.endswith('about/') else 2
        if len(re.findall(r'<svg\b[^>]*class="brand-mark"', html)) != expected_marks: raise AssertionError(f'{path}: missing inline logos')
        if '/favicon.svg?v=white-original' not in html: raise AssertionError(f'{path}: incorrect favicon')
        if page.endswith('contact/'):
            for item in ['wechat-qr.svg', 'feishu-qr.svg', 'wechat-qr.png', 'feishu-qr.png', '>aireels<']:
                if item not in html: raise AssertionError(f'{path}: missing {item}')
        parser = Resources(); parser.feed(html); resources.update(parser.urls)
    resources.update(['/favicon.svg?v=white-original', '/favicon.png?v=white-original', '/brand/aireels-touch-icon.png?v=white-original', '/sitemap-index.xml', '/sitemap-0.xml', '/robots.txt'])
    def resource(path):
        status, body, url = fetch(base + path); verified(path, status, body)
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        list(executor.map(resource, sorted(resources)))
    for path in ['/review/control/', '/review/logo/']:
        status, body, url = fetch(base + path); verified(path, status, body)
    return {'base': base, 'pages': len(pages), 'resources': len(resources), 'checks': host_records}

for base in bases:
    try:
        result = check(base); records.append(result)
        print(f"PASS {base}: {result['pages']} pages, {result['resources']} resources, review routes return 404")
    except Exception as error:
        failures.append({'base': base, 'error': str(error)}); print(f'FAIL {base}: {error}', file=sys.stderr)
report = {'checked_at': datetime.now(timezone.utc).isoformat(), 'records': records, 'failures': failures}
if os.environ.get('VERIFY_OUTPUT'): Path(os.environ['VERIFY_OUTPUT']).write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
if failures: sys.exit(1)
PYTHON
