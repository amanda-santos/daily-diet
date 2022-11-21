import styled from "styled-components/native";

export type ContainerProps = {
  color: "red" | "green";
};

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${({ theme, color = "green" }) =>
    theme.colors[`${color}-light`]};
`;
