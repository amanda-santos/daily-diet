import { ReactElement } from "react";
import { View } from "react-native";

import { BackButton, Text } from "@components/index";
import { useMealsContext } from "@contexts/MealsContext";

import { MINIMUM_ACCEPTED_PERCENTAGE_WITHIN_DIET } from "../../constants";
import { Box } from "./components";

import * as S from "./styles";

export const Statistics = (): ReactElement => {
  const { statistics } = useMealsContext();

  const percentage = statistics.mealsWithinDietPercentage;
  const color =
    percentage >= MINIMUM_ACCEPTED_PERCENTAGE_WITHIN_DIET * 100
      ? "green"
      : "red";

  return (
    <S.Container color={color}>
      <S.Header>
        <BackButton color={color} />

        <Text weight="bold" size="xxl">
          {percentage}%
        </Text>

        <Text size="sm" color="gray-2">
          of meals within the diet
        </Text>
      </S.Header>

      <S.MainContent>
        <Text
          size="sm"
          weight="bold"
          customStyles={{
            marginBottom: 12,
          }}
        >
          General statistics
        </Text>

        <Box
          number={statistics.largestSequenceOfMealsWithinDiet}
          description="best sequence of meals within the diet"
        />

        <Box number={statistics.mealsAmount} description="meals added" />

        <S.BoxGridContainer>
          <Box
            number={statistics.mealsWithinDietAmount}
            description="meals within the diet"
            color="green"
          />

          <View style={{ width: 8 }} />

          <Box
            number={statistics.mealsOutsideDietAmount}
            description="meals outside the diet"
            color="red"
          />
        </S.BoxGridContainer>
      </S.MainContent>
    </S.Container>
  );
};
