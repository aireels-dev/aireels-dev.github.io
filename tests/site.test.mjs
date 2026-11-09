import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const root = readFileSync(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
const entry = root.match(
  /<script\b[^>]*data-language-entry="true"[^>]*>([\s\S]*?)<\/script>/,
)?.[1];
assert.ok(
  entry,
  "Built entry page must contain the language negotiation script",
);
const paths = ["", "services/", "about/", "contact/", "privacy/", "404/"];
const legalName = "郑州灵映科技有限公司";
const englishCompanyName = "Zhengzhou AIReels Technology Co., Ltd.";

function negotiate({
  languages = [],
  preference = null,
  pathname = "/",
  search = "",
  hash = "",
  storageDenied = false,
} = {}) {
  const redirects = [];
  vm.runInNewContext(entry, {
    document: {
      currentScript: { dataset: { languageEntry: "true" } },
      documentElement: { dataset: { languageStorageKey: "test.language" } },
    },
    navigator: { languages, language: languages[0] || "" },
    localStorage: {
      getItem: () => {
        if (storageDenied) throw new Error("Storage denied");
        return preference;
      },
    },
    location: { pathname, search, hash, replace: (url) => redirects.push(url) },
  });
  return redirects;
}

test("browser languages are matched in order, with English as the fallback", () => {
  assert.deepEqual(negotiate({ languages: ["zh-CN", "en-US"] }), ["/zh/"]);
  assert.deepEqual(negotiate({ languages: ["zh-Hant-TW"] }), ["/zh/"]);
  assert.deepEqual(negotiate({ languages: ["en-GB", "zh-CN"] }), ["/en/"]);
  assert.deepEqual(negotiate({ languages: ["fr-FR", "zh-CN"] }), ["/zh/"]);
  assert.deepEqual(negotiate({ languages: ["fr-FR", "ja-JP"] }), ["/en/"]);
  assert.deepEqual(negotiate(), ["/en/"]);
});

test("manual preference wins; blocked or invalid storage still allows language matching", () => {
  assert.deepEqual(negotiate({ languages: ["zh-CN"], preference: "en" }), [
    "/en/",
  ]);
  assert.deepEqual(negotiate({ languages: ["en-US"], preference: "zh" }), [
    "/zh/",
  ]);
  assert.deepEqual(negotiate({ languages: ["zh-CN"], preference: "invalid" }), [
    "/zh/",
  ]);
  assert.deepEqual(negotiate({ languages: ["zh-CN"], storageDenied: true }), [
    "/zh/",
  ]);
});

test("deep entry links retain their path, query and anchor; explicit locales never loop", () => {
  assert.deepEqual(
    negotiate({
      languages: ["en"],
      pathname: "/services/",
      search: "?from=email",
      hash: "#creation",
    }),
    ["/en/services/?from=email#creation"],
  );
  assert.deepEqual(
    negotiate({ languages: ["zh"], pathname: "/en/services/" }),
    [],
  );
  assert.deepEqual(negotiate({ languages: ["en"], pathname: "/zh/" }), []);
});

test("both languages contain complete pages, localized navigation and alternate-language links", () => {
  for (const locale of ["en", "zh"])
    for (const path of paths) {
      const html = readFileSync(
        new URL(`../dist/${locale}/${path}index.html`, import.meta.url),
        "utf8",
      );
      assert.match(
        html,
        new RegExp(`<html[^>]+lang="${locale === "zh" ? "zh-CN" : "en"}"`),
      );
      assert.equal(
        [...html.matchAll(/<h1\b/g)].length,
        1,
        `${locale}/${path} must have one main heading`,
      );
      const expectedName = locale === "en" ? englishCompanyName : legalName;
      const otherName = locale === "en" ? legalName : englishCompanyName;
      assert.ok(html.includes(`name="author" content="${expectedName}"`));
      assert.ok(html.includes(`© ${new Date().getFullYear()} ${expectedName}`));
      assert.ok(!html.includes(otherName), `Wrong-language company name in ${locale}/${path}`);
      const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(
        (match) => match[1],
      );
      assert.equal(
        ids.length,
        new Set(ids).size,
        `Duplicate IDs in ${locale}/${path}`,
      );
      for (const match of html.matchAll(
        /<a\b([^>]*?)href="([^"]+)"([^>]*)>/g,
      )) {
        if (!match[2].startsWith("/")) continue;
        if (`${match[1]} ${match[3]}`.includes("data-set-language")) continue;
        assert.ok(
          match[2].startsWith(`/${locale}/`),
          `Wrong-language link in ${locale}/${path}: ${match[2]}`,
        );
      }
      if (path !== "404/") {
        assert.ok(
          html.includes(
            `rel="canonical" href="https://aireelstech.com/${locale}/${path}"`,
          ),
        );
        for (const lang of ["en", "zh-CN", "x-default"])
          assert.ok(html.includes(`hreflang="${lang}"`));
      }
    }
});

test("geographic wording is limited to the legal name and registered office", () => {
  for (const locale of ["en", "zh"])
    for (const path of paths) {
      const html = readFileSync(
        new URL(`../dist/${locale}/${path}index.html`, import.meta.url),
        "utf8",
      );
      const remaining = html
        .replaceAll(legalName, "")
        .replaceAll(englishCompanyName, "")
        .replaceAll("郑州市惠济区", "")
        .replaceAll("Huiji District, Zhengzhou, China", "");
      assert.doesNotMatch(
        remaining,
        /郑州|河南|ZHENGZHOU|34°\s*N|113°\s*E/i,
        `${locale}/${path}`,
      );
      if (locale === "en") {
        const body = html
          .split("<body")[1]
          .replaceAll(legalName, "")
          .replace(/<[^>]*>/g, "")
          .replaceAll("中文", "");
        assert.doesNotMatch(
          body,
          /[\u3400-\u9fff]/,
          `Untranslated copy in en/${path}`,
        );
      }
    }
});

test("the sitemap contains the ten canonical language pages and excludes aliases and error pages", () => {
  const xml = readFileSync(
    new URL("../dist/sitemap-0.xml", import.meta.url),
    "utf8",
  );
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1])
    .sort();
  const expected = ["en", "zh"]
    .flatMap((locale) =>
      paths
        .filter((path) => path !== "404/")
        .map((path) => `https://aireelstech.com/${locale}/${path}`),
    )
    .sort();
  assert.deepEqual(locations, expected);
});
