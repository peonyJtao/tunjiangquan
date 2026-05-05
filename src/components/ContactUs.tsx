import { memo } from 'react';
import { Box, SxProps } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { pxToRem } from '@/utils/fontUtils';
import FlexAlign from '@/components/flexbox/FlexAlign';

import { useTranslation } from '@/src/lib/i18n.context';
import { Tiny } from './Typography';
export default memo(({ sx, bgColor = 'text.primary' }: {
  bgColor?: string,
  sx?: SxProps
}) => {


  const { t } = useTranslation('home');
  return <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', ...sx }}>
    <FlexAlign
      sx={{
        my: pxToRem(16),
        gap: pxToRem(12),
      }}
    >
      <EmailIcon sx={{
        color: bgColor
      }} />
      <Tiny
        sx={{
          fontSize: pxToRem(16),
          color: bgColor
        }}>tungkongchuen@gmail.com</Tiny>
    </FlexAlign>
    <FlexAlign
      sx={{
        my: pxToRem(16),
        gap: pxToRem(12),
      }}
    >
      <PhoneIcon sx={{
        color: bgColor
      }} />
      <a href="tel:+85235905187" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Tiny
          sx={{
            fontSize: pxToRem(16),
            color: bgColor
          }}>+852-3590 5187</Tiny>
      </a>
    </FlexAlign>
    <FlexAlign
      sx={{
        my: pxToRem(16),
        gap: pxToRem(12),
      }}
    >
      <LocationOnIcon sx={{
        color: bgColor
      }} />
      <Tiny
        sx={{
          fontSize: pxToRem(16),
          color: bgColor
        }}>香港屯门石排头路5号地下I铺</Tiny>
    </FlexAlign>
  </Box>
})
