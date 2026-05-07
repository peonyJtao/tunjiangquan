import redotpayEn from '@/src/data/news/en/redotpay-sui-usdc-sui.json';
import redotpayZh from '@/src/data/news/zh/redotpay-sui-usdc-sui.json';
import redotpayZhTW from '@/src/data/news/zh-TW/redotpay-sui-usdc-sui.json';
import redotpayMs from '@/src/data/news/ms/redotpay-sui-usdc-sui.json';
import redotpayAr from '@/src/data/news/ar/redotpay-sui-usdc-sui.json';
import redotpayTh from '@/src/data/news/th/redotpay-sui-usdc-sui.json';
import waterEn from '@/src/data/news/en/water-mineral-profile-guide.json';
import waterZh from '@/src/data/news/zh/water-mineral-profile-guide.json';
import waterZhTW from '@/src/data/news/zh-TW/water-mineral-profile-guide.json';
import waterMs from '@/src/data/news/ms/water-mineral-profile-guide.json';
import waterAr from '@/src/data/news/ar/water-mineral-profile-guide.json';
import waterTh from '@/src/data/news/th/water-mineral-profile-guide.json';
import mountainEn from '@/src/data/news/en/mountain-restoration-project.json';
import mountainZh from '@/src/data/news/zh/mountain-restoration-project.json';
import mountainZhTW from '@/src/data/news/zh-TW/mountain-restoration-project.json';
import mountainMs from '@/src/data/news/ms/mountain-restoration-project.json';
import mountainAr from '@/src/data/news/ar/mountain-restoration-project.json';
import mountainTh from '@/src/data/news/th/mountain-restoration-project.json';

import { AppLocale, defaultLocale, resolveLocale } from '@/src/lib/i18n';

export interface NewsArticle {
  slug: string;
  publishedAt: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
}

const fallbackLocale: AppLocale = defaultLocale;

const localizedNews: Record<AppLocale, NewsArticle[]> = {
  en: [redotpayEn, waterEn, mountainEn],
  zh: [waterZh, mountainZh],
  'zh-TW': [redotpayZhTW, waterZhTW, mountainZhTW],
  ms: [redotpayMs, waterMs, mountainMs],
  ar: [redotpayAr, waterAr, mountainAr],
  th: [redotpayTh, waterTh, mountainTh],
};

export const getAllNews = (locale?: string): NewsArticle[] => {
  const currentLocale = resolveLocale(locale) as AppLocale;
  return localizedNews[currentLocale];
};

export const getFeaturedNews = (locale?: string, limit = 3): NewsArticle[] =>
  getAllNews(locale).slice(0, limit);

export const getNewsBySlug = (locale: string | undefined, slug: string): NewsArticle | undefined =>
  getAllNews(locale).find((article) => article.slug === slug);

export const getNewsSlugs = (): string[] => localizedNews[fallbackLocale].map((article) => article.slug);
