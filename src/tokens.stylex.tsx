import * as stylex from '@stylexjs/stylex';

const slate = {
  100: '#F0F4F8',
  200: '#D9E2EC',
  300: '#BCCCDC',
  400: '#9FB3C8',
  500: '#829AB1',
  600: '#627D98',
  700: '#486581',
  800: '#334E68',
  900: '#243B53',
};

export const colors = stylex.defineVars({
  primaryText: { default: 'black' },
  brand: '#627D98',
  panelBackgroundColor: slate[200],
});

export const spacing = stylex.defineVars({
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  xxl: '48px',
});

export const radius = stylex.defineVars({
  sm: '4px',
  md: '8px',
  lg: '16px',
});

export const shadows = stylex.defineVars({  
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px 4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #000',
});
