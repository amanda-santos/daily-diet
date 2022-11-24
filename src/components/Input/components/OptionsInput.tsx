import { Text } from "@components/Text";

import * as S from "./styles";

export type Options = {
  label: string;
  value: string;
  color: "red" | "green";
};

type OptionsInputProps = {
  label: string;
  options: Options[];
  selectedOption: string;
  onChange: () => void;
};

export const OptionsInput = ({
  label,
  options,
  selectedOption,
  onChange,
}: OptionsInputProps) => {
  return (
    <S.Container>
      <Text size="sm" weight="bold">
        {label}
      </Text>

      <S.OptionsContainer>
        {options.map((option) => (
          <S.OptionButton
            key={option.label}
            color={option.color}
            isSelected={selectedOption === option.value}
            onPress={onChange}
          >
            <S.OptionButtonIcon color={option.color} />
            <Text weight="bold" size="sm">
              {option.label}
            </Text>
          </S.OptionButton>
        ))}
      </S.OptionsContainer>
    </S.Container>
  );
};
