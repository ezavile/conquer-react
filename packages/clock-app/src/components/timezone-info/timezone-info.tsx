import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles';

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(40.7742px);
  color: ${COLORS.grayish};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  padding: 3rem 1.625rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2.625rem;
  }

  @media (min-width: 1440px) {
    max-width: 69rem;
    margin: 0 auto;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RowLabel = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 0.625rem;
  line-height: 1.75rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 0.8125rem;
    letter-spacing: 0.1625rem;
  }
`;

const RowValue = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.5125rem;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 3.025rem;
  }
`;

export interface TimezoneInfoRef {
  getHeight: () => number | undefined;
}

export const TimezoneInfo = forwardRef((_props, ref: Ref<TimezoneInfoRef>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      getHeight() {
        return wrapperRef.current?.offsetHeight;
      },
    };
  });

  return (
    <Wrapper ref={wrapperRef}>
      <Container>
        <Row>
          <RowLabel>Current timezone</RowLabel>
          <RowValue>Europe/London</RowValue>
        </Row>
        <Row>
          <RowLabel>Day of the year</RowLabel>
          <RowValue>295</RowValue>
        </Row>
        <Row>
          <RowLabel>Day of the week</RowLabel>
          <RowValue>5</RowValue>
        </Row>
        <Row>
          <RowLabel>Week number</RowLabel>
          <RowValue>42</RowValue>
        </Row>
      </Container>
    </Wrapper>
  );
});
