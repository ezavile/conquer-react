type RequestStatus = 'idle' | 'pending' | 'resolved' | 'rejected';

export interface AppState {
  quote: {
    content: string;
    author: string;
  };
  timezone: {
    time: 'morning' | 'afternoon' | 'evening';
    formattedDate: string;
    abbr: string;
    city: string;
    countryCode: string;
    location: string;
    dayOfYear: number;
    dayOfWeek: number;
    weekNumber: number;
  };
  request: {
    quote: RequestStatus;
    timezone: RequestStatus;
  };
}

export const initialState: AppState = {
  quote: {
    content: '',
    author: '',
  },
  timezone: {
    time: null as any,
    abbr: '',
    formattedDate: new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    }),
    city: '',
    countryCode: '',
    location: '',
    dayOfYear: 0,
    dayOfWeek: 0,
    weekNumber: 0,
  },
  request: {
    quote: null as any,
    timezone: null as any,
  },
};

export type AppAction =
  | { type: 'setQuote'; payload: { content: string; author: string } }
  | { type: 'setDate'; payload: { formattedDate: string; hour: number } }
  | { type: 'setTimezoneData'; payload: Partial<AppState['timezone']> }
  | {
      type: 'request';
      payload: { key: keyof AppState['request']; status: RequestStatus };
    };

export type AppDispatch = (action: AppAction) => void;
