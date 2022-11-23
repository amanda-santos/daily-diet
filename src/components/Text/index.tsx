import { ReactNode } from "react";

import * as S from "./styles";

type TextProps = S.TextProps & {
  children: ReactNode;
};

export const Text = ({ children, customStyles, ...rest }: TextProps) => {
  return (
    <S.Text style={customStyles} {...rest}>
      {children}
    </S.Text>
  );
};
