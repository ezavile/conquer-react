export type TodayStatus = 'up' | 'down';

export interface SocialMediaFollowers {
  total: string;
  today: string;
  status: TodayStatus;
}

export interface SocialMediaMetrics {
  sectionName: string;
  total: string;
  today: string;
  status: TodayStatus;
}

export interface SocialMedia {
  general: {
    name: string;
    color: string;
    Icon: React.ReactNode;
    username: string;
  };
  followers: SocialMediaFollowers;
  metrics: SocialMediaMetrics[];
}
