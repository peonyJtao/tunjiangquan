/*
 * @Date: 2026-04-23 20:20:40
 * @LastEditors: peonyJtao
 * @LastEditTime: 2026-05-04 21:29:37
 * @FilePath: /东江泉/src/components/LanguagePopover.tsx
 * @description:
 */
import RpIcon from "./RpIcon";
import { H6, Span } from "./Typography";
import { languageOptions } from "@/constants/constant";

import { useRouter } from 'next/router';
import { pxToRem } from "@/utils/fontUtils";
import { getLangDisplay } from "@/utils/utils";
import { Box, MenuItem, MenuList, Popover, alpha, styled, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import { buildLocalePath, getLocaleFromPath } from '@/src/lib/i18n';
import { useTranslation } from '@/src/lib/i18n.context';

const ItemWrapper = styled(Box)(() => ({
  "& img": {
    width: "20px",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));
const LanguagePopover = () => {
  const theme = useTheme();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');
  const handleOpen = () => setOpen(true);

  const router = useRouter();
  const lang = getLocaleFromPath(router.asPath);
  const handleClose = () => setOpen(false);
  const handleChangeLanguage = (language: string) => {
    router.push(buildLocalePath(language as (typeof languageOptions)[number], router.asPath));
    setOpen(false);
  };
  return (
    <>
      <RpIcon icon="lang" sx={{
        color: 'primary.main',
      }} size="24px" onClick={handleOpen} clickable ref={anchorRef} />
      <Popover
        keepMounted
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        slotProps={{
          paper: {
            sx: {
              width: 150,
              borderRadius: '12px',
              padding: pxToRem(8),
              '& .MuiMenuItem-root': {
                borderBottom: 'none',
                padding: '8px',
                fontSize: pxToRem(15),
                fontWeight: 500,
                lineHeight: '18px',
                '&.Mui-selected': {
                  background: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                },
                '&.Mui-selected:hover': {
                  background: `${theme.palette.primary.light} !important`,
                  color: theme.palette.primary.contrastText,
                },
                "&.MuiMenuItem-root:hover": {
                  background: `${alpha(theme.palette.primary.light, 0.65)} !important`,
                  color: theme.palette.primary.contrastText,
                }
              },
              '& .MuiMenuItem-root:last-child': {
                borderBottom: 'none',
              },
            },
          },
        }}
      >
        <MenuList sx={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 0.5, }}>
          {languageOptions.map((language) => (
            <MenuItem key={language} onClick={() => handleChangeLanguage(language)} selected={language === lang}>
              <ItemWrapper>
                <H6 fontWeight={600} ml={1}>
                  {getLangDisplay(language)}
                </H6>
              </ItemWrapper>
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
      <Span sx={{
        fontSize: pxToRem(14),
        ml: pxToRem(4),
        color: 'primary.main',
      }}>{lang?.toUpperCase()}</Span>
    </>
  );
};

export default LanguagePopover;
