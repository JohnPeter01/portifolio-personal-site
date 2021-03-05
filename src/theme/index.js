const colors = {
  light: {
    background: {
      light: {
        color: '#FFFFFF',
      },
      main: {
        color: '#F2F2F2',
      },
    },
    borders: {
      main: {
        color: '#F1F1F1',
      },
    },
    primary: {
      main: {
        color: '#D7385E',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#fff',
      },
    },
    tertiary: {
      main: {
        color: '#070C0E',
        contrastText: '#fff',
      },
      light: {
        color: '#88989E',
        contrastText: '#fff',
      },
    },
  },
  dark: {},
};
/*
Limitações das proporções de tela.
*/
export const breakpoints = {
  xs: 0, // Extra Small
  sm: 480, // Small
  md: 768, // Medium
  lg: 992, // Large
  xl: 1200, // Extra Large
};

export default {
  colors,
  breakpoints,
};
