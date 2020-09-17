import styled from 'styled-components';

import { Theme } from 'models';

export const Card = styled.article`
  background-color: ${(props: { theme: Theme }) => props.theme.cardBg};
  border-radius: 0.25rem;
  padding: 1.5rem;
  position: relative;

  & > * {
    z-index: 1;
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background-color: transparent;
    transition: background-color ease 0.5s;
  }

  &:hover {
    &::after {
      background-color: ${(props: { theme: Theme }) => props.theme.cardHoverBg};
    }
  }
`;
