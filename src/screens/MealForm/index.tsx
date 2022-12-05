import { useRoute } from "@react-navigation/native";

import { MealForm as MealFormComponent, SimpleHeader } from "@components/index";
import { Meal } from "src/types";

import * as S from "./styles";

type RouteParams = {
  meal?: Meal;
};

export const MealForm = () => {
  const route = useRoute();

  const { meal } = route.params as RouteParams;

  return (
    <S.Container>
      <SimpleHeader title={meal ? "Edit meal" : "New meal"} />

      <S.MainContent>
        <MealFormComponent meal={meal} />
      </S.MainContent>
    </S.Container>
  );
};
