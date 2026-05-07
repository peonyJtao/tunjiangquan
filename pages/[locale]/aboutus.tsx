import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { motion } from 'motion/react';
import GradientLine from '@/components/GradientLine';
import { H2, Tiny } from '@/components/Typography';
import { maxWidth } from '@/constants/constant';
import { pxToRem } from '@/utils/fontUtils';
import { Box, Container, Grid } from '@mui/material';
import { pageEnter, sectionReveal, staggerContainer, staggerItem } from '@/src/lib/motion';
import Head from 'next/head';
import { getI18nProps } from '@/src/lib/i18n.server';
import { supportedLocales, TranslationMessages } from '@/src/lib/i18n';
import { useTranslation } from '@/src/lib/i18n.context';
import { assetUrl } from '@/src/lib/assets';
import FlexAlign from '@/components/flexbox/FlexAlign';

const HERO_HEIGHT = 460;

interface AboutUsProps {
  locale: string;
  messages: TranslationMessages;
}

const trustSignals = [
  {
    value: 'STC',
    title: '正印认证',
    description: '以香港正印认证为基础，建立更稳定、更透明的品质标准。',
  },
  {
    value: 'Natural',
    title: '天然水源',
    description: '坚持从源头寻找好水，保留天然水体本身的清甜与层次。',
  },
  {
    value: 'Pure',
    title: '纯粹呈现',
    description: '不额外添加人工矿物质，不过度修饰，只把好水带到生活里。',
  },
] as const;

const AboutUs: NextPage<AboutUsProps> = () => {
  const { t } = useTranslation('aboutus');

  return (
    <>
      <Head>
        <title>{t('hero.title')}</title>
      </Head>

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#050816',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${assetUrl('/images/voygzpvoygzpvoyg.png')})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            transform: 'scale(1.04)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 20% 24%, rgba(88, 226, 255, 0.18), transparent 30%), radial-gradient(circle at 78% 18%, rgba(118, 103, 255, 0.18), transparent 28%), radial-gradient(circle at 72% 72%, rgba(58, 182, 255, 0.12), transparent 24%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5, 8, 22, 0.14) 0%, rgba(5, 8, 22, 0.52) 52%, rgba(5, 8, 22, 0.96) 100%)',
          }}
        />

        <Container
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: `${pxToRem(maxWidth)} !important`,
            minHeight: { xs: pxToRem(620), md: pxToRem(HERO_HEIGHT) },
            display: 'flex',
            alignItems: 'flex-end',
            pt: { xs: pxToRem(180), md: pxToRem(200) },
            pb: { xs: pxToRem(56), md: pxToRem(76) },
          }}
        >
          <motion.div {...pageEnter} style={{ width: '100%' }}>
            <Box sx={{ maxWidth: pxToRem(860) }}>
              <GradientLine fontSize={pxToRem(36)} title="东江泉的故事，从一份对源头的坚持开始" />
              <Tiny
                sx={{
                  mt: pxToRem(24),
                  maxWidth: pxToRem(760),
                  color: 'rgba(237, 247, 255, 0.84)',
                  fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                  lineHeight: 1.7,
                }}
              >
                对我们来说，东江泉不只是一个饮用水品牌名称，而是一种很直接的选择：从东江源头寻找天然好水，把值得长期信赖的饮用体验，带进更多真实场景。
              </Tiny>
              <FlexAlign
                sx={{
                  gap: pxToRem(14),
                  mt: pxToRem(28),
                  flexWrap: 'wrap',
                }}
              >
                {['品牌起源', '源头选择', '标准验证'].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      px: pxToRem(14),
                      py: pxToRem(6),
                      borderRadius: pxToRem(999),
                      border: '1px solid rgba(255, 255, 255, 0.16)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      color: 'rgba(248, 251, 255, 0.88)',
                      fontSize: { xs: pxToRem(12), md: pxToRem(13) },
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </FlexAlign>
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
            <Grid
              container
              spacing={pxToRem(36)}
              sx={{
                alignItems: 'center',
                mb: { xs: pxToRem(88), md: pxToRem(160) },
              }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ maxWidth: pxToRem(520) }}>
                  <H2
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: '#10131a',
                    }}
                  >
                    为什么会有东江泉
                  </H2>
                  <Tiny
                    sx={{
                      mt: pxToRem(24),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.75,
                    }}
                  >
                    东江泉诞生的起点，并不是想再做一个泛泛的水品牌，而是想把对“好水应该从哪里来”的判断做得更明确。我们希望回到源头，从天然水体本身寻找答案，而不是用复杂概念重新包装一瓶水。
                  </Tiny>
                  <Tiny
                    sx={{
                      mt: pxToRem(18),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.75,
                    }}
                  >
                    因为认同东江源头所代表的水源识别、流域记忆与长期信任，我们把“东江”写进品牌名称，也把“泉”作为对天然饮用体验最直接的表达。
                  </Tiny>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: pxToRem(560),
                    ml: { md: 'auto' },
                    borderRadius: pxToRem(28),
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(12, 18, 32, 0.12)',
                    img: {
                      display: 'block',
                      width: '100%',
                      aspectRatio: '16 / 11',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img src={assetUrl('/images/xyz.png')} alt="东江泉品牌展示" />
                </Box>
              </Grid>
            </Grid>
          </motion.div>

          <motion.div {...sectionReveal}>
            <Grid
              container
              spacing={pxToRem(36)}
              sx={{
                alignItems: 'center',
                mb: { xs: pxToRem(88), md: pxToRem(160) },
              }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: pxToRem(560),
                    borderRadius: pxToRem(28),
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(12, 18, 32, 0.12)',
                    img: {
                      display: 'block',
                      width: '100%',
                      aspectRatio: '16 / 11',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img src={assetUrl('/images/p4b861p4b861p4b8.png')} alt="东江泉天然水源理念" />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ maxWidth: pxToRem(520), ml: { md: 'auto' } }}>
                  <H2
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: '#10131a',
                    }}
                  >
                    为什么坚持从东江源头寻找好水
                  </H2>
                  <Tiny
                    sx={{
                      mt: pxToRem(24),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.75,
                    }}
                  >
                    我们坚持从天然水源出发，不使用经过多重工业化改造的城市自来水，也不依赖额外添加人工矿物质来定义口感。因为真正值得长期饮用的水，应当首先来自自然本身。
                  </Tiny>
                  <Tiny
                    sx={{
                      mt: pxToRem(18),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.75,
                    }}
                  >
                    当水体经过花岗岩层的自然渗滤，保留下天然矿物层次、轻盈口感与清甜回味时，我们更愿意做的，是把这份本来就存在的纯粹妥善保留下来，再稳定地送到每一次日常饮用里。
                  </Tiny>
                </Box>
              </Grid>
            </Grid>
          </motion.div>

          <motion.div {...sectionReveal}>
            <Grid
              container
              spacing={pxToRem(36)}
              sx={{
                alignItems: 'center',
                mb: { xs: pxToRem(88), md: pxToRem(160) },
              }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ maxWidth: pxToRem(520) }}>
                  <H2
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: '#10131a',
                    }}
                  >
                    我们如何理解“值得选择”的一瓶水
                  </H2>
                  <Tiny
                    sx={{
                      mt: pxToRem(24),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.75,
                    }}
                  >
                    东江泉不强调夸张的功能叙事，也不试图把饮水变成复杂命题。我们更在意的，是一瓶水是否干净、是否舒服、是否适合进入更高要求的商务、家庭、办公与长期合作场景。
                  </Tiny>
                  <Tiny
                    sx={{
                      mt: pxToRem(18),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.75,
                    }}
                  >
                    这种选择标准看起来朴素，却决定了品牌的方向：不是追求概念堆叠，而是让每一次饮用都回到稳定、纯粹、值得重复的体验本身。
                  </Tiny>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: pxToRem(560),
                    ml: { md: 'auto' },
                    borderRadius: pxToRem(28),
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(12, 18, 32, 0.12)',
                    img: {
                      display: 'block',
                      width: '100%',
                      aspectRatio: '16 / 11',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img src={assetUrl('/images/home/Img4.jpg')} alt="东江泉产品展示" />
                </Box>
              </Grid>
            </Grid>
          </motion.div>

          <motion.div {...sectionReveal}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: pxToRem(32),
                backgroundColor: '#07101f',
                color: '#f6fbff',
                px: { xs: pxToRem(24), md: pxToRem(48) },
                py: { xs: pxToRem(28), md: pxToRem(42) },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    `linear-gradient(90deg, rgba(7, 16, 31, 0.94) 0%, rgba(7, 16, 31, 0.78) 48%, rgba(7, 16, 31, 0.58) 100%), url(${assetUrl('/images/cert_hero.jpg')})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 18% 22%, rgba(84, 221, 255, 0.12), transparent 24%), radial-gradient(circle at 80% 20%, rgba(119, 91, 255, 0.18), transparent 28%)',
                }}
              />
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ maxWidth: pxToRem(620) }}>
                  <H2
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: '#f7fbff',
                    }}
                  >
                    天然值得被尊重，也值得被验证
                  </H2>
                  <Tiny
                    sx={{
                      mt: pxToRem(22),
                      maxWidth: pxToRem(560),
                      fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                      lineHeight: 1.95,
                      color: 'rgba(237, 247, 255, 0.76)',
                    }}
                  >
                    东江泉强调天然与纯粹，但我们同样重视品质控制的稳定性。以香港“正印认证 (STC Tested Mark)”为基础，结合 ISO 22000、HACCP 与 Halal 等体系，让一瓶好水不仅讲得通，也经得起标准、市场与长期合作的检验。
                  </Tiny>
                </Box>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Grid container spacing={pxToRem(20)} sx={{ mt: { xs: pxToRem(28), md: pxToRem(36) } }}>
                    {trustSignals.map((item) => (
                      <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                        <motion.div variants={staggerItem}>
                          <Box
                            sx={{
                              height: '100%',
                              borderRadius: pxToRem(24),
                              p: { xs: pxToRem(22), md: pxToRem(24) },
                              backgroundColor: 'rgba(255, 255, 255, 0.08)',
                              backdropFilter: 'blur(14px)',
                              border: '1px solid rgba(255, 255, 255, 0.12)',
                            }}
                          >
                            <Tiny
                              sx={{
                                color: 'rgba(237, 247, 255, 0.64)',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                fontSize: pxToRem(12),
                              }}
                            >
                              {item.value}
                            </Tiny>
                            <H2
                              sx={{
                                mt: pxToRem(12),
                                fontSize: { xs: pxToRem(18), md: pxToRem(22) },
                                fontWeight: 500,
                                lineHeight: 1.25,
                                color: '#fff',
                              }}
                            >
                              {item.title}
                            </H2>
                            <Tiny
                              sx={{
                                mt: pxToRem(14),
                                fontSize: { xs: pxToRem(14), md: pxToRem(15) },
                                lineHeight: 1.85,
                                color: 'rgba(237, 247, 255, 0.74)',
                              }}
                            >
                              {item.description}
                            </Tiny>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Box>
            </Box>
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

export const getStaticProps: GetStaticProps<AboutUsProps> = async ({ params }) => {
  const locale = typeof params?.locale === 'string' ? params.locale : undefined;

  return {
    props: await getI18nProps(locale, ['common', 'layout', 'aboutus']),
  };
};

export default AboutUs;
