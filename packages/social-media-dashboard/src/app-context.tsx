import { ThemeProvider } from 'styled-components';
import React, { createContext, useState } from 'react';
import { GlobalStyle } from 'global-style';
import { initialState, AppDispatch, CurrentTheme, themes } from 'models';

const AppStateContext = createContext(initialState);
const AppDispatchContext = createContext<AppDispatch>({
  setTheme: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setTheme] = useState<CurrentTheme>('dark');

  const theme = themes[currentTheme];

  return (
    <AppStateContext.Provider value={{ ...initialState, currentTheme }}>
      <AppDispatchContext.Provider value={{ setTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export { AppProvider, AppStateContext, AppDispatchContext };
