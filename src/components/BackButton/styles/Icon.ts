import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

import { BackButtonProps } from "..";

type IconProps = BackButtonProps;

export const Icon = styled(ArrowLeft).attrs<IconProps>(({ theme, color }) => ({
  color:
    color === "gray" ? theme.colors["gray-2"] : theme.colors[`${color}-dark`],
  size: 24,
}))``;
