import { ReactElement } from "react";
import { View } from "react-native";

import { BackButton, Text } from "@components/index";

import { Box } from "./components";
import * as S from "./styles";

export const Statistics = (): ReactElement => {
  const percentage = 89.86;
  const color = percentage >= 60 ? "green" : "red";

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

        <Box number={22} description="best sequence of meals within the diet" />

        <Box number={109} description="meals added" />

        <S.BoxGridContainer>
          <Box number={32} description="meals within the diet" color="green" />
          <View style={{ width: 8 }} />
          <Box number={77} description="meals outside the diet" color="red" />
        </S.BoxGridContainer>
      </S.MainContent>
    </S.Container>
  );
};
