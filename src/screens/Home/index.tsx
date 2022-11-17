import { ReactElement } from "react";

import { Button, Header, Text } from "@components/index";

import { MealGroup, MealsPercentageBox } from "./components";
import * as S from "./styles";
import { Meal } from "src/types";

export const Home = (): ReactElement => {
  const meals: Meal[] = [
    {
      id: "1",
      date: new Date(),
      title: "Breakfast",
      description: "Eggs, bacon, toast",
      time: "08:00",
      isWithinDiet: true,
    },
    {
      id: "2",
      date: new Date(),
      title: "Lunch",
      description: "Chicken, rice, salad",
      time: "12:00",
      isWithinDiet: true,
    },
    {
      id: "3",
      date: new Date(),
      title: "Dinner",
      description: "Beef, potatoes, salad",
      time: "18:00",
      isWithinDiet: false,
    },
  ];

  return (
    <S.Container>
      <Header />
      <MealsPercentageBox percentage={90.86} color="green" />

      <Text customStyles="margin: 48px 0 12px 0">Meals</Text>

      <Button title="Add a meal" icon="add" />

      <MealGroup date={new Date("2022-11-16")} meals={meals} />
    </S.Container>
  );
};
