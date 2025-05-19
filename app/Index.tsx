import Header from "@/src/components/Header/Header";
import { Global } from "@/src/styles/Global";
import { THEME } from "@/src/styles/Themee";
import {
    Nunito_400Regular,
    Nunito_700Bold,
    useFonts,
} from "@expo-google-fonts/nunito";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator />;
  
  return (
    <>
      <ThemeProvider theme={THEME}>
        <Global>
          <Header />
        </Global>
      </ThemeProvider>
    </>
  );
}
