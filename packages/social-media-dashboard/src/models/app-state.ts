import { CurrentTheme } from './theme';

export interface AppState {
  currentTheme: CurrentTheme;
}

export const initialState: AppState = {
  currentTheme: 'dark',
};

export type AppDispatch = {
  setTheme: (currentTheme: CurrentTheme) => void;
};
