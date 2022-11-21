import styled from "styled-components/native";

import { MealsPercentageBoxProps } from "..";

export type ContainerProps = Pick<MealsPercentageBoxProps, "color">;

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 104px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color = "green" }) =>
    theme.colors[`${color}-light`]};

  border-radius: 8px;

  position: relative;
`;
