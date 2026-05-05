import React from 'react';
import { createT, defaultLocale, I18nContextValue, TranslationNamespace } from '@/src/lib/i18n';

const I18nContext = React.createContext<I18nContextValue>({
  locale: defaultLocale,
  messages: {},
});

export const I18nProvider = ({
  children,
  locale,
  messages,
}: React.PropsWithChildren<I18nContextValue>) => (
  <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>
);

export const useLocale = () => React.useContext(I18nContext).locale;

export const useTranslation = (namespace: TranslationNamespace) => {
  const { messages } = React.useContext(I18nContext);
  return { t: createT(messages, namespace) };
};
