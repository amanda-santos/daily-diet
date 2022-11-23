import { Text } from "@components/Text";
import { Circle } from "phosphor-react-native";
import { Meal as MealType } from "src/types";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

export type MealProps = {
  meal: Omit<MealType, "description" | "date">;
};

export const Meal = ({ meal }: MealProps) => {
  const { id, title, time, isWithinDiet } = meal;

  const { colors } = useTheme();

  return (
    <S.Container>
      <S.CustomText size="xs" weight="bold">
        {time}
      </S.CustomText>

      <Text
        color="gray-2"
        customStyles={{
          flex: 1,
        }}
      >
        {title}
      </Text>

      <Circle
        color={isWithinDiet ? colors["green-mid"] : colors["red-mid"]}
        size={24}
        weight="fill"
      />
    </S.Container>
  );
};
