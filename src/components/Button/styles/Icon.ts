import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.colors["white"],
  size: 24,
}))`
  margin-right: 8px;
`;
