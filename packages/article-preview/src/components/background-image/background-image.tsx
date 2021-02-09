import { FC } from 'react';

export interface BackgroundImageProps {
  src: string;
}

export const BackgroundImage: FC<BackgroundImageProps> = ({ src }) => (
  <div
    className="bg-center bg-cover rounded-t-md h-56 md:h-auto md:w-80 md:bg-left md:rounded-t-none md:rounded-l-md md:flex-shrink-0"
    style={{ backgroundImage: `url(${src})` }}
  />
);
