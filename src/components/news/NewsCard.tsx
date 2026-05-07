import Link from 'next/link';
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';
import { motion } from 'motion/react';
import { pxToRem } from '@/utils/fontUtils';
import { NewsArticle } from '@/src/lib/news';
import { buildLocalePath } from '@/src/lib/i18n';
import { useLocale } from '@/src/lib/i18n.context';
import { assetUrl } from '@/src/lib/assets';

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

const NewsCard = ({ article, index = 0 }: NewsCardProps) => {
  const locale = useLocale();
  const articlePath = buildLocalePath(locale, `/news/${article.slug}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      style={{ height: '100%' }}
    >
      <Card
        elevation={0}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'transparent',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Link href={articlePath} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box sx={{ overflow: 'hidden', borderRadius: pxToRem(24), mb: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={assetUrl(article.coverImage)}
              alt={article.title}
              sx={{
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': { transform: 'scale(1.08)' },
              }}
            />
          </Box>
        </Link>
        <CardContent sx={{ px: 0, pt: 0 }}>
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, mb: 1, display: 'block' }}>
            {article.category}
          </Typography>
          <Link href={articlePath} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: pxToRem(16),
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.3,
                transition: 'color 0.2s ease',
                '&:hover': { color: 'secondary.main', cursor: 'pointer' },
              }}
            >
              {article.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {article.date}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewsCard;
