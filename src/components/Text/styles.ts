import styled from "styled-components/native";

export type TextProps = {
  color?:
    | "red-dark"
    | "red-mid"
    | "red-light"
    | "green-dark"
    | "green-mid"
    | "green-light"
    | "gray-1"
    | "gray-2"
    | "gray-3"
    | "gray-4"
    | "gray-5"
    | "gray-6"
    | "gray-7"
    | "white";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  weight?: "bold" | "regular";
  customStyles?: string;
};

export const Text = styled.Text<TextProps>`
  ${({ color, size, weight, theme, customStyles }) => `
    color: ${color ? theme.colors[color] : theme.colors["gray-1"]};
    font-family: ${
      weight ? theme.fontFamily[weight] : theme.fontFamily.regular
    };
    font-size: ${size ? theme.fontSize[size] : theme.fontSize.md};
    
    ${customStyles}
  `}
`;
