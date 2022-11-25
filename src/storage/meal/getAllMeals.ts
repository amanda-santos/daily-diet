import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { Meal } from "src/types";

export const getAllMeals = async (): Promise<Meal[]> => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const tasks: Meal[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    throw error;
  }
};
