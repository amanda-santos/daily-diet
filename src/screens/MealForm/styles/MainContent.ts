import styled from "styled-components/native";

export const MainContent = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors["gray-7"]};

  width: 100%;
  border-radius: 24px;

  padding: 40px 24px;
`;
