import groupBy from "lodash.groupby";
import sortBy from "lodash.sortby";

import { FORMATS, format, parseDate } from "@utils/index";

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
      date: parseDate(key),
      meals: sortBy(mealsGroupedByDate[key], (meal) => meal.dateTime).reverse(),
    })
  );

  const orderedMealGroups = sortBy(
    mealGroups,
    (mealGroup) => mealGroup.date
  ).reverse();

  return orderedMealGroups;
};
