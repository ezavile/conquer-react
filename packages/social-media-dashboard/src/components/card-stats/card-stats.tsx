import React from 'react';
import styled from 'styled-components';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import { TodayStatus } from 'models';

export interface CardStatsProps {
  status: TodayStatus;
  value: string;
  label: 'today' | '%';
}

const Container = styled.div<{ status: CardStatsProps['status'] }>`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => (props.status === 'up' ? '#1eb589' : '#dc414c')};
`;

export const CardStats: React.FC<CardStatsProps> = ({
  status,
  value,
  label,
}) => {
  const Caret = status === 'up' ? FaCaretUp : FaCaretDown;

  return (
    <Container status={status}>
      <Caret style={{ marginRight: '0.25rem' }} />
      <b>
        {value} {label}
      </b>
    </Container>
  );
};
