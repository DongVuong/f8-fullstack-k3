const dictionaries = {
  vi: () => import("./locale/vi.json").then((a) => a.default),
  en: () => import("./locale/en.json").then((a) => a.default),
  jp: () => import("./locale/jp.json").then((a) => a.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
