import { TextInputMaskProps } from "react-native-masked-text";
import { useTheme } from "styled-components/native";

import { Text } from "@components/Text";

import * as S from "./styles";

type InputProps = TextInputMaskProps & {
  label: string;
};

export const MaskedInput = ({ label, ...rest }: InputProps) => {
  const { colors } = useTheme();

  return (
    <S.Container>
      <Text size="sm" weight="bold">
        {label}
      </Text>

      <S.MaskedInput
        cursorColor={colors["gray-1"]}
        selectionColor={colors["gray-5"]}
        {...rest}
      />
    </S.Container>
  );
};
