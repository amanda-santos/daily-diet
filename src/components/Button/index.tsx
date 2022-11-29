import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Text } from "@components/Text";

import * as S from "./styles";
import { ContainerProps } from "./styles/Container";

type ButtonProps = TouchableOpacityProps &
  ContainerProps & {
    title: string;
    icon?: {
      name: keyof typeof MaterialIcons.glyphMap;
      size?: number;
    };
  };

export const Button = ({
  title,
  icon,
  buttonTheme = "primary",
  ...rest
}: ButtonProps) => {
  const { colors } = useTheme();
  const buttonContentColor = buttonTheme === "primary" ? "white" : "gray-1";

  return (
    <S.Container buttonTheme={buttonTheme} {...rest}>
      {icon && (
        <MaterialIcons
          name={icon.name}
          color={colors[buttonContentColor]}
          size={icon.size}
          style={{
            marginRight: 8,
          }}
        />
      )}
      <Text color={buttonContentColor} weight="bold" size="sm">
        {title}
      </Text>
    </S.Container>
  );
};
