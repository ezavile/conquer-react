import { ColorName } from './Tokens';

export const colors: {
  [key in ColorName]: { hex: string; rgb: string; hsl: string };
} = {
  'medium-slate-blue': {
    hex: '#7C5DFA',
    rgb: '124, 93, 250',
    hsl: '252°, 94%, 67%',
  },
  'light-slate-blue': {
    hex: '#9277FF',
    rgb: '146, 119, 255',
    hsl: '252°, 100%, 73%',
  },
  'midnight-express': {
    hex: '#1E2139',
    rgb: '30, 33, 57',
    hsl: '233°, 31%, 17%',
  },
  valhalla: {
    hex: '#252945',
    rgb: '37, 41, 69',
    hsl: '233°, 31%, 17%',
  },
  'link-water': {
    hex: '#DFE3FA',
    rgb: '223, 227, 250',
    hsl: '231°, 73%, 93%',
  },
  'cool-gray': {
    hex: '#888EB0',
    rgb: '136, 142, 176',
    hsl: '231°, 20%, 61%',
  },
  'ship-cove': {
    hex: '#7E88C3',
    rgb: '126, 136, 195',
    hsl: '231°, 37%, 63%',
  },
  cinder: {
    hex: '#0C0E16',
    rgb: '12, 14, 22',
    hsl: '228°, 29%, 7%',
  },
  carnation: {
    hex: '#EC5757',
    rgb: '236, 87, 87',
    hsl: '0°, 80%, 63%',
  },
  'light-salmon-pink': {
    hex: '#9277FF',
    rgb: '255, 151, 151',
    hsl: '0°, 100%, 80%',
  },
  'white-lilac': {
    hex: '#F8F8FB',
    rgb: '248, 248, 251',
    hsl: '240°, 27%, 98%',
  },
  mirage: {
    hex: '#141625',
    rgb: '20, 22, 37',
    hsl: '233°, 30%, 11%',
  },
};
