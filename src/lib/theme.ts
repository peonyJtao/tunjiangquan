/*
 * @Date: 2026-04-23 21:03:36
 * @LastEditors: peonyJtao
 * @LastEditTime: 2026-05-05 00:24:36
 * @FilePath: /东江泉/src/lib/theme.ts
 * @description:
 */
import { createTheme, Direction } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customGradients: {
      primary: string;
    };
  }

  interface ThemeOptions {
    customGradients?: {
      primary?: string;
    };
  }
}

const getTheme = (direction: Direction) => createTheme({
  direction,
  palette: {
    primary: {
      main: '#0095E6', // Brand blue from logo
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4fc3f7', // Light blue
    },
    background: {
      default: '#ffffff', // Light airy blue background
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1c1e',
      secondary: '#44474e',
    }
  },
  customGradients: {
    // @ts-ignore
    default: 'radial-gradient(circle, rgba(0,249,229,1) 0%, rgba(0,149,230,1) 100%)',
    primary: 'linear-gradient(110deg,#aafc89,#00f9e5 44%,#0095E6)',
    // @ts-ignore
    secondary: 'linear-gradient(106deg,#aafc89 0,#00f9e5 44%,#0095E6 100%)',
  },
  typography: {
    fontFamily: '"Gilroy"',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: '10px 24px',
          borderRadius: 100,
          textTransform: 'none',
          ...(ownerState.variant === 'contained' && ownerState.color === 'primary' && {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0, 77, 64, 0.2)',
            },
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default getTheme;
