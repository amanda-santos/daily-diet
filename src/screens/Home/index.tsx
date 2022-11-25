import { ReactElement, useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import groupBy from "lodash.groupby";

import { Button, Header, Text } from "@components/index";

import { Meal } from "src/types";
import { MealGroup, MealsPercentageBox } from "./components";
import * as S from "./styles";
import { useMealsContext } from "@contexts/MealsContext";

type MealGroupType = {
  date: Date;
  meals: Meal[];
};

export const Home = (): ReactElement => {
  const { fetchMeals, meals } = useMealsContext();

  useEffect(() => {
    fetchMeals();
  }, []);

  const navigation = useNavigation();

  const mealsGroupedByDate = groupBy(meals, (meal) => meal.date);
  const mealGroups: MealGroupType[] = Object.keys(mealsGroupedByDate).map(
    (key) => ({
      date: new Date(key),
      meals: mealsGroupedByDate[key],
    })
  );

  const handleOpenAddAMeal = () => {
    navigation.navigate("newMeal");
  };

  return (
    <S.Container>
      <Header />

      <MealsPercentageBox percentage={90.86} color="green" />

      <Text
        customStyles={{
          marginTop: 48,
          marginBottom: 12,
        }}
      >
        Meals
      </Text>

      <Button title="Add a meal" icon="add" onPress={handleOpenAddAMeal} />

      <FlatList
        data={mealGroups}
        keyExtractor={(item) => item.date.toISOString()}
        renderItem={({ item }) => (
          <MealGroup date={item.date} meals={item.meals} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
