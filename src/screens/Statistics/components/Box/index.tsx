import { Text } from "@components/Text";

import * as S from "./styles";

type BoxProps = {
  number: number;
  description: string;
  color?: "red" | "green" | "gray";
};

export const Box = ({ number, description, color = "gray" }: BoxProps) => {
  return (
    <S.Container color={color}>
      <Text weight="bold" size="xxl">
        {number}
      </Text>

      <Text size="sm" color="gray-2" customStyles={{ marginTop: 8 }}>
        {description}
      </Text>
    </S.Container>
  );
};
