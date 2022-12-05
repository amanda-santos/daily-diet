import groupBy from "lodash.groupby";
import sortBy from "lodash.sortby";

import { FORMATS, format } from "@utils/index";

import { Meal } from "src/types";

type MealGroup = {
  date: Date;
  meals: Meal[];
};

export const useMealGroups = (meals: Meal[]): MealGroup[] => {
  const mealsGroupedByDate = groupBy(meals, (meal) =>
    format(meal.dateTime, FORMATS.LONG_DATE)
  );

  const mealGroups: MealGroup[] = Object.keys(mealsGroupedByDate).map(
    (key) => ({
      date: new Date(key),
      meals: sortBy(mealsGroupedByDate[key], (meal) => meal.dateTime),
    })
  );

  const orderedMealGroups = sortBy(mealGroups, (mealGroup) => mealGroup.date);

  return orderedMealGroups;
};
