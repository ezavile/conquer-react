export type Color =
  | 'dark'
  | 'grayish'
  | 'white'
  | 'light-dark'
  | 'light-grayish';

export const COLORS: { [key in Color]: string } = {
  dark: '#000',
  grayish: '#303030',
  white: '#FFF',
  'light-dark': 'rgba(0, 0, 0, 0.5)',
  'light-grayish': '#999',
};
