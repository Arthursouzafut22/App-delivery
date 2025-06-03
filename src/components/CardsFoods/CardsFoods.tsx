import { useTheme } from "styled-components";
import * as S from "./Style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { THEME } from "@/src/styles/Themee";
import { FoodProps } from "@/hooks/types";
import { BASE_URL_IMG } from "@/service/baseUrl";

interface Props {
  food: FoodProps;
}

export default function CardsFoods({ food }: Props) {
  const theme = useTheme() as typeof THEME;

  return (
    <S.CardFood>
      <S.ImageFood source={{ uri: `${BASE_URL_IMG + food.imagem}` }} />
      <S.TextName>{food?.nome}</S.TextName>
      <S.TextPrice>{food.preco}</S.TextPrice>
      <S.ContainerAssessment>
        {new Array(food.avaliacao).fill(food.avaliacao).map((star) => (
          <FontAwesome
            name="star"
            key={star}
            color={theme.colors.color_Details}
          />
        ))}
      </S.ContainerAssessment>
    </S.CardFood>
  );
}
