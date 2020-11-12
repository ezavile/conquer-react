import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${reset}

body {
  font-family: 'Inter';
  background-color: #000;
}
`;
