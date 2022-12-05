import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  getAllMeals,
  createMeal,
  removeMealByUuid,
  updateMeal,
  getMealByUuid,
} from "@storage/meal";
import { isDateValid } from "@utils/isDateValid";

import { Meal } from "src/types";

type Statistics = {
  mealsAmount: number;
  mealsWithinDietAmount: number;
  mealsOutsideDietAmount: number;
  mealsWithinDietPercentage: number;
  largestSequenceOfMealsWithinDiet: number;
};

export type MealsContextType = {
  meals: Meal[];
  statistics: Statistics;
  fetchMeals: () => Promise<void>;
  fetchMeal: (uuid: Meal["uuid"]) => Promise<Meal | undefined>;
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
  const [statistics, setStatistics] = useState<Statistics>({
    mealsAmount: 0,
    mealsWithinDietAmount: 0,
    mealsOutsideDietAmount: 0,
    mealsWithinDietPercentage: 0,
    largestSequenceOfMealsWithinDiet: 0,
  });

  const navigation = useNavigation();

  const fetchMeals = async () => {
    try {
      const meals = await getAllMeals();
      setMeals(meals);
      calculateStatistics(meals);
    } catch (error) {
      Alert.alert("Error", "Something went wrong while fetching meals");
      console.log(error);
    }
  };

  const fetchMeal = async (mealUuid: Meal["uuid"]) => {
    try {
      const meal = await getMealByUuid(mealUuid);
      return meal;
    } catch (error) {
      Alert.alert(
        "Error",
        "Something went wrong while fetching the meal data."
      );
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
      navigation.navigate("mealAddedSuccessfully", {
        isWithinDiet: meal.isWithinDiet,
      });
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
      navigation.navigate("home");
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
      navigation.navigate("mealDetails", { uuid: meal.uuid });
    } catch (error) {
      Alert.alert(
        "Update meal",
        "An error occurred while updating the meal. Please try again."
      );
      console.log(error);
    }
  };

  const calculateLargestSequenceOfMealsWithinDiet = (meals: Meal[]) => {
    let largestSequenceOfMealsWithinDiet = 0;
    let currentSequenceOfMealsWithinDiet = 0;

    for (let i = 0; i < meals.length; i++) {
      if (meals[i].isWithinDiet) {
        currentSequenceOfMealsWithinDiet++;
      } else {
        if (
          currentSequenceOfMealsWithinDiet > largestSequenceOfMealsWithinDiet
        ) {
          largestSequenceOfMealsWithinDiet = currentSequenceOfMealsWithinDiet;
        }
        currentSequenceOfMealsWithinDiet = 0;
      }
    }

    if (currentSequenceOfMealsWithinDiet > largestSequenceOfMealsWithinDiet) {
      largestSequenceOfMealsWithinDiet = currentSequenceOfMealsWithinDiet;
    }

    return largestSequenceOfMealsWithinDiet;
  };

  const calculateStatistics = (meals: Meal[]) => {
    const mealsAmount = meals.length;

    const mealsWithinDietAmount = meals.filter(
      (meal) => meal.isWithinDiet === true
    ).length;

    const mealsOutsideDietAmount = meals.filter(
      (meal) => meal.isWithinDiet === false
    ).length;

    const mealsWithinDietPercentage =
      mealsAmount > 0
        ? Math.round((mealsWithinDietAmount / mealsAmount) * 100)
        : 0;

    const largestSequenceOfMealsWithinDiet =
      calculateLargestSequenceOfMealsWithinDiet(meals);

    setStatistics({
      mealsAmount,
      mealsWithinDietAmount,
      mealsOutsideDietAmount,
      mealsWithinDietPercentage,
      largestSequenceOfMealsWithinDiet,
    });
  };

  return (
    <MealsContext.Provider
      value={{
        meals,
        statistics,
        fetchMeals,
        fetchMeal,
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
