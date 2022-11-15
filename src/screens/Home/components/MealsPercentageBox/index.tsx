import { Text } from "@components/Text";
import * as S from "./styles";

export type MealsPercentageBoxProps = {
  percentage: number;
  color: "red" | "green";
};

export const MealsPercentageBox = ({
  percentage,
  color,
}: MealsPercentageBoxProps) => {
  return (
    <S.Container color={color}>
      <S.Icon color={color} />

      <Text weight="bold" size="xxl">
        {percentage}%
      </Text>

      <Text size="sm" color="gray-2">
        of meals within the diet
      </Text>
    </S.Container>
  );
};
