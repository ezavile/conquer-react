import { GrFacebook } from 'react-icons/gr';
import { FaCaretDown } from 'react-icons/fa';

import styled from 'styled-components';
import React from 'react';

import { Card, CardTitle, CardStats, Subheading } from 'components';

const SubscribersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubscribersValue = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

export const CardSubscriber = () => {
  return (
    <Card>
      <CardTitle>
        <Subheading>Page Views</Subheading>
        <GrFacebook color="#178FF5" size="1.25rem" />
      </CardTitle>
      <SubscribersWrapper>
        <SubscribersValue>1987</SubscribersValue>
        <CardStats
          Icon={<FaCaretDown style={{ marginRight: '0.25rem' }} />}
          status="down"
        />
      </SubscribersWrapper>
    </Card>
  );
};
