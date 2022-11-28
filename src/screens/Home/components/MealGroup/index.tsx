import { Text } from "@components/Text";
import { format } from "date-fns";
import { FlatList } from "react-native";
import { Meal as MealType } from "src/types";
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
        {format(date, "dd.MM.yy")}
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
