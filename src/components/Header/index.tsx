import { Image } from "react-native";

import logoImg from "@assets/logo.png";
import randomAvatarImg from "@assets/random-avatar.png";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <Image source={logoImg} />

      <S.Avatar source={randomAvatarImg} />
    </S.Container>
  );
};
