import { NavigationContainer } from "@react-navigation/native";

import { MealsProvider } from "@contexts/MealsContext";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <MealsProvider>
        <AppRoutes />
      </MealsProvider>
    </NavigationContainer>
  );
};
