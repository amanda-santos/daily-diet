import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  getAllMeals,
  createMeal,
  removeMealByUuid,
  updateMeal,
} from "@storage/meal";
import { isDateValid } from "@utils/isDateValid";

import { Meal } from "src/types";

export type MealsContextType = {
  meals: Meal[];
  fetchMeals: () => Promise<void>;
  onCreateMeal: (meal: Omit<Meal, "uuid">) => Promise<void>;
  onRemoveMeal: (mealUuid: Meal["uuid"]) => Promise<void>;
  onUpdateMeal: (meal: Meal) => Promise<void>;
};

export const MealsContext = createContext({} as MealsContextType);

type MealsProviderProps = {
  children: ReactNode;
};

export const MealsProvider = ({ children }: MealsProviderProps) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const navigation = useNavigation();

  const fetchMeals = async () => {
    try {
      const meals = await getAllMeals();
      setMeals(meals);
    } catch (error) {
      Alert.alert("Error", "Something went wrong while fetching meals");
      console.log(error);
    }
  };

  const onCreateMeal = async (meal: Omit<Meal, "uuid">) => {
    const trimmedMealName = meal.name.trim();
    const trimmedMealDescription = meal.description.trim();

    if (trimmedMealName.length === 0) {
      return Alert.alert(
        "New meal",
        "Please enter a description for the meal."
      );
    }

    const isMealDateValid = isDateValid(meal.date);
    const isMealTimeValid = isDateValid(meal.time);

    if (!isMealDateValid || !isMealTimeValid) {
      return Alert.alert(
        "New meal",
        "Please enter a valid date and time for the meal."
      );
    }

    try {
      await createMeal({
        ...meal,
        name: trimmedMealName,
        description: trimmedMealDescription,
      });
      navigation.navigate("home");
    } catch (error) {
      Alert.alert(
        "New meal",
        "An error occurred while creating the meal. Please try again."
      );
      console.log(error);
    }
  };

  const onRemoveMeal = async (mealUuid: Meal["uuid"]) => {
    try {
      await removeMealByUuid(mealUuid);
      fetchMeals();
    } catch (error) {
      Alert.alert(
        "Remove meal",
        "An error occurred while removing the meal. Please try again."
      );
      console.log(error);
    }
  };

  const onUpdateMeal = async (meal: Meal) => {
    try {
      await updateMeal(meal);
      fetchMeals();
    } catch (error) {
      Alert.alert(
        "Update meal",
        "An error occurred while updating the meal. Please try again."
      );
      console.log(error);
    }
  };

  return (
    <MealsContext.Provider
      value={{
        meals,
        fetchMeals,
        onCreateMeal,
        onRemoveMeal,
        onUpdateMeal,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsContext = () => {
  const context = useContext(MealsContext);

  if (!context) {
    throw new Error("useMealsContext must be used within a MealsProvider");
  }

  return context;
};
