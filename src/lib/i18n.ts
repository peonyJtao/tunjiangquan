/*
 * @Date: 2026-05-02 13:33:42
 * @LastEditors: peonyJtao
 * @LastEditTime: 2026-05-05 22:30:35
 * @FilePath: /东江泉/src/lib/i18n.ts
 * @description:
 */
import type { AppLocale } from '@/constants/constant';
const { defaultLocale: sharedDefaultLocale, locales } = require('../../i18n.shared');

export { type AppLocale } from '@/constants/constant';

export const defaultLocale = sharedDefaultLocale as AppLocale;
export const supportedLocales = [...locales] as AppLocale[];
export const translationNamespaces = ['common', 'layout', 'home', 'aboutus', 'contact', 'news'] as const;

export type TranslationNamespace = (typeof translationNamespaces)[number];
export type TranslationValue = string | number | boolean | null | TranslationValue[] | { [key: string]: TranslationValue };
type TranslationDictionary = Record<string, TranslationValue>;
export type TranslationMessages = Partial<Record<TranslationNamespace, TranslationDictionary>>;

interface TranslationOptions {
  returnObjects?: boolean;
}

type TranslationResult = string | TranslationValue;

type TFunction = {
  (key: string): string;
  (key: string, options: { returnObjects: true }): TranslationValue;
  (key: string, options?: TranslationOptions): TranslationResult;
};

const localePattern = new RegExp(`^/(${supportedLocales.join('|')})(?=/|$)`);

export const getNestedValue = (source: TranslationDictionary | undefined, key: string): TranslationValue | undefined =>
  key.split('.').reduce<TranslationValue | undefined>((value, segment) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return undefined;
    }

    return (value as TranslationDictionary)[segment];
  }, source);

const normalizePathInput = (pathName: string): string => {
  const [withoutHash] = pathName.split('#');
  const [withoutQuery] = withoutHash.split('?');
  return withoutQuery || '/';
};

export const isSupportedLocale = (value?: string): value is AppLocale =>
  typeof value === 'string' && supportedLocales.includes(value as AppLocale);

export const resolveLocale = (value?: string): AppLocale => (isSupportedLocale(value) ? value : defaultLocale);

export const getLocaleFromPath = (pathName: string): AppLocale => {
  const normalizedPath = normalizePathInput(pathName);
  const match = normalizedPath.match(localePattern);
  return resolveLocale(match?.[1]);
};

export const removeLocaleFromPath = (pathName: string): string => {
  const normalizedPath = normalizePathInput(pathName);
  const pathWithoutLocale = normalizedPath.replace(localePattern, '') || '/';
  return pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
};

export const normalizeRoutePath = (pathName: string): string => {
  const cleanedPath = removeLocaleFromPath(pathName).replace(/\/+$/, '');
  return cleanedPath || '/';
};

export const buildLocalePath = (locale: AppLocale, pathName = '/'): string => {
  const normalizedPath = normalizeRoutePath(pathName);
  return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`;
};

export const getDirection = (locale: AppLocale) => (locale === 'ar' ? 'rtl' : 'ltr');

export type I18nContextValue = {
  locale: AppLocale;
  messages: TranslationMessages;
};

export const createT = (messages: TranslationMessages, namespace: TranslationNamespace): TFunction =>
  ((key: string, options?: TranslationOptions) => {
    const value = getNestedValue(messages[namespace], key);

    if (options?.returnObjects) {
      return value;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      return String(value);
    }

    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }

    return key;
  }) as TFunction;
