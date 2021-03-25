import { FC, useEffect, useState } from 'react';

import styled from 'styled-components';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { getIpData, getTimezoneData } from 'api';
import { useApp } from 'context/app-context';

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
      timezone: { time, abbr, city, countryCode },
    },
    dispatch,
  } = useApp();
  const [date, setDate] = useState(new Date());

  // TODO: check useAsync and useCallback
  async function getClockData() {
    // TODO: use request status for loading, error, resolved, etc
    const timezone = await getTimezoneData();
    const ip = await getIpData();

    dispatch({
      type: 'setTimezoneData',
      payload: {
        abbr: timezone.abbreviation,
        city: ip.city,
        countryCode: ip.country_code,
        location: ip.time_zone,
        dayOfYear: timezone.day_of_year,
        dayOfWeek: timezone.day_of_week,
        weekNumber: timezone.week_number,
      },
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      // TODO: improve perf
      // dispatch({ type: 'setHour', payload: { hour: currentDate.getHours() } });

      return setDate(currentDate);
    });

    dispatch({ type: 'setHour', payload: { hour: new Date().getHours() } });
    getClockData();

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Time>
          {date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Time>
        <LocalTime>{abbr}</LocalTime>
      </TimeWrapper>
      <Location>
        in {city}, {countryCode}
      </Location>
    </Wrapper>
  );
};
