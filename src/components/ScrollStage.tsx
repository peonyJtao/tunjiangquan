import { memo, useRef, type ReactNode } from 'react';
import { Box, type SxProps, type Theme } from '@mui/material';
import { motion, useScroll, useTransform } from 'motion/react';
import { pxToRem } from '@/utils/fontUtils';

type ScrollStageProps = {
  backgroundImage: string;
  children?: ReactNode;
  id?: string;
  minHeight?: { xs: string; md: string };
  outerSx?: SxProps<Theme>;
  overlay?: { xs: string; md: string };
};

const defaultOverlay = {
  xs: 'linear-gradient(180deg, rgba(2, 6, 15, 0.12) 0%, rgba(2, 6, 15, 0.62) 50%, rgba(2, 6, 15, 0.92) 100%)',
  md: 'linear-gradient(90deg, rgba(2, 6, 15, 0.1) 0%, rgba(2, 6, 15, 0.26) 28%, rgba(2, 6, 15, 0.6) 62%, rgba(2, 6, 15, 0.94) 100%)',
} as const;

const ScrollStage = memo(({ backgroundImage, children, id, minHeight = { xs: '78vh', md: '100vh' }, outerSx, overlay = defaultOverlay }: ScrollStageProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const shellWidth = useTransform(scrollYProgress, [0.1, 0.45, 0.6], ['92%', '100%', '100%']);
  const shellRadius = useTransform(scrollYProgress, [0.1, 0.45, 0.6], [pxToRem(44), pxToRem(0), pxToRem(0)]);
  const imageScale = useTransform(scrollYProgress, [0.1, 0.6], [1.16, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.65], [0.45, 0.72, 1]);

  return (
    <Box
      id={id}
      ref={sectionRef}
      sx={{
        py: { xs: pxToRem(36), md: pxToRem(120) },
        backgroundColor: '#fff',
        ...outerSx,
      }}
    >
      <motion.div style={{ width: shellWidth, borderRadius: shellRadius, overflow: 'hidden', margin: '0 auto' }}>
        <Box
          sx={{
            position: 'relative',
            minHeight,
            backgroundColor: '#02060f',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              scale: imageScale,
              opacity: imageOpacity,
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: overlay,
            }}
          />
          {children ? <Box sx={{ position: 'relative', zIndex: 1, minHeight }}>{children}</Box> : null}
        </Box>
      </motion.div>
    </Box>
  );
});

ScrollStage.displayName = 'ScrollStage';

export default ScrollStage;
