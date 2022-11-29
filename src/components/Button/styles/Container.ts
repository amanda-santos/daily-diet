import styled, { css } from "styled-components/native";

export type ContainerProps = {
  buttonTheme?: "primary" | "secondary";
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ buttonTheme, theme }) => css`
    ${buttonTheme === "primary" &&
    css`
      background-color: ${theme.colors["gray-2"]};
      color: ${theme.colors["white"]};
    `}

    ${buttonTheme === "secondary" &&
    css`
      background-color: ${theme.colors["white"]};
      color: ${theme.colors["gray-1"]};
      border: 1px solid ${theme.colors["gray-2"]};
    `}
  `}

  width: 100%;
  height: 56px;

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
