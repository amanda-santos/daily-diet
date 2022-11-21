import styled from "styled-components/native";
import { View } from "react-native";

export type HeaderProps = {
  color: "red" | "green";
};

export const Header = styled(View)<HeaderProps>`
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color = "green" }) =>
    theme.colors[`${color}-light`]};

  border-radius: 8px;

  position: relative;

  padding: 96px 0 64px 0;
`;
