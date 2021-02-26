import { BackgroundImage, Quote, ToggleButton } from './components';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage currentTime="daytime" />
      <Quote
        text='"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."'
        author="Ada Lovelace"
      />
      <ToggleButton />
    </>
  );
}

export default App;
