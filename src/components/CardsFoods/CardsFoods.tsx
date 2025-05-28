import { useTheme } from "styled-components";
import * as S from "./Style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { THEME } from "@/src/styles/Themee";

export default function CardsFoods() {
  const arr = new Array(3);
  const theme = useTheme() as typeof THEME;

  return (
    <S.ContainerCardsFoods>
      <S.CardFood>
        <S.ImageFood source={require("@/assets/images/buguer3.png")} />
        <S.TextName>Hamburguer Teste</S.TextName>
        <S.TextPrice>R$ 40,00</S.TextPrice>
        <S.ContainerAssessment>
          {arr.fill(3).map((star) => (
            <FontAwesome
              name="star"
              key={star}
              color={theme.colors.color_Details}
            />
          ))}
        </S.ContainerAssessment>
      </S.CardFood>

      <S.CardFood>
        <S.ImageFood source={require("@/assets/images/buguer3.png")} />
        <S.TextName>Hamburguer Teste</S.TextName>
        <S.TextPrice>R$ 40,00</S.TextPrice>
        <S.ContainerAssessment>
          {arr.fill(3).map((star) => (
            <FontAwesome
              name="star"
              key={star}
              color={theme.colors.color_Details}
            />
          ))}
        </S.ContainerAssessment>
      </S.CardFood>
    </S.ContainerCardsFoods>
  );
}
