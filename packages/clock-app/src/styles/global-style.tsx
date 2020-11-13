import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyle = createGlobalStyle`
${reset}

body {
  font-family: 'Inter';
  background-color: ${COLORS.dark};
}
`;
