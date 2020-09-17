import styled from 'styled-components';
import { Theme } from 'models';

export const SectionHeading = styled.h2`
  color: ${(props: { theme: Theme }) => props.theme.sectionHeadingColor};
  font-size: 1.5rem;
  font-weight: bold;
`;
