import { ReactElement } from "react";

import { Header } from "@components/Header";

import { MealsPercentageBox } from "./components";
import * as S from "./styles";

export const Home = (): ReactElement => {
  return (
    <S.Container>
      <Header />
      <MealsPercentageBox percentage={90.86} color="green" />
    </S.Container>
  );
};
