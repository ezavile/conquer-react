import styled from 'styled-components';
import { Color } from 'styles/colors';

interface TextStyle {
  'font-size': string;
  'font-weight': 'bold' | 'regular';
  'line-height': string;
  'letter-spacing': string;
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
  },
  m: {
    'font-size': '20px',
    'font-weight': 'regular',
    'line-height': '28px',
    'letter-spacing': '4px',
  },
  s: {
    'font-size': '18px',
    'font-weight': 'bold',
    'line-height': '28px',
    'letter-spacing': '0',
  },
  xs: {
    'font-size': '15px',
    'font-weight': 'regular',
    'line-height': '28px',
    'letter-spacing': '3px',
  },
  body: {
    'font-size': '18px',
    'font-weight': 'regular',
    'line-height': '28px',
    'letter-spacing': '0',
  },
};

export const Text = styled.span<{ type: TextType; color: Color }>`
  ${({ type }) => ({ ...styles[type] })};
  color: ${({ color }) => color};
`;
