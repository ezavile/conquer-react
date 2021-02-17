import styled from 'styled-components';

import { CurrentTime } from 'models/current-time';
import { IMAGES } from './images';

export interface BackgroundImageProps {
  currentTime: CurrentTime;
}

const BackgroundImage = styled.div<BackgroundImageProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  z-index: -1;
  background-image: ${({ currentTime }) => `url(${IMAGES[currentTime].sm})`};

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
    background-image: ${({ currentTime }) => `url(${IMAGES[currentTime].md})`};
  }

  @media (min-width: 768px) {
    background-image: ${({ currentTime }) => `url(${IMAGES[currentTime].lg})`};
  }
`;

export { BackgroundImage };
