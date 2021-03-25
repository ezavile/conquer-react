import styled from 'styled-components';

import {
  BackgroundImage,
  Clock,
  Quote,
  TimezoneInfo,
  TimezoneInfoRef,
  ToggleButton,
} from 'components';

import { GlobalStyle } from 'styles';
import { useRef, useState } from 'react';

const Wrapper = styled.main<{ moveUpTo: number }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-out;
  transform: ${(props) => `translateY(-${props.moveUpTo}px)`};
  padding: 2rem 1.625rem 2.5rem;

  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 69rem;
    width: 100%;
  }
`;

const ClockWrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

function App() {
  const timezoneRef = useRef<TimezoneInfoRef>(null);
  const [moveUpTo, setMoveUpTo] = useState(0);

  const handleToggle = (on: boolean) => {
    // TODO: add resize hook
    const height = on ? timezoneRef.current?.getHeight() || 0 : 0;
    setMoveUpTo(height);
  };

  return (
    <>
      <GlobalStyle />
      <BackgroundImage />
      <Wrapper moveUpTo={moveUpTo}>
        <Quote />
        <ClockWrapper>
          <Clock />
          <ToggleButton onToggle={handleToggle} />
        </ClockWrapper>
        <TimezoneInfo ref={timezoneRef} />
      </Wrapper>
    </>
  );
}

export default App;
