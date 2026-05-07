import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Card, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { pxToRem } from '@/utils/fontUtils';
import { ContactLink, maxWidth } from '@/constants/constant';
import GradientLine from '@/components/GradientLine';
import { pageEnter, sectionReveal, staggerContainer } from '@/src/lib/motion';
import Head from 'next/head';
import { getI18nProps } from '@/src/lib/i18n.server';
import { supportedLocales, TranslationMessages } from '@/src/lib/i18n';
import { useTranslation } from '@/src/lib/i18n.context';
import { assetUrl } from '@/src/lib/assets';
import { H2, Span, Tiny } from '@/components/Typography';
import { Email, Phone, WhatsApp } from '@mui/icons-material';
import FlexAlign from '@/components/flexbox/FlexAlign';

interface ContactProps {
  locale: string;
  messages: TranslationMessages;
}

const HERO_HEIGHT = 460;
const phoneDisplay = '+852-3590 5187';
const phoneHref = 'tel:+85235905187';

const partnershipReasons = [
  {
    title: '源头与品质更稳定',
    description: '从东江源头甄选天然水源，以稳定饮用体验承接更长期的合作需求。',
  },
  {
    title: '标准验证更清晰',
    description: '以香港“正”印、ISO 22000、HACCP 与 Halal 等体系，为合作沟通提供更明确的信任依据。',
  },
  {
    title: '更适合多场景落地',
    description: '覆盖会务接待、商务采购、渠道铺货、家庭办公等不同使用与销售场景。',
  },
] as const;

const Contact: NextPage<ContactProps> = () => {
  const { t } = useTranslation('contact');
  const theme = useTheme();

  const contactMethods = [
    {
      key: 'email',
      icon: <Email />,
      title: t('methods.items.email.title'),
      description: t('methods.items.email.description'),
      value: ContactLink.email,
      href: `mailto:${ContactLink.email}`,
      cta: t('methods.items.email.cta'),
    },
    {
      key: 'phone',
      icon: <Phone />,
      title: t('methods.items.phone.title'),
      description: t('methods.items.phone.description'),
      value: phoneDisplay,
      href: phoneHref,
      cta: t('methods.items.phone.cta'),
    },
    {
      key: 'whatsapp',
      icon: <WhatsApp />,
      title: t('methods.items.whatsapp.title'),
      description: t('methods.items.whatsapp.description'),
      value: phoneDisplay,
      href: ContactLink.wa,
      cta: t('methods.items.whatsapp.cta'),
    },
  ] as const;

  return (
    <>
      <Head>
        <title>{t('hero.title')}</title>
      </Head>

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#060914',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              `linear-gradient(180deg, rgba(5, 10, 25, 0.18) 0%, rgba(5, 10, 25, 0.7) 100%), url(${assetUrl('/images/Gemini_Generated_Image_wa8du6wa8du6wa8d.png')})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            transform: 'scale(1.03)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 22%, rgba(84, 221, 255, 0.16), transparent 26%), radial-gradient(circle at 80% 18%, rgba(119, 91, 255, 0.18), transparent 28%), radial-gradient(circle at 72% 72%, rgba(0, 255, 200, 0.12), transparent 24%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(6, 9, 20, 0.14) 0%, rgba(6, 9, 20, 0.54) 58%, rgba(6, 9, 20, 0.95) 100%)',
          }}
        />

        <Container
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: `${pxToRem(maxWidth)} !important`,
            minHeight: { xs: pxToRem(660), md: pxToRem(HERO_HEIGHT) },
            display: 'flex',
            alignItems: 'flex-end',
            pt: { xs: pxToRem(180), md: pxToRem(196) },
            pb: { xs: pxToRem(56), md: pxToRem(76) },
          }}
        >
          <motion.div {...pageEnter} style={{ width: '100%' }}>
            <Box sx={{ maxWidth: pxToRem(900) }}>
              <GradientLine fontSize={pxToRem(36)} title="联系东江泉商务团队" />
              <Tiny
                sx={{
                  mt: pxToRem(24),
                  maxWidth: pxToRem(760),
                  color: 'rgba(237, 247, 255, 0.84)',
                  fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                  lineHeight: 1.65,
                }}
              >
                如果你正在寻找一款更适合商务、渠道与长期合作场景的天然饮用水，我们会以更快的响应速度和更清晰的沟通路径，协助你了解东江泉的产品与合作方式。
              </Tiny>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#fff' }}>
        <Container
          sx={{
            maxWidth: `${pxToRem(maxWidth)} !important`,
            py: { xs: pxToRem(72), md: pxToRem(132) },
          }}
        >
          <motion.div {...sectionReveal}>
            <Box sx={{ maxWidth: pxToRem(760), mb: { xs: pxToRem(36), md: pxToRem(52) } }}>
              <H2
                sx={{
                  mt: pxToRem(16),
                  fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                为什么合作东江泉
              </H2>
              <Tiny
                sx={{
                  mt: pxToRem(18),
                  fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                  lineHeight: 1.9,
                }}
              >
                在发起合作沟通之前，我们更希望先把理由讲清楚：东江泉不仅是一瓶天然饮用水，也是一套更适合稳定交付、长期沟通与多场景落地的品牌选择。
              </Tiny>
            </Box>
          </motion.div>

          <motion.div {...sectionReveal}>
            <Grid container spacing={pxToRem(20)} sx={{ mb: { xs: pxToRem(72), md: pxToRem(108) } }}>
              {partnershipReasons.map((item) => (
                <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: { xs: pxToRem(20), md: pxToRem(24) },
                      borderRadius: pxToRem(24),
                      boxShadow: '0 18px 60px rgba(12, 18, 32, 0.06)',
                    }}
                  >
                    <H2
                      sx={{
                        mt: pxToRem(4),
                        fontSize: { xs: pxToRem(16), md: pxToRem(20) },
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </H2>
                    <Tiny
                      sx={{
                        mt: pxToRem(14),
                        fontSize: { xs: pxToRem(14), md: pxToRem(15) },
                        lineHeight: 1.85,
                      }}
                    >
                      {item.description}
                    </Tiny>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <motion.div {...sectionReveal}>
            <Box sx={{ maxWidth: pxToRem(760), mb: { xs: pxToRem(36), md: pxToRem(52) } }}>
              <H2
                sx={{
                  mt: pxToRem(16),
                  fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {t('methods.title')}
              </H2>
              <Tiny
                sx={{
                  mt: pxToRem(18),
                  fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                  lineHeight: 1.9,
                }}
              >
                {t('methods.description')}
              </Tiny>
            </Box>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid container spacing={pxToRem(20)}>
              {contactMethods.map((method) => (
                <Grid key={method.key} size={{ xs: 12, md: 4 }}>
                  <Box
                    component="a"
                    href={method.href}
                    target={method.key === 'email' || method.key === 'phone' ? undefined : '_blank'}
                    rel={method.key === 'email' || method.key === 'phone' ? undefined : 'noreferrer'}
                    sx={{
                      display: 'block',
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                      borderRadius: pxToRem(28),
                      p: { xs: pxToRem(16), md: pxToRem(24) },
                      boxShadow: '0 18px 60px rgba(12, 18, 32, 0.06)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 24px 72px rgba(12, 18, 32, 0.12)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: pxToRem(36),
                        height: pxToRem(36),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        background: 'rgba(12, 18, 32, 0.06)',
                        color: '#0f1320',
                        fontSize: pxToRem(22),
                      }}
                    >
                      {method.icon}
                    </Box>
                    <H2
                      sx={{
                        mt: pxToRem(12),
                        fontSize: { xs: pxToRem(16), md: pxToRem(20) },
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {method.title}
                    </H2>
                    <Tiny
                      sx={{
                        mt: pxToRem(12),
                        fontSize: { xs: pxToRem(12), md: pxToRem(14) },
                      }}
                    >
                      {method.description}
                    </Tiny>
                    <Span
                      sx={{
                        mt: pxToRem(8),
                        display: 'block',
                        fontSize: { xs: pxToRem(12), md: pxToRem(14) },
                        wordBreak: 'break-word',
                      }}
                    >
                      {method.value}
                    </Span>
                    <Tiny
                      sx={{
                        mt: pxToRem(18),
                        fontSize: pxToRem(13),
                        color: 'primary.main',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {method.cta}
                    </Tiny>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <motion.div {...sectionReveal}>
            <Grid
              container
              spacing={pxToRem(36)}
              sx={{
                alignItems: 'center',
                mt: { xs: pxToRem(88), md: pxToRem(148) },
                mb: { xs: pxToRem(88), md: pxToRem(148) },
              }}
            >
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ maxWidth: pxToRem(460) }}>
                  <H2
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    让沟通更高效，也让合作路径更清晰
                  </H2>
                  <Tiny
                    sx={{
                      mt: pxToRem(18),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.9,
                    }}
                  >
                    {t('address')}
                  </Tiny>
                  <Tiny
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(14), md: pxToRem(15) },
                      lineHeight: 1.85,
                    }}
                  >
                    如果你已经对东江泉的源头、品质标准和合作场景有初步兴趣，欢迎通过地图、电话或即时通讯进一步建立联系。
                  </Tiny>
                  <Box
                    component="a"
                    href={ContactLink.location}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      mt: pxToRem(26),
                      px: pxToRem(24),
                      py: pxToRem(10),
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: pxToRem(32),
                      textDecoration: 'none',
                      textTransform: 'none',
                      color: 'primary.contrastText',
                      background: theme.customGradients.primary,
                      fontSize: pxToRem(14),
                      fontWeight: 600,
                    }}
                  >
                    打开地图
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  component="a"
                  href={ContactLink.location}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: 'block',
                    borderRadius: pxToRem(28),
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(12, 18, 32, 0.12)',
                    img: {
                      display: 'block',
                      width: '100%',
                      aspectRatio: '16 / 10',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img src={assetUrl('/images/map.png')} alt={t('address')} />
                </Box>
              </Grid>
            </Grid>
          </motion.div>

          <motion.div {...sectionReveal}>
            <Card
              sx={{
                mt: { xs: pxToRem(88), md: pxToRem(148) },
                position: 'relative',
                overflow: 'hidden',
                borderRadius: pxToRem(32),
                border: 'none',
                px: { xs: pxToRem(16), md: pxToRem(44) },
                py: { xs: pxToRem(16), md: pxToRem(40) },
              }}
            >
              <Grid container spacing={pxToRem(28)} sx={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
                <Grid size={{ xs: 12, md: 8 }}>
                  <H2
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {t('cta.title')}
                  </H2>
                  <Tiny
                    sx={{
                      mt: pxToRem(16),
                      maxWidth: pxToRem(620),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.9,
                    }}
                  >
                    {t('cta.description')}
                  </Tiny>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <FlexAlign
                    sx={{
                      justifyContent: { xs: 'flex-start', md: 'flex-end' },
                      gap: pxToRem(14),
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box
                      component="a"
                      href={ContactLink.wa}
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: pxToRem(22),
                        py: pxToRem(10),
                        borderRadius: pxToRem(32),
                        textDecoration: 'none',
                        textTransform: 'none',
                        color: 'primary.contrastText',
                        background: theme.customGradients.primary,
                        fontSize: pxToRem(14),
                        fontWeight: 600,
                      }}
                    >
                      {t('cta.primary')}
                    </Box>
                  </FlexAlign>
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: supportedLocales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ContactProps> = async ({ params }) => {
  const locale = typeof params?.locale === 'string' ? params.locale : undefined;

  return {
    props: await getI18nProps(locale, ['common', 'layout', 'contact']),
  };
};

export default Contact;
