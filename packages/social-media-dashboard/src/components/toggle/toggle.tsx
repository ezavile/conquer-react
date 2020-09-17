import styled from 'styled-components';
import React, { useContext } from 'react';

import { AppDispatchContext } from 'app-context';
import { Subheading } from 'components';
import { Theme, themes } from 'models';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Mode = styled(Subheading)`
  margin-right: 0.8125rem;
`;

const toggleWidth = '3rem';
const toggleHeight = '1.5rem';
const circleWidth = '1.125rem';
const circlePadding = '3px';

const ToggleInput = styled.label`
  display: inline-block;
  height: ${toggleHeight};
  position: relative;
  width: ${toggleWidth};

  &:hover {
    span {
      background: ${themes.dark.toggleBg};

      &::before {
        background-color: ${themes.dark.toggleCircleColor};
      }
    }
  }

  input {
    appearance: none;
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    margin: 0;
    max-width: 100%;
    outline: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  span {
    display: flex;
    align-items: center;
    background: ${(props: { theme: Theme }) => props.theme.toggleBg};
    border-radius: 0.75rem;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.5s;

    &::before {
      background-color: ${(props: { theme: Theme }) =>
        props.theme.toggleCircleColor};
      border-radius: 50%;
      content: '';
      height: ${circleWidth};
      left: ${circlePadding};
      position: absolute;
      transition: all 0.5s;
      width: ${circleWidth};
    }
  }

  input:checked + span::before {
    left: calc(100% - ${circleWidth} - ${circlePadding});
  }
`;

export const Toggle = () => {
  const { setTheme } = useContext(AppDispatchContext);

  return (
    <Container>
      <Mode>Dark Mode</Mode>
      <ToggleInput>
        <input
          type="checkbox"
          onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
        />
        <span />
      </ToggleInput>
    </Container>
  );
};
