import { BackButton } from "../BackButton";

import { Text } from "../Text";

import * as S from "./styles";

type SimpleHeaderProps = {
  title: string;
  color?: "red" | "green" | "gray";
};

export const SimpleHeader = ({ title, color = "gray" }: SimpleHeaderProps) => {
  return (
    <S.Container color={color}>
      <BackButton color="gray" />
      <Text size="lg" weight="bold" customStyles={{ marginTop: 64 }}>
        {title}
      </Text>
    </S.Container>
  );
};
