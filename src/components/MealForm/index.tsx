import { useState } from "react";

import { MaskedInput, OptionsInput, TextInput } from "@components/Input";
import { Button } from "../Button";

import * as S from "./styles";
import { View } from "react-native";

export const MealForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isWithinDiet, setIsWithinDiet] = useState(true);

  return (
    <S.Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <View>
        <TextInput label="Name" />

        <TextInput
          label="Description"
          multiline={true}
          numberOfLines={4}
          style={{ minHeight: 128, textAlignVertical: "top" }}
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
              console.log(text, date);
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
              console.log(text, time);
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
            console.log("change");
            setIsWithinDiet((prevState) => !prevState);
          }}
        />
      </View>

      <Button title="Add meal" />
    </S.Container>
  );
};
