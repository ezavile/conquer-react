import React from 'react';
import styled from 'styled-components';

import { Theme, SocialMedia } from 'models';

import { Card, CardTitle, CardStats, Subheading } from 'components';

const Container = styled(Card)<{ color: string }>`
  text-align: center;
  border-top: 0.25rem solid ${(props) => props.color};
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

export const CardFollower: React.FC<SocialMedia> = ({
  general: { name, username, Icon, color },
  followers: { total, today, status },
}) => (
  <Container color={color}>
    <h3 className="cr_u-srOnly">{name}</h3>
    <CardTitle center>
      {Icon}
      <Subheading style={{ marginLeft: '0.5rem' }}>{username}</Subheading>
    </CardTitle>
    <SubscribersWrapper>
      <SubscribersValue>{total}</SubscribersValue>
      <SubscribersLabel>Followers</SubscribersLabel>
    </SubscribersWrapper>
    <CardStats status={status} value={today} label="today" />
  </Container>
);
