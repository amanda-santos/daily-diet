import { Meal } from "src/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      mealAddedSuccessfully: {
        isWithinDiet: Meal["isWithinDiet"];
      };
      newMeal: undefined;
      statistics: undefined;
    }
  }
}
