import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { MealsPercentageBoxProps } from "..";

type IconProps = Pick<MealsPercentageBoxProps, "color">;

export const Icon = styled(ArrowUpRight).attrs<IconProps>(
  ({ theme, color }) => ({
    color: theme.colors[`${color}-dark`],
    size: 24,
  })
)``;
