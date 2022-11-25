import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";

import {
  getAllMeals,
  createMeal,
  removeMealByUuid,
  updateMeal,
} from "@storage/meal";

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
    const trimmedMealTitle = meal.title.trim();

    if (trimmedMealTitle.length === 0) {
      return Alert.alert(
        "New meal",
        "Please enter a description for the meal."
      );
    }

    try {
      await createMeal({
        ...meal,
        title: trimmedMealTitle,
      });
      fetchMeals();
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
