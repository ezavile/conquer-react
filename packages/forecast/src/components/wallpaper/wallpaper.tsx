/** @jsx jsx */
import * as Emotion from '@emotion/core';
import * as React from 'react';

const { css, jsx } = Emotion;

interface Wallpaper {
  url: string;
}

export const Wallpaper: React.FC<Wallpaper> = ({ url }) => (
  <div
    className="h-screen bg-cover bg-center"
    css={css`
      background-color: #000;
      box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);
      background-image: url(${url});
    `}
  />
);
