import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

export const MaskedInput = styled(TextInputMask)`
  flex: auto;

  min-width: 176px;
  max-height: 48px;

  width: 100%;

  ${({ theme }) => css`
    color: ${theme.colors["gray-1"]};
    background-color: ${theme.colors["gray-7"]};
    border: 1px solid ${theme.colors["gray-5"]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md};
  `};

  border-radius: 6px;
  padding: 16px;
  margin-top: 8px;
`;
