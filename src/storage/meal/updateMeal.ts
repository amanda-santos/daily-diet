import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";
import { Meal } from "src/types";

export const updateMeal = async (updatedMeal: Meal) => {
  try {
    const storedMeals = await getAllMeals();

    const updatedMeals = storedMeals.map((meal) => {
      if (meal.uuid === updatedMeal.uuid) {
        return updatedMeal;
      }

      return meal;
    });

    const stringifiedNewMeals = JSON.stringify(updatedMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, stringifiedNewMeals);
  } catch (error) {
    throw error;
  }
};
