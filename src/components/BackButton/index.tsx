import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export type BackButtonProps = {
  color: "red" | "green" | "gray";
};

export const BackButton = ({ color = "gray" }: BackButtonProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.BackButton onPress={handleGoBack}>
      <S.Icon color={color} />
    </S.BackButton>
  );
};
