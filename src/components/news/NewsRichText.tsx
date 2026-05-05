import { Box } from '@mui/material';
import { pxToRem } from '@/utils/fontUtils';

interface NewsRichTextProps {
  content: string;
}

const NewsRichText = ({ content }: NewsRichTextProps) => {
  return (
    <Box
      className="news-rich-text"
      sx={{
        fontSize: pxToRem(16),
        lineHeight: 1.9,
        color: 'text.primary',
        '& p': {
          mb: pxToRem(28),
        },
        '& h2': {
          mt: pxToRem(48),
          mb: pxToRem(20),
          color: 'text.primary',
          fontSize: pxToRem(24),
          lineHeight: 1.35,
          fontWeight: 600,
        },
        '& h3': {
          mt: pxToRem(40),
          mb: pxToRem(18),
          color: 'text.primary',
          fontSize: pxToRem(20),
          lineHeight: 1.4,
          fontWeight: 600,
        },
        '& ul, & ol': {
          pl: pxToRem(28),
          mb: pxToRem(32),
          display: 'grid',
          gap: pxToRem(8),
        },
        '& li': {
          lineHeight: 1.85,
        },
        '& figure': {
          mb: pxToRem(36),
          m: 0,
        },
        '& img': {
          width: '100%',
          display: 'block',
          borderRadius: pxToRem(24),
        },
        '& figcaption': {
          mt: pxToRem(12),
          color: 'text.secondary',
          fontSize: pxToRem(14),
          lineHeight: 1.65,
        },
        '& blockquote': {
          borderLeft: '4px solid',
          borderColor: 'primary.main',
          pl: pxToRem(20),
          py: pxToRem(4),
          mb: pxToRem(32),
          fontSize: pxToRem(18),
          lineHeight: 1.7,
          fontWeight: 500,
          m: 0,
        },
        '& a': {
          color: 'primary.main',
          textDecoration: 'underline',
        },
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default NewsRichText;
