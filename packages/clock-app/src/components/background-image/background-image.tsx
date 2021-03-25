import { useApp } from 'context/app-context';
import { AppState } from 'context/app-model';
import styled from 'styled-components';

import { IMAGES } from './images';

export interface WrapperProps {
  time: AppState['timezone']['time'];
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  z-index: -1;
  background: ${({ time }) => `${time ? `url(${IMAGES[time].sm})` : 'black'}`};

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 576px) {
    background: ${({ time }) =>
      `${time ? `url(${IMAGES[time].md})` : 'black'}`};
  }

  @media (min-width: 768px) {
    background: ${({ time }) =>
      `${time ? `url(${IMAGES[time].lg})` : 'black'}`};
  }
`;

export const BackgroundImage = () => {
  const {
    state: {
      timezone: { time },
    },
  } = useApp();

  return <Wrapper time={time} />;
};
