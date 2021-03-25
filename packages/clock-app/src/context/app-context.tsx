import { createContext, ReactNode, useContext, useReducer } from 'react';
import { AppAction, AppDispatch, AppState, initialState } from './app-model';

const AppStateContext = createContext<AppState>(initialState);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

/**
 * TODO:
 * use produce
 * use xState for request status
 * use error handler
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
    case 'setHour': {
      const { hour } = action.payload;

      const isMorning = hour >= 5 && hour < 12 && 'morning';
      const isAfternoon = hour >= 12 && hour < 18 && 'afternoon';

      return {
        ...state,
        timezone: {
          ...state.timezone,
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

function AppProvider({ children }: { children: ReactNode }) {
  // TODO: check useSafeDispatch
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
