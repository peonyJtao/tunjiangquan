/*
 * @Date: 2026-04-23 11:29:16
 * @LastEditors: peonyJtao
 * @LastEditTime: 2026-05-05 22:29:40
 * @FilePath: /东江泉/next-i18next.config.js
 * @description:
 */
const { defaultLocale, locales } = require('./i18n.shared');

module.exports = {
  i18n: {
    defaultLocale,
    locales,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
