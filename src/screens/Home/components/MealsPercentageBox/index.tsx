import { useNavigation } from "@react-navigation/native";

import { Text } from "@components/Text";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

export type MealsPercentageBoxProps = {
  percentage: number;
  color: "red" | "green";
};

export const MealsPercentageBox = ({
  percentage,
  color,
}: MealsPercentageBoxProps) => {
  const navigation = useNavigation();

  const handleOpenStatistics = () => {
    navigation.navigate("statistics");
  };

  return (
    <S.Container color={color}>
      <S.OpenStatsButton onPress={handleOpenStatistics}>
        <S.Icon color={color} />
      </S.OpenStatsButton>

      <Text weight="bold" size="xxl">
        {percentage}%
      </Text>

      <Text size="sm" color="gray-2">
        of meals within the diet
      </Text>
    </S.Container>
  );
};
