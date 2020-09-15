import React from 'react';
import styled from 'styled-components';

export interface CardStatsProps {
  Icon: React.ReactNode;
  status: 'up' | 'down';
}

const Container = styled.div<{ status: CardStatsProps['status'] }>`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => (props.status === 'up' ? '#1eb589' : '#dc414c')};
`;

export const CardStats: React.FC<CardStatsProps> = ({ Icon, status }) => (
  <Container status={status}>{Icon} 12 Today</Container>
);
