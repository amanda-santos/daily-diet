import { Meal } from "src/types";
import { getAllMeals } from "./getAllMeals";

export const getMealByUuid = async (
  uuid: Meal["uuid"]
): Promise<Meal | undefined> => {
  try {
    const storedMeals = await getAllMeals();

    const meal = storedMeals.find((meal) => meal.uuid === uuid);

    return meal;
  } catch (error) {
    throw error;
  }
};
