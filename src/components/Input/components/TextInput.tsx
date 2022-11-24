import { RefObject } from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "@components/Text";

import * as S from "./styles";

type InputProps = TextInputProps & {
  label: string;
  inputRef?: RefObject<RNTextInput>;
};

export const TextInput = ({ label, inputRef, ...rest }: InputProps) => {
  const { colors } = useTheme();

  return (
    <S.Container>
      <Text size="sm" weight="bold">
        {label}
      </Text>

      <S.Input
        ref={inputRef}
        cursorColor={colors["gray-1"]}
        selectionColor={colors["gray-5"]}
        {...rest}
      />
    </S.Container>
  );
};
