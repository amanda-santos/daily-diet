import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { Button, SimpleHeader, Text } from "@components/index";
import { useMealsContext } from "@contexts/MealsContext";
import { format, FORMATS } from "@utils/index";
import { Meal } from "src/types";

import * as S from "./styles";
import { View } from "react-native";

type RouteParams = {
  uuid: Meal["uuid"];
};

type DietInformationType = {
  color: "green" | "red";
  text: "within diet" | "not within diet";
};

export const MealDetails = () => {
  const { fetchMeal, onRemoveMeal } = useMealsContext();

  const route = useRoute();
  const { uuid } = route.params as RouteParams;

  const { colors } = useTheme();

  const [meal, setMeal] = useState<Meal | undefined>(undefined);

  const DIET_INFORMATION: DietInformationType = {
    color: meal?.isWithinDiet ? "green" : "red",
    text: meal?.isWithinDiet ? "within diet" : "not within diet",
  };

  const handleRemoveMeal = () => {
    if (!meal) return;
    onRemoveMeal(meal.uuid);
  };

  useEffect(() => {
    const onLoad = async () => {
      const meal = await fetchMeal(uuid);
      setMeal(meal);
    };

    onLoad();
  }, []);

  if (!meal) {
    return null;
  }

  return (
    <S.Container>
      <SimpleHeader title="Meal" color={DIET_INFORMATION.color} />

      <S.MainContent>
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <Text size="xl" weight="bold">
            {meal.name}
          </Text>

          <Text
            customStyles={{
              marginTop: 8,
            }}
          >
            {meal.description}
          </Text>

          <Text
            size="sm"
            weight="bold"
            customStyles={{
              marginTop: 32,
              marginBottom: 8,
            }}
          >
            Date and time
          </Text>

          <Text>
            {`${format(meal.date, FORMATS.LONG_DATE)} at ${format(
              meal.time,
              FORMATS.TIME
            )}`}
          </Text>

          <S.WithinDietBadge>
            <Circle
              color={colors[`${DIET_INFORMATION.color}-dark`]}
              size={8}
              weight="fill"
            />

            <Text
              size="sm"
              customStyles={{
                marginLeft: 8,
                marginBottom: 2,
              }}
            >
              {DIET_INFORMATION.text}
            </Text>
          </S.WithinDietBadge>
        </View>

        <Button
          title="Edit meal"
          icon={{
            name: "edit",
            size: 16,
          }}
        />
        <Button
          title="Delete meal"
          buttonTheme="secondary"
          icon={{
            name: "delete",
            size: 16,
          }}
          style={{
            marginTop: 8,
          }}
          onPress={handleRemoveMeal}
        />
      </S.MainContent>
    </S.Container>
  );
};
