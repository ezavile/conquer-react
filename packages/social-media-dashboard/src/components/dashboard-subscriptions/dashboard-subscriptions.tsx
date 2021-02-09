import { useContext } from 'react';
import styled from 'styled-components';

import { AppStateContext } from 'app-context';
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
  const { socialMedia } = useContext(AppStateContext);

  return (
    <Container>
      <SectionHeading>Overview - Today</SectionHeading>
      {socialMedia.map((media) => (
        <CardSubscriber key={`${media.general.name}-subscribers`} {...media} />
      ))}
    </Container>
  );
};
