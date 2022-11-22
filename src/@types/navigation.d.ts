import { Meal } from "src/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      mealAddedSuccessfully: {
        isWithinDiet: Meal["isWithinDiet"];
      };
    }
  }
}
