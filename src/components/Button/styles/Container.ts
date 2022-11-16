import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors["gray-2"]};
  color: ${({ theme }) => theme.colors["white"]};

  width: 100%;
  height: 56px;

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
