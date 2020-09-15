import styled from 'styled-components';
import { Theme } from 'models';
import { mediaQuery } from 'global-style';

export const Heading = styled.h1`
  color: ${(props: { theme: Theme }) => props.theme.headingColor};
  font-size: 1.5rem;
  font-weight: bold;

  @media ${mediaQuery.tablet} {
    font-size: 1.75rem;
  }
`;
