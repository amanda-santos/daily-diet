import styled from "styled-components/native";

type ContainerProps = {
  color: "red" | "green" | "gray";
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  background-color: ${({ theme, color }) =>
    color === "gray" ? theme.colors["gray-5"] : theme.colors[`${color}-light`]};
`;
