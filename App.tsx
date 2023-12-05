import { ThemeProvider, useTheme } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { NewGroup } from '@screens/NewGroup';
import { Loading } from '@components/Loading'
import theme from './src/theme';
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoader] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
      />
      { fontsLoader ? <NewGroup /> :  <Loading />}
    </ThemeProvider>
  );
}