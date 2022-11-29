import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors["gray-5"]};
`;
