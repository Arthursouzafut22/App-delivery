import { useAuthCategory } from "@/context/ContextCategory/useContextCategory";
import { FlatList, View } from "react-native";
import * as S from "./Style";
import { arrButtonsCategory } from "./utils";

export default function Category() {
  const { indexButton, handleCategory } = useAuthCategory();

  return (
    <S.ContainerCategory>
      <S.Wrapper>
        <S.TextCategory>Categoria de refeição</S.TextCategory>
        <S.TextAll>Ver tudo</S.TextAll>
      </S.Wrapper>

      <S.ContainerButtonsCategory>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 12 }}></View>}
          data={arrButtonsCategory}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <S.ButtonCategory
              onPress={() => handleCategory(index, item.type)}
              accessibilityRole="button"
              accessibilityLabel={item.type}
              activeOpacity={0.9}
              activeButton={index === indexButton}
            >
              <S.ImageCategory source={item.source} />
              <S.TextButton activeText={index === indexButton}>
                {item.type}
              </S.TextButton>
            </S.ButtonCategory>
          )}
        />
      </S.ContainerButtonsCategory>
    </S.ContainerCategory>
  );
}
