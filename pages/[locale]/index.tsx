import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Card, Container, Grid } from '@mui/material';
import Head from 'next/head';
import { memo, motion } from 'motion/react';
import { pxToRem } from '@/utils/fontUtils';
import { H2, H4, Span, Tiny } from '@/components/Typography';
import { maxWidth } from '@/constants/constant';
import GradientLine from '@/components/GradientLine';
import FlexAlign from '@/components/flexbox/FlexAlign';
import NewsCard from '@/src/components/news/NewsCard';
import { getFeaturedNews, NewsArticle } from '@/src/lib/news';
import { pageEnter, sectionReveal } from '@/src/lib/motion';
import { getI18nProps } from '@/src/lib/i18n.server';
import { supportedLocales, TranslationMessages } from '@/src/lib/i18n';
import { useTranslation } from '@/src/lib/i18n.context';
import ContactUs from '@/components/ContactUs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

interface HomeProps {
  featuredNews: NewsArticle[];
  locale: string;
  messages: TranslationMessages;
}

const productCards = [
  {
    image: '/images/product/hot350.png',
    title: '350ml',
    name: '轻奢小瓶，于分寸之间自见格调。',
    description: '以更精致的规格呈现源头好水的纯净气质，适合会务接待、精品陈列与讲究细节的高端场景。',
  },
  {
    image: '/images/product/hot500.png',
    title: '500ml',
    name: '经典之选，于日常之中沉淀质感。',
    description: '在恰到好处的容量中，延续东江泉清冽纯净的口感表达，让日常饮用也保有从容而稳定的品牌气质。',
  },
  {
    image: '/images/product/hot550.png',
    title: '550ml',
    name: '从容大瓶，于延展之间尽显品质。',
    description: '以更充裕的容量回应更完整的饮用体验，在商务、出行与生活场景中持续释放天然好水的纯粹价值。',
  },
  {
    image: '/images/product/hot38l.png',
    title: '3.8L',
    name: '场景之选，于长久陪伴中彰显分量。',
    description: '面向家庭与办公等长期使用场景，以稳定如一的品质标准与安心保障，承载东江泉值得信赖的品牌分量。',
  },
] as const;

const certifications = [
  {
    image: '/images/stc.jpg',
    title: '香港优质“正”印认证',
    description: '以香港认可标准为基础，建立更透明的品质判断依据。',
    width: pxToRem(128),
  },
  {
    image: '/images/iso.png',
    title: 'ISO 22000 & HACCP',
    description: '从食品安全管理到流程控制，持续维持稳定的生产标准。',
    width: pxToRem(220),
  },
  {
    image: '/images/halal.jpg',
    title: 'Halal 清真认证',
    description: '为更广泛的市场与饮用场景提供可信赖的选择基础。',
    width: pxToRem(128),
  },
] as const;

const storyHighlights = ['东江源头水源地｜海拔 1100 米以上', '花岗岩层自然渗滤｜保留天然矿物质', '香港“正”印认证｜多重检测保障'] as const;

const HomeNews = ({ articles }: { articles: NewsArticle[] }) => {
  const { t } = useTranslation('home');

  return (
    <motion.div {...sectionReveal}>

      <H2
        sx={{
          mt: pxToRem(120),
          fontSize: { xs: pxToRem(24), md: pxToRem(32) },
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        {t('sections.news')}
      </H2>
      <Tiny
        sx={{
          mt: pxToRem(18),
          mb: pxToRem(48),
          fontSize: { xs: pxToRem(15), md: pxToRem(16) },
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        持续了解东江泉的品牌动态、市场进展与水源价值表达。
      </Tiny>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={article.slug}>
            <NewsCard article={article} index={index} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

const SecondSection = memo(() => {
  const duplicatedImages = [...productCards, ...productCards];

  return <Box sx={{
    mt: pxToRem(120),
  }}>

    <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
      <H2
        sx={{
          mt: pxToRem(16),
          fontSize: { xs: pxToRem(24), md: pxToRem(32) },
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        我们的产品
      </H2>
      <Tiny
        sx={{
          mt: pxToRem(18),
          mb: pxToRem(48),
          fontSize: { xs: pxToRem(15), md: pxToRem(16) },
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        我们坚持产品的高品质，全力打造天然、健康产品。
      </Tiny>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
        }}
        style={{ paddingTop: pxToRem(16), paddingBottom: pxToRem(16) }}
        freeMode={false}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
      >
        {duplicatedImages.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`} style={{
            height: 'auto', display: 'flex',
            //  boxShadow: '0 18px 60px rgba(12, 18, 32, 0.06)',
          }}>
            <Card
              elevation={0}
              sx={{
                p: 0,
                height: '100%',
                width: '100%',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',

              }}
            >
              <FlexAlign sx={{
                justifyContent: 'center',
                width: '100%',
                img: {
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                }
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                />
              </FlexAlign>
              <Box sx={{
                p: pxToRem(16),
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
              }}>

                <FlexAlign sx={{
                  gap: pxToRem(6),
                  alignItems: 'center',
                }}>
                  <Tiny sx={{ fontSize: pxToRem(14), lineHeight: pxToRem(24), mt: pxToRem(4) }}>{item.title}</Tiny>
                  <Tiny sx={{
                    width: pxToRem(4),
                    height: pxToRem(4),
                    borderRadius: '50%',
                    background: '#44474e'
                  }}></Tiny>
                  <Tiny sx={{ fontSize: pxToRem(14), lineHeight: pxToRem(24), mt: pxToRem(4) }}>{item.name}</Tiny>
                </FlexAlign>
                <Tiny sx={{ fontSize: pxToRem(14), lineHeight: pxToRem(24), mt: pxToRem(8) }}>{item.description}</Tiny>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container >
  </Box>
});

const ThirdSection = memo(() => {
  const { t } = useTranslation('home');

  return (
    <motion.div {...sectionReveal}>
      <H2
        sx={{
          mt: pxToRem(120),
          fontSize: { xs: pxToRem(24), md: pxToRem(32) },
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        国际标准与严格检测
      </H2>
      <H4
        sx={{
          mt: pxToRem(16),
          fontSize: { xs: pxToRem(18), md: pxToRem(20) },
          fontWeight: 500,
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        让天然这件事更值得被信任
      </H4>
      <Tiny
        sx={{
          mt: pxToRem(22),
          mb: pxToRem(48),
          fontSize: { xs: pxToRem(15), md: pxToRem(16) },
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        东江泉以多重质量体系为基础，持续维持从水源、生产到出品的一致性，让每一次饮用都建立在看得见与看不见的标准之上。
      </Tiny>
      <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
        <Box sx={{
          width: pxToRem(24),
          height: pxToRem(2),
          bgcolor: 'rgba(0,249,229,1)',
          margin: '0 auto'
        }}></Box>

        <Grid container spacing={pxToRem(16)} sx={{
          my: pxToRem(64),
        }}>
          {certifications.map((cert, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  p: pxToRem(16),
                  height: '100%',
                  border: 'none',
                  img: {
                    width: cert.width,
                  },
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: pxToRem(16)
                }}>
                <img src={cert.image} alt={cert.title} />
                <Tiny sx={{ fontSize: pxToRem(16), lineHeight: pxToRem(24) }}>{cert.title}</Tiny>
                <Tiny sx={{ fontSize: pxToRem(16), lineHeight: pxToRem(24) }}>{cert.description}</Tiny>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{
          width: pxToRem(24),
          height: pxToRem(2),
          bgcolor: 'rgba(0,149,230,1)',
          margin: '0 auto'
        }}></Box>
      </Container>

    </motion.div>
  );
});
const Home: NextPage<HomeProps> = ({ featuredNews, locale }) => {
  return (
    <>
      <Head>
        <title>东江泉</title>
      </Head>
      <Box sx={{ position: 'relative', overflow: 'hidden', backgroundColor: '#fff' }}>
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
              backgroundImage: 'url(/images/banner.jpg)',
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
                'radial-gradient(circle at 20% 22%, rgba(88, 226, 255, 0.16), transparent 30%), radial-gradient(circle at 80% 18%, rgba(118, 103, 255, 0.16), transparent 28%), linear-gradient(180deg, rgba(5, 8, 22, 0.16) 0%, rgba(5, 8, 22, 0.52) 56%, rgba(5, 8, 22, 0.94) 100%)',
            }}
          />

          <Container
            sx={{
              position: 'relative',
              zIndex: 1,
              maxWidth: `${pxToRem(maxWidth)} !important`,
              minHeight: { xs: pxToRem(620), md: pxToRem(680) },
              display: 'flex',
              alignItems: 'flex-end',
              pt: { xs: pxToRem(180), md: pxToRem(196) },
              pb: { xs: pxToRem(56), md: pxToRem(76) },
            }}
          >
            <motion.div {...pageEnter} style={{ width: '100%' }}>
              <Box sx={{ maxWidth: pxToRem(900) }}>

                <GradientLine fontSize={pxToRem(36)} title="深层花岗岩裂隙水，回到好水该有的样子。" />
                <Tiny
                  sx={{
                    mt: pxToRem(22),
                    maxWidth: pxToRem(720),
                    color: 'rgba(237, 247, 255, 0.84)',
                    fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                    lineHeight: 1.9,
                  }}
                >
                  东江泉从天然源头出发，把清冽、纯净与稳定口感带入更高频的日常饮用场景。我们相信，一瓶值得长期信赖的水，
                  不需要被过度修饰，只需要被认真保留。
                </Tiny>
              </Box>
            </motion.div>
          </Container>
        </Box>

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
                mb: { xs: pxToRem(88), md: pxToRem(148) },
              }}
            >
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ maxWidth: pxToRem(500) }}>

                  <H2
                    sx={{
                      mt: pxToRem(16),
                      fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    植根香港  溯源东江
                  </H2>
                  <Tiny
                    sx={{
                      mt: pxToRem(24),
                      fontSize: { xs: pxToRem(13), md: pxToRem(15) },
                      lineHeight: 1.5,
                    }}
                  >
                    东江泉坚持从东江流域源头甄选天然水源，让水体在花岗岩地层的自然渗滤中保留本身的矿物层次与清冽口感。
                    我们所做的，不是重新定义天然，而是尽量不打扰它。
                  </Tiny>
                  <Tiny
                    sx={{
                      mt: pxToRem(18),
                      fontSize: { xs: pxToRem(13), md: pxToRem(15) },
                      lineHeight: 1.5,
                    }}
                  >
                    从商务接待到日常饮用，东江泉希望把一份稳定、舒服、值得长期信赖的好水体验，安静地带入更多场景。
                  </Tiny>
                  <Box sx={{ mt: pxToRem(28), display: 'grid', gap: pxToRem(10) }}>
                    {storyHighlights.map((item) => (
                      <FlexAlign key={item} sx={{ gap: pxToRem(12) }}>
                        <Box
                          sx={{
                            width: pxToRem(6),
                            height: pxToRem(6),
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                          }}
                        />
                        <Span sx={{ display: 'block', fontSize: { xs: pxToRem(12), md: pxToRem(13) }, color: '#10131a' }}>{item}</Span>
                      </FlexAlign>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Grid container spacing={pxToRem(16)}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{
                      display: 'grid',
                      gap: pxToRem(16),
                      height: '100%',
                    }}>
                      <Box sx={{
                        overflow: 'hidden',
                        borderRadius: pxToRem(24),
                        img: {
                          display: 'block',
                          width: '100%',
                        }
                      }}>
                        <img src="/images/home/Img1.png" alt="东江泉天然水源" />
                      </Box>
                      <Box sx={{
                        overflow: 'hidden',
                        borderRadius: pxToRem(24),
                        img: {
                          display: 'block',
                          width: '100%',
                        }
                      }}>
                        <img src="/images/home/Img3.png" alt="香港都市中的东江泉品牌形象" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{
                      display: 'grid',
                      gap: pxToRem(16),
                      height: '100%',
                    }}>
                      <Box sx={{
                        overflow: 'hidden',
                        borderRadius: pxToRem(24),
                        img: {
                          display: 'block',
                          width: '100%',
                        }
                      }}>
                        <img src="/images/home/Img2.png" alt="东江源头自然生态" />
                      </Box>
                      <Box sx={{
                        overflow: 'hidden',
                        borderRadius: pxToRem(24),
                        img: {
                          display: 'block',
                          width: '100%',
                        }
                      }}>
                        <img src="/images/home/Img4.jpg" alt="东江泉 350ml 产品图" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>

          <motion.div {...sectionReveal}>
            <SecondSection />
          </motion.div>

          <motion.div {...sectionReveal}>
            <ThirdSection />
          </motion.div>

          <HomeNews articles={featuredNews} />


        </Container>
        <motion.div {...sectionReveal}>
          <Box
            sx={{
              // mt: { xs: pxToRem(88), md: pxToRem(132) },
              position: 'relative',
              overflow: 'hidden',
              backgroundImage: 'url(/images/CTABanner.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(6, 9, 20, 0.32) 0%, rgba(6, 9, 20, 0.78) 100%)',
              }}
            />
            <Container sx={{ position: 'relative', zIndex: 1, py: { xs: pxToRem(48), md: pxToRem(72) } }}>
              <Box sx={{ maxWidth: pxToRem(760), mx: 'auto', textAlign: 'center' }}>
                <H2
                  sx={{
                    fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: 'primary.contrastText',
                  }}
                >
                  成为东江泉的合作伙伴
                </H2>
                <Tiny
                  sx={{
                    mt: pxToRem(16),
                    color: 'primary.contrastText',
                    fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                    lineHeight: 1.9,
                  }}
                >
                  无论你关注渠道合作、商务采购还是长期市场拓展，都可以直接与我们的团队建立联系。
                </Tiny>
                <FlexAlign sx={{ justifyContent: 'center', mt: pxToRem(28) }}>
                  <Box
                    sx={{
                      px: pxToRem(24),
                      py: pxToRem(10),
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: pxToRem(32),
                      textDecoration: 'none',
                      color: '#10131a',
                      backgroundColor: 'primary.contrastText',
                      fontSize: pxToRem(14),
                      fontWeight: 600,
                    }}
                  >
                    联系商务团队
                  </Box>
                </FlexAlign>
              </Box>
              <ContactUs
                sx={{
                  mt: pxToRem(24),
                  flexDirection: {
                    xs: 'column',
                    sm: 'row',
                  },
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: {
                    xs: pxToRem(8),
                    sm: pxToRem(32),
                  },
                }}
                bgColor="#fff"
              />
            </Container>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: supportedLocales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<HomeProps> = async ({ params }) => {
  const locale = typeof params?.locale === 'string' ? params.locale : undefined;
  const i18nProps = await getI18nProps(locale, ['common', 'layout', 'home']);

  return {
    props: {
      ...i18nProps,
      featuredNews: getFeaturedNews(i18nProps.locale, 3),
    },
  };
};

export default Home;
