import { ReactElement } from "react";

import { Button, Header, Text } from "@components/index";

import { MealsPercentageBox } from "./components";
import * as S from "./styles";

export const Home = (): ReactElement => {
  return (
    <S.Container>
      <Header />
      <MealsPercentageBox percentage={90.86} color="green" />

      <Text customStyles="margin: 48px 0 12px 0">Meals</Text>

      <Button title="Add a meal" icon="add" />
    </S.Container>
  );
};
