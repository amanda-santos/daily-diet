import { ReactElement } from "react";
import { Text } from "react-native";

import { Header } from "@components/Header";

import { Container } from "./styles";

export const Home = (): ReactElement => {
  return (
    <Container>
      <Header />
      <Text>Home</Text>
    </Container>
  );
};
