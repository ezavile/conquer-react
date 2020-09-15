import React from 'react';
import styled from 'styled-components';

import { SocialMedia } from 'models';

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

export const CardSubscriber: React.FC<SocialMedia> = ({
  general: { name, Icon },
  metrics,
}) => {
  return (
    <>
      {metrics.map(({ sectionName, total, today, status }) => (
        <Card key={`${name}-${sectionName}`}>
          <CardTitle>
            <h3>
              <Subheading>{sectionName}</Subheading>
            </h3>
            {Icon}
          </CardTitle>
          <SubscribersWrapper>
            <SubscribersValue>{total}</SubscribersValue>
            <CardStats status={status} value={today} label="%" />
          </SubscribersWrapper>
        </Card>
      ))}
    </>
  );
};
