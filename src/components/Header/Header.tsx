import { StatusBar } from "react-native";
import * as S from "./Style";

export default function Header() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <S.Wrapper>
          <S.Texto>Oi, Arthur</S.Texto>
          <S.TextDescription>Pronto para cozinhar o jantar?</S.TextDescription>
        </S.Wrapper>

        <S.Image source={require("@/assets/images/avatar.png")} />
      </S.Header>
    </>
  );
}
