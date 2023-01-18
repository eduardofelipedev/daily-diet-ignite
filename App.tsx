import Theme from "./src/theme";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";



export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={Theme}>
      
      {fontsLoaded ? <Routes /> : <Loading />}
      
    </ThemeProvider>
  );
}

