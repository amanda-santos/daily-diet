import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Text } from "@components/Text";

import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export const Button = ({ title, icon, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest}>
      {icon && <S.Icon name={icon} />}
      <Text color="white" weight="bold" size="sm">
        {title}
      </Text>
    </S.Container>
  );
};
