import styled from 'styled-components';
import { Color, COLORS } from 'styles/colors';

interface TextStyle {
  'font-size': string;
  'font-weight': 'bold' | 'normal';
  'line-height': string;
  'letter-spacing': string;
  'text-transform'?: 'uppercase';
}

export type TextType = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'body';

const styles: { [Key in TextType]: TextStyle } = {
  xxl: {
    'font-size': '200px',
    'font-weight': 'bold',
    'line-height': '200px',
    'letter-spacing': '-5px',
  },
  xl: {
    'font-size': '56px',
    'font-weight': 'bold',
    'line-height': '68px',
    'letter-spacing': '0',
  },
  l: {
    'font-size': '24px',
    'font-weight': 'bold',
    'line-height': '28px',
    'letter-spacing': '4.8px',
    'text-transform': 'uppercase',
  },
  m: {
    'font-size': '20px',
    'font-weight': 'normal',
    'line-height': '28px',
    'letter-spacing': '4px',
    'text-transform': 'uppercase',
  },
  s: {
    'font-size': '18px',
    'font-weight': 'bold',
    'line-height': '28px',
    'letter-spacing': '0',
  },
  xs: {
    'font-size': '15px',
    'font-weight': 'normal',
    'line-height': '28px',
    'letter-spacing': '3px',
    'text-transform': 'uppercase',
  },
  body: {
    'font-size': '18px',
    'font-weight': 'normal',
    'line-height': '28px',
    'letter-spacing': '0',
  },
};

export const Text = styled.span<{ type: TextType; color: Color }>`
  ${({ type }) => ({ ...styles[type] })};
  color: ${({ color }) => COLORS[color]};
`;
