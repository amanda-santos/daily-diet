import { Image } from "react-native";

import logoImg from "@assets/logo.png";
import randomAvatarImg from "@assets/random-avatar.png";

import { Avatar, Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Avatar source={randomAvatarImg} />
    </Container>
  );
};
