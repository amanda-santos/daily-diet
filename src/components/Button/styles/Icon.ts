import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 18,
}))`
  margin-right: 8px;
`;
