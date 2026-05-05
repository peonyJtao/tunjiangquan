export function getLangDisplay(lang: string) {
  return {
    en: "English",
    zh: "简体中文",
    'zh-TW': "繁體中文",
    ms: 'Bahasa Melayu',
    ar: 'العربية',
    th: 'ไทย'
  }[lang] || '--';
}
