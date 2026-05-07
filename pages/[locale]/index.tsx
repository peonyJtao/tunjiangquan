import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { memo } from 'react';
import { Avatar, Box, Card, Container } from '@mui/material';
import Head from 'next/head';
import { motion } from 'motion/react';
import { pxToRem } from '@/utils/fontUtils';
import { H2, H4, Tiny } from '@/components/Typography';
import { maxWidth } from '@/constants/constant';
import NewsCard from '@/src/components/news/NewsCard';
import { getFeaturedNews, NewsArticle } from '@/src/lib/news';
import {
  cardFloatReveal,
  ctaGlowReveal,
  heroBackgroundLoop, heroTextReveal, proofStripReveal, statReveal
} from '@/src/lib/motion';
import { getI18nProps } from '@/src/lib/i18n.server';
import { buildLocalePath, supportedLocales, TranslationMessages } from '@/src/lib/i18n';
import { assetUrl } from '@/src/lib/assets';
import ContactUs from '@/components/ContactUs';
import FlexAlign from '@/components/flexbox/FlexAlign';
import AppButton from '@/components/AppButton';
import GradientLine from '@/components/GradientLine';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

interface HomeProps {
  featuredNews: NewsArticle[];
  locale: string;
  messages: TranslationMessages;
}

type HeroContent = {
  eyebrow: string;
  lines: string;
  description: string;
};

type OriginContent = {
  title: string;
  body1: string;
  body2: string;
  highlights: string[];
};

type MetricContent = {
  value: string;
  label: string;
  description: string;
};

type CertificationCopy = {
  title: string;
  description: string;
};

type ProductCopy = {
  title: string;
  name: string;
  description: string;
};

type MarketProof = {
  title: string;
  description: string;
};

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const certificationAssets = [
  { image: assetUrl('/images/stc.png'), width: pxToRem(128) },
  { image: assetUrl('/images/iso.png'), width: pxToRem(220) },
  { image: assetUrl('/images/halal (1).png'), width: pxToRem(128) },
] as const;

const productImages = [
  assetUrl('/images/product/hot350.png'),
  assetUrl('/images/product/hot500.png'),
  assetUrl('/images/product/hot550.png'),
  assetUrl('/images/product/hot38l.png'),
] as const;

const HeroPanel = memo(({ hero }: { hero: HeroContent; contactPath: string }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#050816',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <motion.div
        {...heroBackgroundLoop}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${assetUrl('/images/banner.jpg')})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          transform: 'scale(1.05)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(5, 8, 22, 0.1) 0%, rgba(5, 8, 22, 0.28) 44%, rgba(5, 8, 22, 0.92) 100%)',
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: `${pxToRem(maxWidth)} !important`,
          width: '100%',
          pt: { xs: pxToRem(180), md: pxToRem(196) },
          pb: { xs: pxToRem(48), md: pxToRem(72) },
        }}
      >
        <motion.div {...heroTextReveal}>
          <Box sx={{ maxWidth: pxToRem(880) }}>
            <GradientLine fontSize={pxToRem(36)} title={hero.lines} />
            <Tiny
              sx={{
                mt: pxToRem(24),
                maxWidth: pxToRem(620),
                color: 'rgba(237, 247, 255, 0.82)',
                fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                lineHeight: 1.5,
              }}
            >
              {hero.description}
            </Tiny>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
});

const OriginPanel = memo(({ origin }: { origin: OriginContent }) => {
  return (
    <Box id="origin" sx={{ py: { xs: pxToRem(88), md: pxToRem(140) }, backgroundColor: '#fff' }}>
      <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
        <Box
          sx={{
            display: 'flex',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.8fr) minmax(0, 1.08fr)' },
            gap: { xs: pxToRem(28), md: pxToRem(56) },
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: pxToRem(32),
              img: {
                display: 'block',
                width: '100%',
                aspectRatio: '4 / 5',
                objectFit: 'cover',
              },
            }}
          >
            <img src={assetUrl('/images/dongjiang.jpg')} alt={origin.title} />
          </Box>

          <Box>
            <H2
              sx={{
                mt: pxToRem(16),
                fontSize: { xs: pxToRem(24), md: pxToRem(32) },
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              {origin.title}
            </H2>
            <Tiny
              sx={{
                mt: pxToRem(22),
                fontSize: { xs: pxToRem(15), md: pxToRem(17) },
                lineHeight: 1.9,
                color: 'rgba(16, 19, 26, 0.78)',
              }}
            >
              {origin.body1}
            </Tiny>
            <Tiny
              sx={{
                mt: pxToRem(16),
                fontSize: { xs: pxToRem(15), md: pxToRem(17) },
                lineHeight: 1.9,
                color: 'rgba(16, 19, 26, 0.72)',
              }}
            >
              {origin.body2}
            </Tiny>

            <Box sx={{ mt: pxToRem(28), }}>
              {origin.highlights.map((item) => (
                <FlexAlign key={item} sx={{ gap: pxToRem(12), my: pxToRem(6) }}>
                  <Box
                    sx={{
                      width: pxToRem(6),
                      height: pxToRem(6),
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                    }}
                  />
                  <Tiny sx={{ display: 'block', fontSize: { xs: pxToRem(12), md: pxToRem(13) }, color: '#10131a' }}>{item}</Tiny>
                </FlexAlign>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

const QualityPanel = memo(({ title, description, metrics }: { title: string; description: string; metrics: MetricContent[] }) => {
  return (
    <Box sx={{ py: { xs: pxToRem(88), md: pxToRem(132) }, backgroundColor: '#1054C8' }}>
      <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
        <Box sx={{ maxWidth: pxToRem(780), mx: 'auto', textAlign: 'center' }}>
          <H2
            sx={{
              mt: pxToRem(14),
              fontSize: { xs: pxToRem(30), md: pxToRem(40) },
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
              color: 'primary.contrastText',
            }}
          >
            {title}
          </H2>
          <Tiny
            sx={{
              mt: pxToRem(18),
              fontSize: { xs: pxToRem(15), md: pxToRem(17) },
              lineHeight: 1.85,
              color: 'primary.contrastText',
            }}
          >
            {description}
          </Tiny>
        </Box>

        <Box
          sx={{
            mt: { xs: pxToRem(40), md: pxToRem(56) },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: pxToRem(18), md: pxToRem(24) },
          }}
        >
          {metrics.map((metric, index) => (
            <motion.div key={metric.label} {...statReveal} transition={{ ...statReveal.transition, delay: index * 0.08 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: pxToRem(28),
                  p: { xs: pxToRem(20), md: pxToRem(24) },
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: pxToRem(18),
                }}
              >
                <Tiny sx={{ fontSize: pxToRem(12), letterSpacing: '0.12em', textTransform: 'uppercase', color: 'primary.contrastText' }}>
                  {metric.label}
                </Tiny>
                <Tiny
                  sx={{
                    mt: pxToRem(14),
                    fontSize: { xs: pxToRem(16), md: pxToRem(24) },
                    lineHeight: 1.1,
                    letterSpacing: '-0.04em',
                    color: 'primary.contrastText'
                  }}
                >
                  {metric.value}
                </Tiny>
                <Tiny sx={{ mt: pxToRem(12), fontSize: { xs: pxToRem(14), md: pxToRem(15) }, lineHeight: 1.85, color: 'primary.contrastText' }}>
                  {metric.description}
                </Tiny>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container >
    </Box >
  );
});

const CertificationPanel = memo(({ title, description, items }: { title: string; description: string; items: Array<CertificationCopy & { image: string; width: string }> }) => {
  return (
    <Box sx={{
      py: { xs: pxToRem(88), md: pxToRem(132) },
      background: '#f5f7fb'
    }}>
      <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
        <Box sx={{ maxWidth: pxToRem(760), mx: 'auto', textAlign: 'center' }}>
          <H2
            sx={{
              mt: pxToRem(14),
              fontSize: { xs: pxToRem(30), md: pxToRem(40) },
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </H2>
          <Tiny
            sx={{
              mt: pxToRem(18),
              fontSize: { xs: pxToRem(15), md: pxToRem(17) },
              lineHeight: 1.85,
              color: 'rgba(16, 19, 26, 0.7)',
            }}
          >
            {description}
          </Tiny>
        </Box>

        <Box
          sx={{
            mt: { xs: pxToRem(40), md: pxToRem(56) },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: pxToRem(16), md: pxToRem(20) },
          }}
        >
          {items.map((item, index) => (
            <motion.div key={item.title} {...cardFloatReveal} transition={{ ...cardFloatReveal.transition, delay: index * 0.08 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: pxToRem(28),
                  p: { xs: pxToRem(20), md: pxToRem(24) },
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: pxToRem(18),
                }}
              >
                <Box sx={{ minHeight: pxToRem(84), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.image} alt={item.title} style={{ width: item.width }} />
                </Box>
                <Tiny sx={{ fontSize: pxToRem(16), lineHeight: pxToRem(24), textAlign: 'center' }}>{item.title}</Tiny>
                <Tiny sx={{ fontSize: pxToRem(14), lineHeight: pxToRem(24), textAlign: 'center' }}>{item.description}</Tiny>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
});

const ProductPanel = memo(({ title, description, items }: { title: string; description: string; items: Array<ProductCopy & { image: string }> }) => {
  return (
    <Box sx={{ py: { xs: pxToRem(88), md: pxToRem(140) }, backgroundColor: '#fff' }}>
      <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
        <Box sx={{ maxWidth: pxToRem(760), mx: 'auto', textAlign: 'center' }}>

          <H2
            sx={{
              mt: pxToRem(14),
              fontSize: { xs: pxToRem(30), md: pxToRem(40) },
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </H2>
          <Tiny
            sx={{
              mt: pxToRem(18),
              fontSize: { xs: pxToRem(15), md: pxToRem(17) },
              lineHeight: 1.85,
              color: 'rgba(16, 19, 26, 0.7)',
            }}
          >
            {description}
          </Tiny>
        </Box>

        <Box
          sx={{
            mt: { xs: pxToRem(56), md: pxToRem(80) },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: pxToRem(140), md: pxToRem(200) },

          }}
        >
          {items.map((item, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <Box
                key={item.name}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: isImageLeft ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  gap: { xs: pxToRem(20), md: pxToRem(40) },
                }}
              >
                <Box
                  component={motion.div}
                  // initial={{
                  //   opacity: 0,
                  //   clipPath: isImageLeft ? 'inset(0 0 0 12%)' : 'inset(0 12% 0 0)',
                  //   scale: 1.03,
                  // }}
                  // whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)', scale: 1 }}
                  // viewport={{ once: true, amount: 0.35 }}
                  // transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  sx={{
                    width: { xs: '100%', md: '52%' },
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    img: {
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    },
                  }}
                >
                  <motion.img whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.35 }} src={item.image} alt={item.name} />
                </Box>
                <Box
                  component={motion.div}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true, amount: 0.4 }}
                  // transition={{ duration: 0.55, delay: 0.12 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  sx={{
                    width: { xs: '100%', md: '48%' },
                    p: { xs: 0, md: pxToRem(16) },
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: isImageLeft ? 'right' : 'left',
                  }}
                >
                  <Tiny sx={{ fontSize: pxToRem(13), letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(16, 19, 26, 0.48)' }}>
                    {item.title}
                  </Tiny>
                  <H4 sx={{ mt: pxToRem(10), fontSize: { xs: pxToRem(22), md: pxToRem(28) }, lineHeight: 1.3 }}>{item.name}</H4>
                  <Tiny sx={{ mt: pxToRem(12), fontSize: { xs: pxToRem(14), md: pxToRem(15) }, lineHeight: 1.85, color: 'rgba(16, 19, 26, 0.66)' }}>
                    {item.description}
                  </Tiny>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
});

const MarketPanel = memo(({
  title,
  description,
  proofs,
  testimonials,
}: {
  title: string;
  description: string;
  proofs: MarketProof[];
  testimonials: Testimonial[];
}) => {
  return (
    <Box sx={{ py: { xs: pxToRem(88), md: pxToRem(132) }, backgroundColor: '#f7f8fb' }}>
      <Container sx={{
        maxWidth: `${pxToRem(maxWidth)} !important`, maskImage: `linear-gradient(
  to right,
  rgba(0, 0, 0, 0) 0%,
  rgb(0, 0, 0) 12.5%,
  rgb(0, 0, 0) 87.5%,
  rgba(0, 0, 0, 0) 100%
)`,
      }} >
        <Box sx={{ maxWidth: pxToRem(760), mx: 'auto', textAlign: 'center' }}>
          <H2
            sx={{
              mt: pxToRem(14),
              fontSize: { xs: pxToRem(30), md: pxToRem(40) },
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </H2>
          <Tiny
            sx={{
              mt: pxToRem(18),
              fontSize: { xs: pxToRem(15), md: pxToRem(17) },
              lineHeight: 1.85,
              color: 'rgba(16, 19, 26, 0.7)',
            }}
          >
            {description}
          </Tiny>
        </Box>

        <Box
          sx={{
            mt: { xs: pxToRem(72), md: pxToRem(86) },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
          }}
        >
          {proofs.map((item, index) => (
            <motion.div key={item.title} {...proofStripReveal} transition={{ ...proofStripReveal.transition, delay: index * 0.08 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: pxToRem(28),
                  p: { xs: pxToRem(20), md: pxToRem(24) },
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: pxToRem(18),
                }}
              >
                <H4 sx={{ mt: pxToRem(10), fontSize: { xs: pxToRem(18), md: pxToRem(20) }, lineHeight: 1.3 }}>{item.title}</H4>
                <Tiny sx={{ mt: pxToRem(12), fontSize: { xs: pxToRem(14), md: pxToRem(15) }, lineHeight: 1.85, color: 'rgba(16, 19, 26, 0.66)' }}>
                  {item.description}
                </Tiny>
              </Card>
            </motion.div>
          ))}
        </Box>
        <Box sx={{ mt: { xs: pxToRem(64), md: pxToRem(82) } }}>
          <H4
            sx={{
              mt: pxToRem(18),
              fontSize: { xs: pxToRem(18), md: pxToRem(20) },
              lineHeight: 1.85,
              color: 'rgba(16, 19, 26, 0.7)',
              textAlign: 'center',
            }}
          >
            来自用户的声音
          </H4>
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
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} style={{ width: 'auto' }}>
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: pxToRem(20), md: pxToRem(24) },
                    borderRadius: pxToRem(28),
                    backgroundColor: '#fff',
                    border: '1px solid rgba(16, 19, 26, 0.08)',
                    boxShadow: '0 20px 40px rgba(16, 19, 26, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: pxToRem(24),
                  }}
                >
                  <Tiny sx={{ fontSize: { xs: pxToRem(15), md: pxToRem(16) }, lineHeight: 1.9, color: 'rgba(16, 19, 26, 0.82)' }}>
                    “{item.quote}”
                  </Tiny>
                  <FlexAlign sx={{ gap: pxToRem(12) }}>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      sx={{
                        width: pxToRem(48),
                        height: pxToRem(48),
                      }}
                    />
                    <Tiny sx={{ fontSize: pxToRem(15), color: '#10131A' }}>{item.name}</Tiny>
                  </FlexAlign>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
});

const CtaPanel = memo(({ title, description, buttonLabel, contactPath }: { title: string; description: string; buttonLabel: string; contactPath: string }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#050816',
      }}
    >
      <motion.div
        {...heroBackgroundLoop}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${assetUrl('/images/CTABanner.png')})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: 'scale(1.04)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(6, 9, 20, 0.36) 0%, rgba(6, 9, 20, 0.82) 100%)',
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: `${pxToRem(maxWidth)} !important`,
          py: { xs: pxToRem(56), md: pxToRem(84) },
        }}
      >
        <motion.div {...ctaGlowReveal}>
          <Box sx={{ maxWidth: pxToRem(780), mx: 'auto', textAlign: 'center' }}>
            <H2
              sx={{
                fontSize: { xs: pxToRem(28), md: pxToRem(42) },
                lineHeight: 1.16,
                letterSpacing: '-0.03em',
                color: '#fff',
              }}
            >
              {title}
            </H2>
            <Tiny
              sx={{
                mt: pxToRem(18),
                fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                lineHeight: 1.9,
                color: 'rgba(237, 247, 255, 0.76)',
              }}
            >
              {description}
            </Tiny>
            <FlexAlign sx={{ justifyContent: 'center', mt: pxToRem(28) }}>
              <AppButton
                component="a"
                href={contactPath}
                sx={{
                  px: pxToRem(26),
                  py: pxToRem(11),
                  textTransform: 'none',
                  fontSize: pxToRem(14),
                }}
              >
                {buttonLabel}
              </AppButton>
            </FlexAlign>
          </Box>
        </motion.div>

        <ContactUs
          sx={{
            mt: pxToRem(28),
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: { xs: pxToRem(8), sm: pxToRem(32) },
          }}
          bgColor="#fff"
        />
      </Container>
    </Box>
  );
});

const NewsFooter = memo(({ title, description, articles }: { title: string; description: string; articles: NewsArticle[] }) => {
  return (
    <Box sx={{ py: { xs: pxToRem(56), md: pxToRem(72) }, backgroundColor: '#fff' }}>
      <Container sx={{ maxWidth: `${pxToRem(maxWidth)} !important` }}>
        <motion.div {...ctaGlowReveal}>

          <H2
            sx={{
              mt: pxToRem(14),
              fontSize: { xs: pxToRem(30), md: pxToRem(40) },
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
              textAlign: 'center',
            }}
          >
            {title}
          </H2>
          <Tiny sx={{ mt: pxToRem(12), fontSize: { xs: pxToRem(14), md: pxToRem(15) }, textAlign: 'center', lineHeight: 1.85, color: 'rgba(16, 19, 26, 0.68)' }}>
            {description}
          </Tiny>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
              gap: pxToRem(20),
              mt: { xs: pxToRem(72), md: pxToRem(86) },
            }}
          >
            {articles.map((article, index) => (
              <Box key={article.slug}>
                <NewsCard article={article} index={index} />
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
});

const Home: NextPage<HomeProps> = ({ featuredNews, locale }) => {
  const contactPath = buildLocalePath(locale as (typeof supportedLocales)[number], '/contact');

  const hero = {
    eyebrow: '香港高品质饮用水',
    lines: "东江泉 - 东江源头的天然饮用水",
    description: '东江泉以“饮水思源”为品牌起点，把对水源的尊重、对品质的坚持，让一瓶水不仅值得饮用，也值得被长期信赖。',
  } satisfies HeroContent;

  const origin = {
    title: '东江泉，不只是一个名字',
    body1:
      '对香港而言，东江供水是一段真实而深刻的城市记忆。对东江泉而言，“东江”不只是水源的名字，更是一份关于来处、信任与连接的提醒。',
    body2:
      '我们以东江命名，纪念香港与东江供水一脉相连的时代印记，也希望把“饮水思源”从一句熟悉的话，延续成一个可以被看见、被饮用、被长期选择的高品质饮用水品牌。',
    highlights: [
      '东江源头水源地｜以源头识别建立品牌记忆',
      '花岗岩自然渗滤｜保留天然矿物层次与清冽口感',
      '香港“正”印与多重体系认证｜让品质更容易被信任',
    ],
  } satisfies OriginContent;

  const quality = {
    title: '高品质，必须经得起检验',
    description: '偏硅酸含量、重金属控制与微生物指标，共同定义这瓶水的纯净与稳定。',
  };

  const qualityMetrics: MetricContent[] = [
    {
      value: '8.787 mg/L',
      label: '偏硅酸含量',
      description: '天然矿物层次更清晰，饮用体验更具质感。',
    },
    {
      value: '几乎未检出',
      label: '重金属残留',
      description: '铅、汞、镉等指标远低于标准限值。',
    },
    {
      value: '显著优于标准',
      label: '微生物指标',
      description: '长期保持纯净、安全、稳定的水质表现。',
    },
  ];

  const certificationSection = {
    title: '被标准验证，也被长期信任',
    description: '从香港认可标准到国际质量体系，让品牌建立更清晰的信任基础。',
  };

  const certificationCopy: CertificationCopy[] = [
    {
      title: '香港优质“正”印认证',
      description: '以香港认可标准为基础，让高品质饮用水拥有更透明、更清晰的信任依据。',
    },
    {
      title: 'ISO 22000 & HACCP',
      description: '从食品安全管理到生产流程控制，持续维持稳定一致的质量体系。',
    },
    {
      title: 'Halal 清真认证',
      description: '为更广泛的市场合作与饮用场景提供更清晰的准入基础与选择信心。',
    },
  ];

  const productSection = {
    title: '为不同场景而生',
    description: '从高端接待到日常零售，东江泉以不同规格回应不同饮用节奏。',
  };

  const productCopy: ProductCopy[] = [
    {
      title: '350ml',
      name: '会务接待与精品陈列',
      description: '更适合高端接待、会务用水与讲究细节的展示场景。',
    },
    {
      title: '500ml',
      name: '日常零售与商务通用',
      description: '以经典容量覆盖更广泛的日常饮用和商务场景。',
    },
    {
      title: '550ml',
      name: '出行办公与长时饮用',
      description: '更充裕的容量适合办公、出行和持续饮用场景。',
    },
    {
      title: '3.8L',
      name: '家庭办公与长期补给',
      description: '面向家庭和办公等长期使用场景，满足更持续的饮用需求。',
    },
  ];

  const marketSection = {
    title: '从香港出发，进入更广阔的市场',
    description: '东江泉已进入香港本地消费场景，并凭借多年出口经验，持续走向更多海外市场。',
  };

  const marketProofs: MarketProof[] = [
    {
      title: '香港起点',
      description: '在本地市场建立清晰表达。',
    },
    {
      title: '海外延伸',
      description: '进入更多国际市场。',
    },
    {
      title: '长期存在',
      description: '持续积累品牌认知。',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: '林婉晴',
      role: '家庭用户｜沙田',
      avatar: assetUrl('/images/avatars/avatar-1.jpg'),
      quote: '入口很顺，喝起来没有杂味，家里日常备水之后，小朋友也更愿意主动喝水。',
    },
    {
      name: 'Jason Wong',
      role: '上班族｜中环',
      avatar: assetUrl('/images/avatars/avatar-2.jpg'),
      quote: '放在办公室很方便，水感清爽，开会前后喝都不会觉得有负担。',
    },
    {
      name: '陈雅雯',
      role: '健身爱好者｜观塘',
      avatar: assetUrl('/images/avatars/avatar-3.jpg'),
      quote: '运动后喝起来很舒服，口感比普通包装水更干净一些，我会愿意长期回购。',
    },
    {
      name: '黄启明',
      role: '自由职业者｜九龙',
      avatar: assetUrl('/images/avatars/avatar-4.jpg'),
      quote: '包装看起来很有质感，家里来客人的时候拿出来也体面，整体印象很好。',
    },
    {
      name: 'Grace Lau',
      role: '新手妈妈｜新界',
      avatar: assetUrl('/images/avatars/avatar-5.jpg'),
      quote: '家里人对饮用水比较挑，这款接受度很高，味道自然，日常喝起来更安心。',
    },
    {
      name: '张子轩',
      role: '设计从业者｜香港',
      avatar: assetUrl('/images/avatars/avatar-6.jpg'),
      quote: '我会在意品牌和视觉，这瓶水从包装到饮用体验都比较统一，确实有高级感。',
    },
  ];

  const ctaSection = {
    title: '让高品质饮用水进入更有价值的场景',
    description: '如果你正在寻找一个兼具香港品牌底蕴、高品质定位与国际合作基础的饮用水品牌，欢迎与东江泉团队建立联系。',
    button: '联系商务团队',
  };

  const newsSection = {
    title: '品牌与水源动态',
    description: '继续了解东江泉的水源、品质与市场表达。',
  };

  const certifications = certificationAssets.map((asset, index) => ({
    ...asset,
    ...certificationCopy[index],
  }));

  const products = productImages.map((image, index) => ({
    image,
    ...productCopy[index],
  }));

  return (
    <>
      <Head>
        <title>东江泉</title>
      </Head>
      <Box sx={{ backgroundColor: '#fff' }}>
        <HeroPanel hero={hero} contactPath={contactPath} />
        <OriginPanel origin={origin} />
        <QualityPanel
          title={quality.title}
          description={quality.description}
          metrics={qualityMetrics}
        />
        <CertificationPanel
          title={certificationSection.title}
          description={certificationSection.description}
          items={certifications}
        />
        <ProductPanel
          title={productSection.title}
          description={productSection.description}
          items={products}
        />
        <MarketPanel
          title={marketSection.title}
          description={marketSection.description}
          proofs={marketProofs}
          testimonials={testimonials}
        />
        <CtaPanel
          title={ctaSection.title}
          description={ctaSection.description}
          buttonLabel={ctaSection.button}
          contactPath={contactPath}
        />
        <NewsFooter title={newsSection.title} description={newsSection.description} articles={featuredNews} />
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
