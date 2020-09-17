import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';
import { Theme } from 'models';

export const GlobalStyle = createGlobalStyle`
${reset}

${({ theme }: { theme: Theme }) => css`
  body {
    font-family: 'Inter';
    min-height: 100vh;
    background-color: ${theme.bodyBg};
    color: ${theme.textColor};

    &:before {
      content: '';
      background-color: ${theme.topBg};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 14.7rem;
      z-index: -1;
    }
  }

  .cr_u-srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`}`;

export const mediaQuery = {
  tablet: `(min-width: 768px)`,
};
