import path from 'path';
import { promises as fs } from 'fs';
import {
  AppLocale,
  defaultLocale,
  resolveLocale,
  TranslationMessages,
  TranslationNamespace,
} from '@/src/lib/i18n';

type TranslationValue = string | number | boolean | null | TranslationValue[] | { [key: string]: TranslationValue };
type TranslationDictionary = Record<string, TranslationValue>;

const readNamespaceFile = async (locale: AppLocale, namespace: TranslationNamespace): Promise<TranslationDictionary> => {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as TranslationDictionary;
};

export const getI18nProps = async (
  localeInput: string | undefined,
  namespaces: TranslationNamespace[],
): Promise<{ locale: AppLocale; messages: TranslationMessages }> => {
  const locale = resolveLocale(localeInput);

  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async (namespace) => {
        try {
          return [namespace, await readNamespaceFile(locale, namespace)] as const;
        } catch {
          return [namespace, await readNamespaceFile(defaultLocale, namespace)] as const;
        }
      }),
    ),
  ) as TranslationMessages;

  return {
    locale,
    messages,
  };
};
