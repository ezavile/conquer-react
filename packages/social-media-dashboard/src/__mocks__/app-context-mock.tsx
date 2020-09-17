import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render } from '@testing-library/react';

import { AppStateContext, AppDispatchContext } from 'app-context';
import {
  AppState,
  AppDispatch,
  initialState,
  themes,
  CurrentTheme,
} from 'models';

const AppProviderMock = ({
  state,
  dispatch,
}: {
  state: AppState;
  dispatch: AppDispatch;
}): React.FunctionComponent<{}> => ({ children }) => (
  <AppStateContext.Provider value={state}>
    <AppDispatchContext.Provider value={dispatch}>
      <ThemeProvider theme={themes[state.currentTheme]}>
        {children}
      </ThemeProvider>
    </AppDispatchContext.Provider>
  </AppStateContext.Provider>
);

export const renderAppProvider = ({
  children,
  state,
  dispatch = { setTheme: () => {} },
}: {
  children: React.ReactElement;
  state?: Partial<AppState>;
  dispatch?: AppDispatch;
}) =>
  render(children, {
    wrapper: AppProviderMock({
      dispatch,
      state: {
        ...initialState,
        ...state,
      },
    }),
  });

export const renderWithTheme = ({
  theme,
  children,
}: {
  theme: CurrentTheme;
  children: React.ReactElement;
}) =>
  renderAppProvider({
    children,
    state: { currentTheme: theme },
  });
