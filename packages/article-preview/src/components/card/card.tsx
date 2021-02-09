import { FC } from 'react';

import { Author, BackgroundImage, Share } from 'components';

export interface CardProps {
  image: string;
  title: string;
  description: string;
  author: {
    avatar: string;
    name: string;
    publishedAt: string;
  };
}

export const Card: FC<CardProps> = ({
  image,
  title,
  description,
  author: { avatar, name, publishedAt },
}) => {
  return (
    <article className="flex flex-col bg-white rounded-md m-auto w-10/12 max-w-xl md:flex-row md:max-w-4xl">
      <BackgroundImage src={image} />
      <div className="px-8 pt-8 pb-4 relative">
        <h2 className="text-dark-grayish-blue mb-4">{title}</h2>
        <p className="text-desaturated-dark-blue mb-8">{description}</p>
        <div className="flex justify-between items-center">
          <Author avatar={avatar} name={name} publishedAt={publishedAt} />
          <Share />
        </div>
      </div>
    </article>
  );
};
