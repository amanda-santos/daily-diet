import { ReactElement } from "react";
import { Text, View } from "react-native";

export const Home = (): ReactElement => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home</Text>
    </View>
  );
};
