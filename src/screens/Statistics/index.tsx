import { ReactElement } from "react";
import { useNavigation } from "@react-navigation/native";

import { Text } from "@components/Text";

import * as S from "./styles";

export const Statistics = (): ReactElement => {
  const navigation = useNavigation();

  const percentage = 39.86;
  const color = percentage >= 60 ? "green" : "red";

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Header color={color}>
        <S.BackButton onPress={handleGoBack}>
          <S.Icon color={color} />
        </S.BackButton>

        <Text weight="bold" size="xxl">
          {percentage}%
        </Text>

        <Text size="sm" color="gray-2">
          of meals within the diet
        </Text>
      </S.Header>
    </S.Container>
  );
};
