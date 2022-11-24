import { SimpleHeader } from "@components/SimpleHeader";
import { Text } from "@components/Text";

import * as S from "./styles";

export const NewMeal = () => {
  return (
    <S.Container>
      <SimpleHeader title="New meal" />

      <S.MainContent>
        <Text>Name</Text>
      </S.MainContent>
    </S.Container>
  );
};
