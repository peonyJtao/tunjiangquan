/**
 * 字体单位转换工具
 * 注意：HTML基准字体大小现在是响应式的：
 * - 移动设备(≤768px): 14px = 1rem
 * - 桌面设备(769px-1439px): 16px = 1rem
 * - 大屏设备(≥1440px): 18px = 1rem
 */

// 默认基准字体大小（桌面端）
const BASE_FONT_SIZE = 16;

/**
 * 将px值转换为rem字符串（基于16px基准）
 * @param px 像素值
 * @returns rem字符串（如 "1.5rem"）
 */
export const pxToRem = (px: number): string => {
  return `${px / BASE_FONT_SIZE}rem`;
};

/**
 * 将px值转换为rem字符串（指定基准）
 * @param px 像素值
 * @param baseFontSize 基准字体大小，默认16px
 * @returns rem字符串（如 "1.5rem"）
 */
export const pxToRemWithBase = (px: number, baseFontSize: number = BASE_FONT_SIZE): string => {
  return `${px / baseFontSize}rem`;
};

/**
 * 将px字符串转换为rem字符串
 * @param pxString px字符串（如 "24px"）
 * @returns rem字符串（如 "1.5rem"）
 */
export const pxStringToRem = (pxString: string): string => {
  const px = parseFloat(pxString.replace('px', ''));
  return pxToRem(px);
};

/**
 * 批量转换字体大小配置对象
 * @param sizes 字体大小配置对象
 * @returns 转换为rem的配置对象
 */
export const convertSizesToRem = <T extends Record<string, number>>(sizes: T): Record<keyof T, string> => {
  const result = {} as Record<keyof T, string>;
  for (const key in sizes) {
    result[key] = pxToRem(sizes[key]);
  }
  return result;
};

/**
 * 预定义的字体大小（rem单位，基于16px基准计算）
 * 注意：实际显示大小会根据设备的HTML基准字体大小自动调整
 */
export const FONT_SIZES = {
  tiny: pxToRem(12),      // 0.75rem - 移动端10.5px, 桌面端12px, 大屏13.5px
  small: pxToRem(13),     // 0.8125rem
  body: pxToRem(14),      // 0.875rem - 移动端12.25px, 桌面端14px, 大屏15.75px
  medium: pxToRem(16),    // 1rem - 移动端14px, 桌面端16px, 大屏18px
  large: pxToRem(18),     // 1.125rem
  xl: pxToRem(24),        // 1.5rem
  xxl: pxToRem(28),       // 1.75rem
  huge: pxToRem(36),      // 2.25rem
  massive: pxToRem(48),   // 3rem
  giant: pxToRem(64)      // 4rem - 移动端56px, 桌面端64px, 大屏72px
};

/**
 * Typography组件的字体大小映射
 */
export const TYPOGRAPHY_SIZES = {
  h1: pxToRem(48),        // 2rem
  h2: pxToRem(30),        // 1.5rem
  h3: pxToRem(24),        // 1.125rem
  h4: pxToRem(20),        // 1rem
  h5: pxToRem(18),        // 0.875rem
  h6: pxToRem(16),        // 0.8125rem
  paragraph: pxToRem(18), // 0.875rem
  small: pxToRem(13),     // 0.8125rem
  span: pxToRem(14),      // 0.875rem
  tiny: pxToRem(16),
  tiny2: pxToRem(12)         // 0.8125rem
};


export const getToken = (tokenName) => {
  return localStorage.getItem(tokenName);
};

export const getInfo = (tokenName) => {
  return JSON.parse(localStorage.getItem(tokenName));
};

export const setToken = (tokenName, accessToken) => {
  if (accessToken) {
    localStorage.setItem(tokenName, accessToken);
  } else {
    localStorage.removeItem(tokenName);
  }
};
