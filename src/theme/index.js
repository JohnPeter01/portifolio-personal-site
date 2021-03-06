import typographyVariants from './TypographyVariants';

const colors = {
  light: {
    background: {
      main: {
        color: '#233745',
      },
    },
    borders: {
      main: {
        color: '#F1F1F1',
      },
    },
    icon: {
      main: {
        color: '#F0F1E8',
        hover: '#0b8de6',
      },
    },
    primary: {
      main: {
        color: '#00FFFF',
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
        color: '#F0F1E8',
        contrastText: '#fff',
      },
      light: {
        color: '#88989E',
        contrastText: '#fff',
      },
    },
  },
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
  typographyVariants,
  fontFamily: '\'Roboto Mono\', sans-serif',
};
