import { BackgroundImage, Text, TextType, ToggleButton } from './components';
import { GlobalStyle } from './styles/global-style';

const types: TextType[] = ['xxl', 'xl', 'l', 'm', 's', 'body', 'xs'];

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundImage currentTime="daytime" />
      {types.map((type) => (
        <Text key={type} color="white" type={type} style={{ display: 'block' }}>
          Lorem {type}
        </Text>
      ))}
      <ToggleButton />
    </>
  );
}

export default App;
