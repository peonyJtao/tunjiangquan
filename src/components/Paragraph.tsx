import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

type ParagraphProps = TypographyProps<'p'>;

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <Typography component="p" {...props}>
      {children}
    </Typography>
  );
}
