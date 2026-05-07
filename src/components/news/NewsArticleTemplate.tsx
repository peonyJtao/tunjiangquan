import { Box, Container, IconButton, SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import { X } from '@mui/icons-material';
import { pxToRem } from '@/utils/fontUtils';
import { maxWidth } from '@/constants/constant';
import NewsRichText from './NewsRichText';
import { NewsArticle } from '@/src/lib/news';
import { H4, Tiny } from '../Typography';
import FlexAlign from '../flexbox/FlexAlign';
import Facebook from '../Facebook';
import { useTranslation } from '@/src/lib/i18n.context';
import { assetUrl } from '@/src/lib/assets';

const Share = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 16 12" {...props}>
      <path d="M15.8995 5.79104L8.98231 0.0698391C8.78928 -0.0883628 8.49578 0.0413109 8.49578 0.285097V3.64105C8.49578 3.79147 8.3715 3.91855 8.21549 3.92374C4.21219 4.0586 0.846134 6.84918 0.13749 10.6746L0.0052809 11.3852C-0.0476029 11.6601 0.309363 11.8338 0.510321 11.6289L1.02594 11.1051C2.9086 9.20405 5.49991 8.13554 8.19963 8.1511C8.36092 8.1511 8.49313 8.27559 8.49578 8.43379V11.7171C8.49578 11.9583 8.79193 12.088 8.98231 11.9324L15.8995 6.22156C16.0185 6.12041 16.0317 5.94146 15.9286 5.82476C15.918 5.81438 15.9074 5.80401 15.8969 5.79363L15.8995 5.79104ZM1.66848 9.22221C2.83457 6.6443 5.49198 4.90667 8.53015 4.90667H9.2388C9.40009 4.90667 9.52966 4.78218 9.5323 4.62398V1.84118L14.5642 6.00371L9.5323 10.1584V7.44308C9.5323 7.28488 9.40009 7.1604 9.2388 7.1604H8.59626C6.11601 7.06444 3.67542 7.79061 1.66848 9.22221Z" fill="#1a1c1e" />
    </SvgIcon>
  );
};

const LinkedIn = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 25 23" {...props}>
      <g clipPath="url(#clip0_682_7042)">
        <path d="M6.14548 7.6478V23H0.978619V7.6478H6.14548ZM6.46753 2.91443C6.48154 3.66399 6.21549 4.30251 5.6834 4.80222C5.15131 5.30193 4.4372 5.56567 3.56905 5.56567H3.54105C2.6869 5.56567 2.00079 5.31581 1.4827 4.80222C0.964617 4.28863 0.68457 3.66399 0.68457 2.91443C0.68457 2.15098 0.950615 1.51246 1.4827 1.01275C2.01479 0.513039 2.72891 0.263184 3.59706 0.263184C4.4652 0.263184 5.15131 0.513039 5.6694 1.01275C6.18749 1.51246 6.45353 2.15098 6.46753 2.91443ZM24.6846 14.1996V23H19.5457V14.7826C19.5457 13.6999 19.3357 12.8531 18.9156 12.2285C18.4955 11.6177 17.8374 11.3123 16.9413 11.3123C16.2832 11.3123 15.7371 11.4928 15.289 11.8537C14.8409 12.2146 14.5189 12.6449 14.2948 13.1724C14.1828 13.4778 14.1268 13.8942 14.1268 14.4217V22.9861H8.98795C9.00196 18.8635 9.01596 15.5182 9.01596 12.9642C9.01596 10.3962 9.01596 8.86931 9.00196 8.38348L8.98795 7.63392H14.1268V9.86873H14.0988C14.3088 9.53559 14.5189 9.2441 14.7429 9.00812C14.967 8.75827 15.261 8.49453 15.6251 8.20303C15.9891 7.91153 16.4512 7.68944 16.9833 7.52287C17.5154 7.3563 18.1175 7.2869 18.7756 7.2869C20.5539 7.2869 21.9961 7.86989 23.0743 9.04976C24.1525 10.2296 24.6846 11.9509 24.6846 14.1996Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_682_7042">
          <rect width="24" height="22.7368" fill="white" transform="translate(0.68457 0.263184)" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

interface NewsArticleTemplateProps {
  article: NewsArticle;
}

const shareIcons = [X, Facebook, LinkedIn];

const NewsArticleTemplate = ({ article }: NewsArticleTemplateProps) => {
  const { t } = useTranslation('news');

  return (
    <Box sx={{ pb: pxToRem(80), pt: pxToRem(80) }}>
      <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important`, position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: `${pxToRem(88)} minmax(0, 1fr)` },
            gap: { xs: pxToRem(24), md: pxToRem(56) },
            mt: { xs: pxToRem(36), md: pxToRem(56) },
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: pxToRem(28),
              pt: pxToRem(32),
              position: 'sticky',
              top: pxToRem(120),
              height: 'fit-content',
            }}
          >
            {shareIcons.map((Icon, index) => (
              <IconButton key={index} sx={{ color: 'text.primary' }}>
                <Icon />
              </IconButton>
            ))}
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: pxToRem(24), mb: pxToRem(24) }}>
              <Tiny>{article.category}</Tiny>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: pxToRem(8), color: 'text.secondary', flexShrink: 0 }}>
                <Share />
                <Tiny>{t('labels.share')}</Tiny>
              </Box>
            </Box>
            <H4
              sx={{
                fontSize: { xs: pxToRem(28), md: pxToRem(34) },
                lineHeight: 1.1,
                fontWeight: 800,
                mt: pxToRem(32),
                mb: pxToRem(64),
              }}
            >
              {article.title}
            </H4>
            <Tiny>{article.date}</Tiny>
            <FlexAlign
              sx={{
                mt: pxToRem(12),
                mb: pxToRem(32),
                gap: pxToRem(12),
                img: {
                  width: pxToRem(36),
                },
              }}
            >
              <img src={assetUrl(article.author.avatar)} alt={article.author.name} />
              <Tiny>{article.author.name}</Tiny>
            </FlexAlign>
            <NewsRichText content={article.content} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsArticleTemplate;
