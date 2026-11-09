export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const pages = [
  "home",
  "services",
  "about",
  "contact",
  "privacy",
  "404",
] as const;
export type Page = (typeof pages)[number];

export function localeFromPath(pathname: string): Locale {
  return /^\/zh(?:\/|$)/.test(pathname) ? "zh" : "en";
}

export function localizedPath(path: string, locale: Locale): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;
  const url = new URL(path, "https://aireelstech.com");
  const pathname = url.pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "/";
  return `/${locale}${pathname}${url.search}${url.hash}`;
}

export function pagePath(page: Page): string {
  return page === "home" ? "/" : `/${page}/`;
}
