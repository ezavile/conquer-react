/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

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
