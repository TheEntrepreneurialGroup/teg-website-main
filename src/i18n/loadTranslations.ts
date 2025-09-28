import i18n from "./config";

export async function ensureNS(ns: string) {
  if (!i18n.hasResourceBundle(i18n.language, ns)) {
    const mod = await import(`./${i18n.language}/${ns}.json`);
    i18n.addResourceBundle(i18n.language, ns, mod.default, true, true);
  }
}
export async function loadTranslations(locale: string, namespaces: string[]) {
  const translations = {};
  for (const ns of namespaces) {
    const mod = await import(`./${locale}/${ns}.json`);
    Object.assign(translations, mod.default);
  }
  return translations;
}
