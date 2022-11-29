import styled from "styled-components/native";

export const WithinDietBadge = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  max-width: 144px;
  padding: 8px 4px;
  border-radius: 100px;
  margin-top: 32px;

  background-color: ${({ theme }) => theme.colors["gray-6"]};
`;
