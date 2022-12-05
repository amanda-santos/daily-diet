import { useNavigation, useRoute } from "@react-navigation/native";

import { Button, Text } from "@components/index";
import outOfDietImg from "@assets/out-of-diet-illustration.png";
import withinDietImg from "@assets/within-diet-illustration.png";
import { Meal } from "src/types";

import * as S from "./styles";

type RouteParams = {
  isWithinDiet: Meal["isWithinDiet"];
};

export const MealAddedSuccessfully = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { isWithinDiet } = route.params as RouteParams;

  const title = isWithinDiet ? "Keep it up!" : "Oops!";
  const subtitle = isWithinDiet
    ? "You are still on the diet. Very good!"
    : "You've gone off the diet this time, but keep pushing and don't give up!";
  const image = isWithinDiet ? withinDietImg : outOfDietImg;
  const color = isWithinDiet ? "green" : "red";

  const handleGoBackHome = () => {
    navigation.navigate("home");
  };

  return (
    <S.Container>
      <Text color={`${color}-dark`} weight="bold" size="xl">
        {title}
      </Text>

      <Text
        customStyles={{
          marginTop: 8,
          textAlign: "center",
        }}
      >
        {subtitle}
      </Text>

      <S.Image source={image} />

      <Button
        title="Go back to the Home page"
        style={{ width: 196 }}
        onPress={handleGoBackHome}
      />
    </S.Container>
  );
};
