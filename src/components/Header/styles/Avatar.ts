import styled from "styled-components/native";

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: ${({ theme }) => `2px solid ${theme.colors["gray-2"]}`};
`;
