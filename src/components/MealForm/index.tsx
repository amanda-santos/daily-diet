import { useState } from "react";
import { View } from "react-native";

import { MaskedInput, OptionsInput, TextInput } from "@components/Input";
import { useMealsContext } from "@contexts/MealsContext";
import { parseDateTime, format, FORMATS } from "@utils/index";
import { Button } from "../Button";
import { Meal } from "src/types";

import * as S from "./styles";

type MealFormProps = {
  meal?: Meal;
};

export const MealForm = ({ meal }: MealFormProps) => {
  const [name, setName] = useState(meal?.name ?? "");
  const [description, setDescription] = useState(meal?.description ?? "");
  const [date, setDate] = useState(
    meal?.dateTime ? format(meal.dateTime, FORMATS.LONG_DATE) : ""
  );
  const [time, setTime] = useState(
    meal?.dateTime ? format(meal.dateTime, FORMATS.TIME) : ""
  );
  const [isWithinDiet, setIsWithinDiet] = useState(meal?.isWithinDiet ?? true);

  const { onCreateMeal, onUpdateMeal } = useMealsContext();

  const handleSubmit = () => {
    console.log("==============DEBUG", date, parseDateTime(`${date} ${time}`));

    const newMealData = {
      name,
      description,
      dateTime: parseDateTime(`${date} ${time}`),
      isWithinDiet,
    };

    meal
      ? onUpdateMeal({ ...newMealData, uuid: meal.uuid })
      : onCreateMeal(newMealData);
  };

  return (
    <S.Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <View>
        <TextInput label="Name" value={name} onChangeText={setName} />

        <TextInput
          label="Description"
          multiline={true}
          numberOfLines={4}
          style={{ minHeight: 128, textAlignVertical: "top" }}
          value={description}
          onChangeText={setDescription}
        />

        <S.InputRow>
          <MaskedInput
            label="Date"
            type="datetime"
            options={{
              format: "DD/MM/YYYY",
            }}
            value={date}
            onChangeText={(text) => {
              setDate(text);
            }}
          />

          <MaskedInput
            label="Time"
            type="datetime"
            options={{
              format: "HH:mm",
            }}
            value={time}
            onChangeText={(text) => {
              setTime(text);
            }}
          />
        </S.InputRow>

        <OptionsInput
          label="Is within diet?"
          options={[
            {
              label: "Yes",
              value: "yes",
              color: "green",
            },
            {
              label: "No",
              value: "no",
              color: "red",
            },
          ]}
          selectedOption={isWithinDiet ? "yes" : "no"}
          onChange={() => {
            setIsWithinDiet((prevState) => !prevState);
          }}
        />
      </View>

      <Button title={meal ? "Save" : "Add meal"} onPress={handleSubmit} />
    </S.Container>
  );
};
