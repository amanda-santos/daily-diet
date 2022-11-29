import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 8px;

  border: ${({ theme }) => `1px solid ${theme.colors["gray-5"]}`};
  border-radius: 6px;

  padding: 12px;
`;
