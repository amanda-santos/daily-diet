import styled from "styled-components/native";

export const MainContent = styled.View`
  padding: 24px;
  flex: auto;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors["gray-7"]};

  align-items: center;
  justify-content: flex-start;
`;
