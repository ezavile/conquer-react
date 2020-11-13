import React from 'react';

import { BackgroundImage } from './components';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage currentTime="daytime" />
    </>
  );
}

export default App;
