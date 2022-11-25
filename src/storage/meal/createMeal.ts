import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";
import { Meal } from "src/types";

export const createMeal = async (meal: Omit<Meal, "uuid">) => {
  try {
    const storedMeals = await getAllMeals();

    const generatedMealUuid = uuidv4();

    const newMeal: Meal = {
      uuid: generatedMealUuid,
      ...meal,
    };

    const stringifiedNewMeals = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, stringifiedNewMeals);
  } catch (error) {
    throw error;
  }
};
