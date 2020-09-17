import React from 'react';
import styled from 'styled-components';

export interface CardTitleProps {
  center?: boolean;
}

export const Container = styled.div<CardTitleProps>`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
`;

export const CardTitle: React.FC<CardTitleProps> = ({ center, children }) => (
  <Container center={center}>{children}</Container>
);
