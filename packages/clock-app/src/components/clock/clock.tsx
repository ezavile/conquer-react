import { FC, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { useClockAppState, getTimezone } from 'context/app-context';
import { RequestHandler } from 'context/request-context';

const GreetingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const GreetingMessage = styled.span`
  span {
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

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
  const {
    state: {
      timezone: { formattedDate, time, abbr, city, countryCode },
    },
    dispatch,
  } = useClockAppState();

  const minuteRef = useRef<number>();

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const currentMinute = currentDate.getMinutes();

      if (minuteRef.current === currentMinute) return;

      minuteRef.current = currentMinute;

      dispatch({
        type: 'setDate',
        payload: {
          formattedDate: currentDate.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          }),
          hour: currentDate.getHours(),
        },
      });
    });

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  useEffect(() => {
    getTimezone(dispatch);
  }, [dispatch]);

  const Icon = time === 'evening' ? RiMoonFill : RiSunFill;

  return (
    <Wrapper>
      <GreetingWrapper>
        <Icon size="2rem" color="white" style={{ marginRight: '1rem' }} />
        <GreetingMessage>
          Good {time}
          <span>, It&apos;s currently</span>
        </GreetingMessage>
      </GreetingWrapper>
      <TimeWrapper>
        <Time>{formattedDate}</Time>
        <RequestHandler request="timezone">
          <LocalTime>{abbr}</LocalTime>
        </RequestHandler>
      </TimeWrapper>
      <RequestHandler request="timezone">
        <Location>
          in {city}, {countryCode}
        </Location>
      </RequestHandler>
    </Wrapper>
  );
};
