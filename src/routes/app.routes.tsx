import { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Statistics } from "@screens/index";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = (): ReactElement => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
};
