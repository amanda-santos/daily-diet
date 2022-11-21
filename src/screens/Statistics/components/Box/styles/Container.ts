import styled from "styled-components/native";

export type ContainerProps = {
  color: "red" | "green" | "gray";
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: 16px 0 24px 0;
  margin-top: 12px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) =>
    color === "gray" ? theme.colors["gray-6"] : theme.colors[`${color}-light`]};

  flex-shrink: 1;
`;
