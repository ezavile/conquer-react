import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter';
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  overflow: hidden;
}
`;
