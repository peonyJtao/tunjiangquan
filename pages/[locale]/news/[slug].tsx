import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import NewsArticleTemplate from '@/src/components/news/NewsArticleTemplate';
import { getNewsBySlug, getNewsSlugs, NewsArticle } from '@/src/lib/news';
import { getI18nProps } from '@/src/lib/i18n.server';
import { buildLocalePath, supportedLocales, TranslationMessages } from '@/src/lib/i18n';

interface NewsDetailPageProps {
  article: NewsArticle;
  locale: string;
  messages: TranslationMessages;
}

const siteName = 'Dunhua Group';
const siteUrl = 'https://www.dunhuagroup.com';
const fallbackImage = '/images/logo.png';

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const NewsDetailPage: NextPage<NewsDetailPageProps> = ({ article, locale }) => {
  const description = article.excerpt || stripHtml(article.content).slice(0, 160);
  const siteImage = article.coverImage || fallbackImage;
  const pageUrl = `${siteUrl}${buildLocalePath(locale as typeof supportedLocales[number], `/news/${article.slug}`)}`;

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={article.title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={siteImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={siteImage} />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <NewsArticleTemplate article={article} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: supportedLocales.flatMap((locale) =>
    getNewsSlugs().map((slug) => ({
      params: { locale, slug },
    })),
  ),
  fallback: false,
});

export const getStaticProps: GetStaticProps<NewsDetailPageProps> = async ({ params }) => {
  const locale = typeof params?.locale === 'string' ? params.locale : undefined;
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const i18nProps = await getI18nProps(locale, ['common', 'layout', 'news']);
  const article = getNewsBySlug(i18nProps.locale, slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      ...i18nProps,
      article,
    },
  };
};

export default NewsDetailPage;
