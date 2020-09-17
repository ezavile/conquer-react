import styled from 'styled-components';
import { Theme } from 'models';

export const Subheading = styled.strong`
  color: ${(props: { theme: Theme }) => props.theme.subheadingColor};
  font-size: 0.875rem;
  font-weight: bold;
`;
