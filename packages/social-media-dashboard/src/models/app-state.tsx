import { GrFacebook, GrTwitter, GrInstagram, GrYoutube } from 'react-icons/gr';

import { CurrentTheme } from './theme';
import { SocialMedia } from './social-media';

export interface AppState {
  currentTheme: CurrentTheme;
  totalFollowers: string;
  socialMedia: SocialMedia[];
}

export const initialState: AppState = {
  currentTheme: 'dark',
  totalFollowers: '23,004',
  socialMedia: [
    {
      general: {
        name: 'facebook',
        color: '#178FF5',
        Icon: <GrFacebook color="#178FF5" size="1.25rem" />,
        username: '@nathanf',
      },
      followers: {
        total: '1987',
        today: '12',
        status: 'up',
      },
      metrics: [
        {
          sectionName: 'Page Views',
          total: '87',
          today: '3',
          status: 'up',
        },
        {
          sectionName: 'Likes',
          total: '52',
          today: '2',
          status: 'down',
        },
      ],
    },
    {
      general: {
        name: 'twitter',
        color: '#1DA1F2',
        Icon: <GrTwitter color="#1DA1F2" size="1.25rem" />,
        username: '@nathanf',
      },
      followers: {
        total: '1044',
        today: '99',
        status: 'up',
      },
      metrics: [
        {
          sectionName: 'Retweets',
          total: '117',
          today: '303',
          status: 'up',
        },
        {
          sectionName: 'Likes',
          total: '507',
          today: '553',
          status: 'up',
        },
      ],
    },
    {
      general: {
        name: 'instagram',
        color: '#EE877E',
        Icon: <GrInstagram color="#EE877E" size="1.25rem" />,
        username: '@realnathanf',
      },
      followers: {
        total: '11K',
        today: '1099',
        status: 'up',
      },
      metrics: [
        {
          sectionName: 'Likes',
          total: '5462',
          today: '2257',
          status: 'up',
        },
        {
          sectionName: 'Profile Views',
          total: '52K',
          today: '1375',
          status: 'up',
        },
      ],
    },
    {
      general: {
        name: 'youtube',
        color: '#C4032B',
        Icon: <GrYoutube color="#C4032B" size="1.25rem" />,
        username: 'Nathan F.',
      },
      followers: {
        total: '8239',
        today: '144',
        status: 'down',
      },
      metrics: [
        {
          sectionName: 'Likes',
          total: '107',
          today: '19',
          status: 'down',
        },
        {
          sectionName: 'Total Views',
          total: '1407',
          today: '12',
          status: 'down',
        },
      ],
    },
  ],
};

export type AppDispatch = {
  setTheme: (currentTheme: CurrentTheme) => void;
};
