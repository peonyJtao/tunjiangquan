import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Drawer,
  List,
  Container,
  styled,
  Divider,
  IconButton,
} from '@mui/material';
import { Close, Instagram, X, YouTube } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'motion/react';
import LanguagePopover from './LanguagePopover';
import { pxToRem } from '@/utils/fontUtils';
import GradientLine from './GradientLine';
import { H5, Span, Tiny } from './Typography';
import { ContactLink, maxWidth } from '@/constants/constant';
import FlexBetween from './flexbox/FlexBetween';
import FlexAlign from './flexbox/FlexAlign';
import FaceBook from './Facebook';
import Head from 'next/head';
import { buildLocalePath, getLocaleFromPath, normalizeRoutePath } from '@/src/lib/i18n';
import { useTranslation } from '@/src/lib/i18n.context';

interface LayoutProps {
  children: React.ReactNode;
}

const socialMediaLinks = [

  {
    icon: <X />,
    href: ContactLink.x,
    color: '#000000',
    ariaLabel: 'X',
  },
  {
    icon: <Instagram />,
    href: ContactLink.ig,
    color: '#E4405F',
    ariaLabel: 'Instagram',
  },
  {
    icon: <FaceBook />,
    href: ContactLink.fb,
    color: '#1877F2',
    ariaLabel: 'Facebook',
  },
  {
    icon: <YouTube />,
    href: ContactLink.yb,
    color: '#FF0000',
    ariaLabel: 'YouTube',
  },
];
const ToggleIcon = styled(Box)<{ width?: number }>(({ theme, width }) => ({
  height: 3,
  margin: '5px',
  marginLeft: 0,
  width: width || 25,
  borderRadius: '10px',
  transition: 'width 0.3s',
  backgroundColor: theme.palette.primary.main,
}));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation('layout');
  const router = useRouter();
  const locale = getLocaleFromPath(router.asPath);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState(normalizeRoutePath(router.asPath));

  useEffect(() => {
    setSelectedPath(normalizeRoutePath(router.asPath));
  }, [router.asPath]);

  const navItems = [
    { title: t('nav.home'), path: '/' },
    { title: t('nav.news'), path: '/news' },
    { title: t('nav.aboutus'), path: '/aboutus' },
    { title: t('nav.contact'), path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (path: string) => {
    setSelectedPath(path);
  };

  const homePath = buildLocalePath(locale, '/');

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', padding: pxToRem(8) }}>
      <FlexBetween sx={{ mb: pxToRem(16) }}>
        <FlexAlign
          onClick={() => router.push(homePath)}
          sx={{
            gap: pxToRem(12),
            img: {
              width: pxToRem(36),
            },
          }}
        >
          <img src="/images/logo.png" alt={t('brand')} />
          <Tiny>{t('brand')}</Tiny>
        </FlexAlign>
        <Close />
      </FlexBetween>
      <List>
        {navItems.map((item) => {
          const isActive = selectedPath === item.path;
          const href = buildLocalePath(locale, item.path);
          return (
            <Box key={item.title} sx={{ mx: pxToRem(16) }}>
              <Link
                href={href}
                passHref
                style={{ textDecoration: 'none', textAlign: 'left', marginTop: pxToRem(12), marginBottom: pxToRem(12), display: 'block' }}
                onClick={() => handleNavClick(item.path)}
              >
                {isActive ? (
                  <GradientLine fontSize={pxToRem(18)} title={item.title} />
                ) : (
                  <H5
                    sx={{
                      fontSize: pxToRem(18),
                      color: 'primary.main',
                      transition: 'color 0.2s ease',
                      fontWeight: 'normal',
                    }}
                  >
                    {item.title}
                  </H5>
                )}
              </Link>
            </Box>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <motion.header
          transition={{ duration: 0.15 }}
          style={{
            height: pxToRem(64),
            position: 'fixed',
            top: pxToRem(16),
            left: pxToRem(16),
            right: pxToRem(16),
            zIndex: 1100,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <AppBar
            position="static"
            elevation={0}
            sx={{
              borderRadius: pxToRem(32),
              maxWidth: `${pxToRem(maxWidth)} !important`,
              bgcolor: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
              color: 'text.primary',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            <Container sx={{ height: '100%', maxWidth: `${pxToRem(maxWidth)} !important` }}>
              <Toolbar
                disableGutters
                sx={{
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    cursor: 'pointer',
                    img: {
                      width: pxToRem(84),
                    },
                  }}
                  onClick={() => router.push(homePath)}
                >
                  <img src="/images/logo.png" alt={t('brand')} />
                </Box>

                <Box sx={{ height: '100%', display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                  {navItems.map((item) => {
                    const isActive = selectedPath === item.path;
                    const href = buildLocalePath(locale, item.path);

                    return (
                      <Box key={item.title} sx={{ mx: pxToRem(16) }}>
                        <Link href={href} passHref style={{ textDecoration: 'none' }} onClick={() => handleNavClick(item.path)}>
                          {isActive ? (
                            <GradientLine fontSize={pxToRem(14)} title={item.title} />
                          ) : (
                            <H5
                              sx={{
                                fontSize: pxToRem(14),
                                color: 'primary.main',
                                transition: 'color 0.2s ease',
                                fontWeight: 'normal',
                              }}
                            >
                              {item.title}
                            </H5>
                          )}
                        </Link>
                      </Box>
                    );
                  })}
                </Box>

                <LanguagePopover />
                <Box onClick={handleDrawerToggle} sx={{ ml: 2, display: { sm: 'none' } }}>
                  <ToggleIcon />
                  <ToggleIcon width={18} />
                  <ToggleIcon width={9} />
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </motion.header>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>

        <Box component="footer" sx={{ py: pxToRem(48), mt: pxToRem(48) }}>
          <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
            <Divider sx={{ my: pxToRem(32) }} />
            <FlexBetween
              sx={{
                mb: pxToRem(12),
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: { xs: pxToRem(16), sm: 0 },
              }}
            >
              <FlexAlign
                sx={{
                  gap: pxToRem(12),
                  img: {
                    width: pxToRem(36),
                  },
                }}
              >
                <img src="/images/logo.png" alt={t('brand')} />
                <Tiny>{t('brand')}</Tiny>
              </FlexAlign>
              <FlexAlign sx={{ gap: pxToRem(12) }}>
                {socialMediaLinks.map((link, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel}
                    sx={{ color: link.color }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </FlexAlign>
            </FlexBetween>
            <Span sx={{ fontSize: pxToRem(12) }}>{t('footer.copyright')}</Span>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
