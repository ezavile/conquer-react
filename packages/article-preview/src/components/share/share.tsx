import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';

const SOCIAL_NETWORKS = [
  { id: 'facebook', Icon: FaFacebookSquare },
  { id: 'twitter', Icon: FaTwitter },
  { id: 'pinterest', Icon: FaPinterest },
];

export const Share = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="md:relative md:flex md:flex-col md:items-center">
      <button
        type="button"
        aria-label="share"
        className={`relative z-10 flex justify-center items-center rounded-full w-8 h-8 border-2 focus:outline-none focus:border-grayish-blue transition duration-100 ${
          active
            ? 'border-grayish-blue bg-desaturated-dark-blue'
            : 'border-light-grayish-blue bg-light-grayish-blue'
        }`}
        onClick={() => setActive(!active)}
      >
        <IoIosShareAlt
          color={`${active ? '#FFF' : '#6E8098'}`}
          size="1.3rem"
          className="transition duration-100"
        />
      </button>
      <div
        className={`absolute flex items-center rounded-b-md px-8 h-20 bottom-0 inset-x-0 bg-dark-grayish-blue transition duration-100 text-sm ${
          active ? 'opacity-100' : 'opacity-0'
        } md:rounded-md md:left-auto md:h-auto md:justify-center md:py-3 md:mb-12 md:shadow-lg md:w-56 md:text-xs md:right-auto`}
      >
        <span
          className="hidden md:block"
          style={{
            width: 0,
            height: 0,
            bottom: '-8px',
            position: 'absolute',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid hsl(217, 19%, 35%)',
          }}
        />
        <strong className="text-grayish-blue uppercase mr-3 tracking-widest font-hairline">
          share
        </strong>
        <ul className="flex">
          {SOCIAL_NETWORKS.map(({ id, Icon }, index) => (
            <li
              key={id}
              className={`flex ${
                index < SOCIAL_NETWORKS.length - 1 ? 'mr-3' : ''
              }`}
            >
              <button
                type="button"
                className="focus:outline-none focus:shadow-outline"
                aria-label="share"
              >
                <Icon size="1.7em" color="white" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
