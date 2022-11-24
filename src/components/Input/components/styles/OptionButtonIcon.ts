import styled from "styled-components/native";
import { Circle } from "phosphor-react-native";

import { Options } from "../OptionsInput";

type OptionButtonIconProps = {
  color: Options["color"];
};

export const OptionButtonIcon = styled(Circle).attrs<OptionButtonIconProps>(
  ({ theme, color }) => ({
    color: theme.colors[`${color}-dark`],
    size: 8,
    weight: "fill",
  })
)`
  margin-right: 4px;
`;
