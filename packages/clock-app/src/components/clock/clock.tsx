import { FC } from 'react';
import styled from 'styled-components';
import { RiSunFill } from 'react-icons/ri';

const GreetingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const GreetingMessage = styled.span``;

const TimeWrapper = styled.div``;

const Time = styled.span`
  font-size: 6.25rem;
  font-weight: bold;
  letter-spacing: -2.5px;
  margin-bottom: 1rem;
  margin-right: 0.75rem;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 10.9375rem;
    letter-spacing: -0.27375rem;
  }

  @media (min-width: 1440px) {
    font-size: 12.5rem;
    letter-spacing: -0.3125rem;
  }
`;

const LocalTime = styled.span`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 1.75rem;
  }
`;

const Location = styled.span`
  font-weight: bold;
`;

const Wrapper = styled.div`
  margin-bottom: 3rem;
  text-transform: uppercase;

  ${GreetingMessage}, ${Location} {
    font-size: 0.9375rem;
    line-height: 1.75rem;
    letter-spacing: 0.1875rem;
  }

  @media (min-width: 768px) {
    ${GreetingMessage}, ${Location} {
      font-size: 1.125rem;
      letter-spacing: 0.225rem;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;

    ${GreetingMessage}, ${Location} {
      font-size: 1.25rem;
      letter-spacing: 0.25rem;
    }
  }
`;

export const Clock: FC<{}> = () => {
  return (
    <Wrapper>
      <GreetingWrapper>
        <RiSunFill size="2rem" color="white" style={{ marginRight: '1rem' }} />
        <GreetingMessage>Good Morning</GreetingMessage>
      </GreetingWrapper>
      <TimeWrapper>
        <Time>23:14</Time>
        <LocalTime>BST</LocalTime>
      </TimeWrapper>
      <Location>IN LONDON, UK</Location>
    </Wrapper>
  );
};
