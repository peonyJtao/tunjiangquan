import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Box, Container } from '@mui/material';
import { motion } from 'motion/react';
import { pxToRem } from '@/utils/fontUtils';
import { maxWidth } from '@/constants/constant';
import NewsCard from '@/src/components/news/NewsCard';
import { getAllNews, NewsArticle } from '@/src/lib/news';
import GradientLine from '@/components/GradientLine';
import { pageEnter, sectionReveal } from '@/src/lib/motion';
import Head from 'next/head';
import { getI18nProps } from '@/src/lib/i18n.server';
import { supportedLocales, TranslationMessages } from '@/src/lib/i18n';
import { useTranslation } from '@/src/lib/i18n.context';

interface NewsPageProps {
  articles: NewsArticle[];
  locale: string;
  messages: TranslationMessages;
}

const News: NextPage<NewsPageProps> = ({ articles }) => {
  const { t } = useTranslation('news');

  return (
    <>
      <Head>
        <title>{t('hero.title')}</title>
      </Head>
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        minHeight: pxToRem(460),
        overflow: 'hidden',
        background: `url(/images/news.png) top center`,
        backgroundSize: 'cover',
        mb: pxToRem(90),
        pb: 0,
        "&::before": {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.01)',
          zIndex: -1,
        }
      }}>
        <Container sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: `${pxToRem(maxWidth)} !important`,
          width: '100%',
          height: '100%',
          minHeight: pxToRem(460),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
          pb: pxToRem(32),
        }}>
          <GradientLine title={t('hero.title')} />
        </Container>
      </Box>
      <motion.div {...pageEnter}>
        <motion.div {...sectionReveal}>
          <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
            <Grid container spacing={4}>
              {articles.map((article, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={article.slug}>
                  <NewsCard article={article} index={index} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.div>
      </motion.div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: supportedLocales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<NewsPageProps> = async ({ params }) => {
  const locale = typeof params?.locale === 'string' ? params.locale : undefined;
  const i18nProps = await getI18nProps(locale, ['common', 'layout', 'news']);

  return {
    props: {
      ...i18nProps,
      articles: getAllNews(i18nProps.locale),
    },
  };
};

export default News;
