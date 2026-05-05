/*
 * @Date: 2026-05-02 13:21:50
 * @LastEditors: peonyJtao
 * @LastEditTime: 2026-05-04 20:12:38
 * @FilePath: /东江泉/constants/constant.ts
 * @description:
 */
export const languageOptions = ["en", "zh", "zh-TW", 'ms', 'ar', 'th'] as const

export type AppLocale = (typeof languageOptions)[number]

export const maxWidth = 1200

export type ContactCategory = 'dunhuagroup' | 'tungkongchuen'

export const eName: ContactCategory = 'tungkongchuen'

export const contactCategory: ContactCategory = eName

export const ContactLink = {
  email: 'tungkongchuen@gmail.com',
  x: 'https://x.com/DunhuaGroup',
  fb: 'https://www.facebook.com/profile.php?id=61574551334213',
  ig: 'https://www.instagram.com/dunhuagroup/',
  yb: 'https://www.youtube.com/@DUNHUA2016',
  wa: 'https://wa.me/85235905187',
  location: `https://www.google.com/maps?q=${encodeURIComponent('敦华集团 DUNHUA GROUP')}`,

  // `https://www.google.com/maps?q=${encodeURIComponent('敦华集团 DUNHUA GROUP')}&z=15&output=embed`
}
