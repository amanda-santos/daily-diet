import { useState } from "react";

import { MaskedInput, OptionsInput, TextInput } from "@components/Input";
import { Button } from "../Button";

import * as S from "./styles";
import { View } from "react-native";
import { useMealsContext } from "@contexts/MealsContext";
import { parseDate } from "@utils/parseDate";
import { parseTime } from "@utils/parseTime";

export const MealForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isWithinDiet, setIsWithinDiet] = useState(true);

  const { onCreateMeal } = useMealsContext();

  const handleCreateMeal = () => {
    onCreateMeal({
      name,
      description,
      date: parseDate(date),
      time: parseTime(time),
      isWithinDiet,
    });
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
              format: "DD/MM/YY",
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

      <Button title="Add meal" onPress={handleCreateMeal} />
    </S.Container>
  );
};
