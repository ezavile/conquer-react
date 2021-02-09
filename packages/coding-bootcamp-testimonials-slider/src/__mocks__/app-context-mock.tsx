import { FunctionComponent } from 'react';

import {
  AppStateContext,
  AppDispatch,
  AppDispatchContext,
  AppState,
  initialState,
} from 'app-context';

export const AppProviderMock = ({
  state,
  dispatch,
}: {
  state?: AppState;
  dispatch?: AppDispatch;
}): FunctionComponent<{}> => ({ children }) => (
  <AppStateContext.Provider value={state || initialState}>
    <AppDispatchContext.Provider
      value={dispatch || { setTestimonial: () => {} }}
    >
      {children}
    </AppDispatchContext.Provider>
  </AppStateContext.Provider>
);
