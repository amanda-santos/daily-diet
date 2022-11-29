import { Meal } from "src/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      mealAddedSuccessfully: {
        isWithinDiet: Meal["isWithinDiet"];
      };
      mealDetails: {
        mealUuid: Meal["uuid"];
      };
      newMeal: undefined;
      statistics: undefined;
    }
  }
}
