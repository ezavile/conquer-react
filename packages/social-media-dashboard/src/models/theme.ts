export interface Theme {
  bodyBg: string;
  topBg: string;
  cardBg: string;
  cardHoverBg: string;
  headingColor: string;
  sectionHeadingColor: string;
  subheadingColor: string;
  textColor: string;
  hrBg: string;
  toggleBg: string;
  toggleCircleColor: string;
}

export interface Themes {
  light: Theme;
  dark: Theme;
}

export const themes: Themes = {
  light: {
    bodyBg: '#fff',
    topBg: '#F7F9FF',
    cardBg: '#F1F3FA',
    cardHoverBg: '#E1E4F0',
    headingColor: '#1D1F29',
    sectionHeadingColor: '#63687D',
    subheadingColor: '#63687D',
    textColor: '#1D1F29',
    hrBg: '#848BAB',
    toggleBg: 'linear-gradient(0deg, #aeb3cb 0%, #aeb3cb 100%)',
    toggleCircleColor: '#fff',
  },
  dark: {
    bodyBg: '#1d1f29',
    topBg: '#20222f',
    cardBg: '#252b42',
    cardHoverBg: '#333A55',
    headingColor: '#fff',
    sectionHeadingColor: '#fff',
    subheadingColor: '#8c98c6',
    textColor: '#fff',
    hrBg: '#333a55',
    toggleBg: 'linear-gradient(225deg, #40db82 0%, #388fe7 98.02%)',
    toggleCircleColor: '#252b42',
  },
};

export type CurrentTheme = keyof Themes;
