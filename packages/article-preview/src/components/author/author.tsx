import React from 'react';

export interface AuthorProps {
  avatar: string;
  name: string;
  publishedAt: string;
}

export const Author: React.FC<AuthorProps> = ({
  avatar,
  name,
  publishedAt,
}) => (
  <div className="flex items-center whitespace-no-wrap">
    <img src={avatar} className="w-12 h-12 rounded-full mr-4" alt="" />
    <div className="flex flex-col text-sm">
      <span>
        <span className="sr-only">Author:</span>
        <strong className="text-dark-grayish-blue font-bold">{name}</strong>
      </span>
      <span>
        <span className="sr-only">Published at</span>
        <time className="text-grayish-blue" dateTime={publishedAt}>
          {publishedAt}
        </time>
      </span>
    </div>
  </div>
);
