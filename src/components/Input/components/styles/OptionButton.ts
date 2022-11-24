import styled, { css } from "styled-components/native";

import { Options } from "../OptionsInput";

type OptionButtonIconProps = {
  color: Options["color"];
  isSelected: boolean;
};

export const OptionButton = styled.TouchableOpacity<OptionButtonIconProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors["gray-6"]};

  height: 56px;
  min-width: 176px;
  border-radius: 6px;

  ${({ theme, color, isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${theme.colors[`${color}-dark`]};
      background-color: ${theme.colors[`${color}-light`]};
    `};
`;
