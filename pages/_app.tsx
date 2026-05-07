import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { useRouter } from 'next/router';
import getTheme from '../src/lib/theme';
import createEmotionCache from '../src/lib/createEmotionCache';
import Layout from '../src/components/Layout';
import '../src/styles/globals.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "../public/font/iconfont.css";
import { getDirection, getLocaleFromPath, resolveLocale, TranslationMessages } from '@/src/lib/i18n';
import { I18nProvider } from '@/src/lib/i18n.context';
import { assetUrl } from '@/src/lib/assets';

const clientSideEmotionCache = createEmotionCache();

interface PagePropsWithI18n {
  locale?: string;
  messages?: TranslationMessages;
}

interface MyAppProps extends AppProps<PagePropsWithI18n> {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const locale = React.useMemo(
    () => resolveLocale(pageProps.locale || getLocaleFromPath(router.asPath)),
    [pageProps.locale, router.asPath],
  );
  const direction = getDirection(locale);

  const activeEmotionCache = React.useMemo(
    () => (direction === 'rtl' ? createEmotionCache('rtl') : emotionCache),
    [direction, emotionCache],
  );

  const theme = React.useMemo(() => getTheme(direction), [direction]);

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    document.documentElement.dir = direction;
    document.documentElement.lang = locale;
  }, [direction, locale]);

  return (
    <I18nProvider locale={locale} messages={pageProps.messages ?? {}}>
      <CacheProvider value={activeEmotionCache}>
        <Head>
          <link rel="icon" href={assetUrl('/images/favicon.ico')} />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </I18nProvider>
  );
}

export default MyApp;
