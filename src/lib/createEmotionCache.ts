import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

const isBrowser = typeof document !== 'undefined';

export default function createEmotionCache(direction: 'rtl' | 'ltr' = 'ltr') {
  if (direction === 'rtl') {
    return createCache({
      key: 'muirtl',
      stylisPlugins: [prefixer, rtlPlugin],
    });
  }
  
  return createCache({
    key: 'mui',
    prepend: true,
  });
}
