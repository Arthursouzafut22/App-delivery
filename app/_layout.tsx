import CategoryContext from "@/context/ContextCategory/useContextCategory";
import Global from "@/src/styles/Global";
import { THEME } from "@/src/styles/Themee";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, Tabs } from "expo-router";
import Home from "@/src/Screens/Home/Home/Home";
export default function LayoutRoot() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={THEME}>
          <CategoryContext>
            <Global />
        
            <Slot />
          
          </CategoryContext>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
