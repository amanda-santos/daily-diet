import { Text } from "@components/Text";
import { FlatList } from "react-native";
import { Meal as MealType } from "src/types";

import { format, FORMATS } from "@utils/index";
import { Meal } from "../Meal";
import * as S from "./styles";

export type MealGroupProps = {
  date: Date;
  meals: Omit<MealType, "description" | "date">[];
};

export const MealGroup = ({ date, meals }: MealGroupProps) => {
  return (
    <S.Container>
      <Text size="lg" weight="bold">
        {format(date, FORMATS.SHORT_DATE)}
      </Text>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => <Meal meal={item} />}
        style={{ width: "100%" }}
      />
    </S.Container>
  );
};
