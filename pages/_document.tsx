import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../src/lib/createEmotionCache';
import { defaultLocale, getDirection, resolveLocale } from '@/src/lib/i18n';

export default class MyDocument extends Document {
  render() {
    const locale = resolveLocale(this.props.__NEXT_DATA__.locale || defaultLocale);
    const direction = getDirection(locale);

    return (
      <Html lang={locale} dir={direction}>
        <Head>
          <meta name="theme-color" content="#1976d2" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          />
          {/* Inject Emotion render to speed up initial load */}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const locale = resolveLocale(ctx.locale || defaultLocale);
  const cache = createEmotionCache(getDirection(locale));
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion from rendering invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
