import { Meal } from "src/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      mealAddedSuccessfully: {
        isWithinDiet: Meal["isWithinDiet"];
      };
      mealDetails: {
        uuid: Meal["uuid"];
      };
      newMeal: undefined;
      statistics: undefined;
    }
  }
}
