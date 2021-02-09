import { useContext } from 'react';
import styled from 'styled-components';

import { AppStateContext } from 'app-context';
import { mediaQuery } from 'global-style';
import { CardFollower } from 'components';

const Container = styled.section`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15.9375rem, 1fr));
  margin-bottom: 2.875rem;

  @media ${mediaQuery.tablet} {
    gap: 1.875rem;
  }
`;

export const DashboardFollowers = () => {
  const { socialMedia } = useContext(AppStateContext);

  return (
    <Container>
      <h2 className="cr_u-srOnly">Followers</h2>
      {socialMedia.map((media) => (
        <CardFollower key={`${media.general.name}-followers`} {...media} />
      ))}
    </Container>
  );
};
