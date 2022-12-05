import { ReactElement, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Button, Header, Text } from "@components/index";
import { useMealsContext } from "@contexts/MealsContext";
import { useMealGroups } from "@hooks/useMealGroups";

import { MINIMUM_ACCEPTED_PERCENTAGE_WITHIN_DIET } from "../../constants";
import { MealGroup, MealsPercentageBox } from "./components";

import * as S from "./styles";

export const Home = (): ReactElement => {
  const { fetchMeals, meals, statistics } = useMealsContext();
  const mealGroups = useMealGroups(meals);

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  const navigation = useNavigation();

  const handleOpenAddAMeal = () => {
    navigation.navigate("mealForm", { meal: undefined });
  };

  return (
    <S.Container>
      <Header />

      <MealsPercentageBox
        percentage={statistics.mealsWithinDietPercentage}
        color={
          statistics.mealsWithinDietPercentage >=
          MINIMUM_ACCEPTED_PERCENTAGE_WITHIN_DIET * 100
            ? "green"
            : "red"
        }
      />

      <Text
        customStyles={{
          marginTop: 48,
          marginBottom: 12,
        }}
      >
        Meals
      </Text>

      <Button
        title="Add a meal"
        icon={{
          name: "add",
          size: 24,
        }}
        onPress={handleOpenAddAMeal}
      />

      <FlatList
        data={mealGroups}
        keyExtractor={(item) => item.date.toISOString()}
        renderItem={({ item }) => (
          <MealGroup date={item.date} meals={item.meals} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
