import React from 'react';
import styled from 'styled-components';
import { CardSubscriber, SectionHeading } from 'components';

const Container = styled.section`
  display: grid;
  column-gap: 1.875rem;
  row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15.9375rem, 1fr));

  ${SectionHeading} {
    grid-column: 1 / -1;
  }
`;

export const DashboardSubscriptions = () => {
  return (
    <Container>
      <SectionHeading>Overview - Today</SectionHeading>
      <CardSubscriber />
      <CardSubscriber />
      <CardSubscriber />
      <CardSubscriber />
    </Container>
  );
};
