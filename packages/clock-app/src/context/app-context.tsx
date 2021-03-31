import { fetchRandomQuote, getIpData, fetchTimezoneData } from 'api';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { AppAction, AppDispatch, AppState, initialState } from './app-model';

const AppStateContext = createContext<AppState>(initialState);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

/**
 * TODO:
 * use produce
 * use xState for request status
 * use error handler
 * https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c
 */
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'request': {
      const { key, status } = action.payload;

      return {
        ...state,
        request: {
          ...state.request,
          [key]: status,
        },
      };
    }
    case 'setQuote': {
      const { content, author } = action.payload;

      return {
        ...state,
        quote: {
          content,
          author,
        },
      };
    }
    case 'setDate': {
      const { formattedDate, hour } = action.payload;

      const isMorning = hour >= 5 && hour < 12 && 'morning';
      const isAfternoon = hour >= 12 && hour < 18 && 'afternoon';

      return {
        ...state,
        timezone: {
          ...state.timezone,
          formattedDate,
          time: isMorning || isAfternoon || 'evening',
        },
      };
    }
    case 'setTimezoneData': {
      return {
        ...state,
        timezone: {
          ...state.timezone,
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export async function getRandomQuote(dispatch: Dispatch<AppAction>) {
  const key = 'quote';

  try {
    dispatch({ type: 'request', payload: { key, status: 'pending' } });
    const { content, author } = await fetchRandomQuote();
    dispatch({ type: 'setQuote', payload: { content, author } });
    dispatch({ type: 'request', payload: { key, status: 'resolved' } });
  } catch (error) {
    dispatch({ type: 'request', payload: { key, status: 'rejected' } });

    throw error;
  }
}

export async function getTimezone(dispatch: Dispatch<AppAction>) {
  const key = 'timezone';

  try {
    dispatch({ type: 'request', payload: { key, status: 'pending' } });
    const timezone = await fetchTimezoneData();
    const ip = await getIpData();
    dispatch({
      type: 'setTimezoneData',
      payload: {
        abbr: timezone.abbreviation,
        city: ip.city,
        countryCode: ip.country_code,
        location: ip.time_zone,
        dayOfYear: timezone.day_of_year,
        dayOfWeek: timezone.day_of_week,
        weekNumber: timezone.week_number,
      },
    });
    dispatch({ type: 'request', payload: { key, status: 'resolved' } });
  } catch (error) {
    dispatch({ type: 'request', payload: { key, status: 'rejected' } });

    throw error;
  }
}

function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }

  return context;
}

// TODO: use context module pattern
function useApp() {
  return { state: useAppState(), dispatch: useAppDispatch() };
}

export { AppProvider, useApp };
