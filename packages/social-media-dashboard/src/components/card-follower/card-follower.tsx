import { GrFacebook } from 'react-icons/gr';
import { FaCaretUp } from 'react-icons/fa';

import styled from 'styled-components';
import React from 'react';

import { Card, CardTitle, CardStats, Subheading } from 'components';
import { Theme } from 'models';

const Container = styled(Card)`
  text-align: center;
  border-top: 0.25rem solid #1da1f2;
`;

const SubscribersWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const SubscribersValue = styled.span`
  font-weight: bold;
  display: block;
  font-size: 3.5rem;
`;

const SubscribersLabel = styled.span`
  color: ${(props: { theme: Theme }) => props.theme.subheadingColor};
  letter-spacing: 0.313rem;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export const CardFollower = () => {
  return (
    <Container>
      <h3 className="cr_u-srOnly">facebook</h3>
      <CardTitle center>
        <GrFacebook
          color="#178FF5"
          style={{ marginRight: '0.5rem' }}
          size="1.25rem"
        />
        <Subheading>@nathanf</Subheading>
      </CardTitle>
      <SubscribersWrapper>
        <SubscribersValue>1987</SubscribersValue>
        <SubscribersLabel>Followers</SubscribersLabel>
      </SubscribersWrapper>
      <CardStats
        Icon={<FaCaretUp style={{ marginRight: '0.25rem' }} />}
        status="up"
      />
    </Container>
  );
};
