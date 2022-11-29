import { Text } from "@components/Text";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { format, FORMATS } from "@utils/index";
import { Meal as MealType } from "src/types";

import * as S from "./styles";

export type MealProps = {
  meal: Omit<MealType, "description" | "date">;
};

export const Meal = ({ meal }: MealProps) => {
  const { uuid, name, time, isWithinDiet } = meal;
  const formattedTime = format(time, FORMATS.TIME);

  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleOpenMeal = () => {
    navigation.navigate("mealDetails", { uuid });
  };

  return (
    <S.Container onPress={handleOpenMeal}>
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
