import { ReactElement } from "react";
import { Text } from "react-native";

import { Header } from "@components/Header";

import * as S from "./styles";

export const Home = (): ReactElement => {
  return (
    <S.Container>
      <Header />
      <Text>Home</Text>
    </S.Container>
  );
};
