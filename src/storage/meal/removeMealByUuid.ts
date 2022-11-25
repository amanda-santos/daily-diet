import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export const removeMealByUuid = async (uuid: string) => {
  try {
    const storedMeals = await getAllMeals();

    const filteredMeals = storedMeals.filter((meal) => meal.uuid !== uuid);

    const stringifiedNewMeals = JSON.stringify(filteredMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, stringifiedNewMeals);
  } catch (error) {
    throw error;
  }
};
