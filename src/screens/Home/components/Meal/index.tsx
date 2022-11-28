import { Text } from "@components/Text";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { Meal as MealType } from "src/types";

import * as S from "./styles";

export type MealProps = {
  meal: Omit<MealType, "description" | "date">;
};

export const Meal = ({ meal }: MealProps) => {
  const { uuid, name, time, isWithinDiet } = meal;
  const formattedTime = format(new Date(time), "HH:mm", { locale: enGB });

  const { colors } = useTheme();

  return (
    <S.Container>
      <S.CustomText size="xs" weight="bold">
        {formattedTime}
      </S.CustomText>

      <Text
        color="gray-2"
        customStyles={{
          flex: 1,
        }}
      >
        {name}
      </Text>

      <Circle
        color={isWithinDiet ? colors["green-mid"] : colors["red-mid"]}
        size={24}
        weight="fill"
      />
    </S.Container>
  );
};
