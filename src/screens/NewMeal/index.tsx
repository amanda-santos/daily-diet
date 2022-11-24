import { MealForm, SimpleHeader } from "@components/index";

import * as S from "./styles";

export const NewMeal = () => {
  return (
    <S.Container>
      <SimpleHeader title="New meal" />

      <S.MainContent>
        <MealForm />
      </S.MainContent>
    </S.Container>
  );
};
