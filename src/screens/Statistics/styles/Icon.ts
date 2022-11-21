import styled from "styled-components/native";
import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";

type IconProps = {
  color: "red" | "green";
};

export const Icon = styled(ArrowLeft).attrs<IconProps>(({ theme, color }) => ({
  color: theme.colors[`${color}-dark`],
  size: 24,
}))``;
