import { ReactElement } from "react";
import groupBy from "lodash.groupby";

import { Button, Header, Text } from "@components/index";

import { MealGroup, MealsPercentageBox } from "./components";
import * as S from "./styles";
import { Meal } from "src/types";
import { FlatList } from "react-native";

type MealGroupType = {
  date: Date;
  meals: Meal[];
};

export const Home = (): ReactElement => {
  const meals: Meal[] = [
    {
      id: "1",
      date: new Date("2022-04-05"),
      title: "Breakfast",
      description: "Eggs, bacon, toast",
      time: "08:00",
      isWithinDiet: true,
    },
    {
      id: "2",
      date: new Date("2021-05-06"),
      title: "Lunch",
      description: "Chicken, rice, salad",
      time: "12:00",
      isWithinDiet: true,
    },
    {
      id: "3",
      date: new Date("2021-06-02"),
      title: "Dinner",
      description: "Beef, potatoes, salad",
      time: "18:00",
      isWithinDiet: false,
    },
    {
      id: "4",
      date: new Date("2022-04-05"),
      title: "Breakfast 2",
      description: "Eggs, bacon, toast, coffee",
      time: "10:00",
      isWithinDiet: false,
    },
  ];

  const mealsGroupedByDate = groupBy(meals, (meal) => meal.date);
  const array: MealGroupType[] = Object.keys(mealsGroupedByDate).map((key) => ({
    date: new Date(key),
    meals: mealsGroupedByDate[key],
  }));

  return (
    <S.Container>
      <Header />
      <MealsPercentageBox percentage={90.86} color="green" />

      <Text customStyles="margin: 48px 0 12px 0">Meals</Text>

      <Button title="Add a meal" icon="add" />

      <FlatList
        data={array}
        keyExtractor={(item) => item.date.toISOString()}
        renderItem={({ item }) => (
          <MealGroup date={item.date} meals={item.meals} />
        )}
      />
    </S.Container>
  );
};
