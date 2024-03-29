import { fetchRandomQuote, getIpData, fetchTimezoneData } from 'api';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { AppAction, AppDispatch, AppState, initialState } from './app-model';

const ClockAppContext = createContext<{
  state: AppState;
  dispatch: AppDispatch;
}>({ state: initialState, dispatch: undefined as any });

ClockAppContext.displayName = 'ClockAppContext';

/**
 * TODO:
 * use produce
 * use xState for request status
 * use error handler
 */
export function clockAppReducer(state: AppState, action: AppAction): AppState {
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
  const [state, dispatch] = useReducer(clockAppReducer, initialState);

  return (
    <ClockAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ClockAppContext.Provider>
  );
}

function useClockAppState() {
  const context = useContext(ClockAppContext);

  if (context === undefined) {
    throw new Error('useClockAppContext must be used within a AppProvider');
  }

  return context;
}

export { AppProvider, useClockAppState };
