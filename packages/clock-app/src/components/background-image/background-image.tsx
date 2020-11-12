import styled from 'styled-components';

import { CurrentTime } from 'models/current-time';
import smDay from './sm-daytime.jpg';
import mdDay from './md-daytime.jpg';
import lgDay from './lg-daytime.jpg';
import smNight from './sm-nighttime.jpg';
import mdNight from './md-nighttime.jpg';
import lgNight from './lg-nighttime.jpg';

const images = {
  daytime: {
    sm: smDay,
    md: mdDay,
    lg: lgDay,
  },
  nighttime: {
    sm: smNight,
    md: mdNight,
    lg: lgNight,
  },
};

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
  background-image: ${({ currentTime }) => `url(${images[currentTime].sm})`};

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
    background-image: ${({ currentTime }) => `url(${images[currentTime].md})`};
  }

  @media (min-width: 768px) {
    background-image: ${({ currentTime }) => `url(${images[currentTime].lg})`};
  }
`;

export { BackgroundImage };
