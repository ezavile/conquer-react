import styled from 'styled-components';

import {
  BackgroundImage,
  Clock,
  Quote,
  TimezoneInfo,
  ToggleButton,
} from 'components';

import { GlobalStyle } from 'styles';

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-out;
  transform: translateY(0px);
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
  return (
    <>
      <GlobalStyle />
      <BackgroundImage currentTime="day" />
      <Wrapper>
        <Quote />
        <ClockWrapper>
          <Clock />
          <ToggleButton />
        </ClockWrapper>
      </Wrapper>
      <TimezoneInfo />
    </>
  );
}

export default App;
