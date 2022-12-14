import { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Home,
  Statistics,
  MealAddedSuccessfully,
  MealForm,
  MealDetails,
} from "@screens/index";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = (): ReactElement => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="mealAddedSuccessfully" component={MealAddedSuccessfully} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="mealForm" component={MealForm} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
};
