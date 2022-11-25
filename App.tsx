import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { ThemeProvider } from "styled-components";

import { theme } from "@theme/index";
import { Routes } from "@routes/index";
import { MealsProvider } from "@contexts/MealsContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <MealsProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : null}
      </MealsProvider>
    </ThemeProvider>
  );
}
