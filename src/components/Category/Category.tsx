import { FlatList, View } from "react-native";
import * as S from "./Style";
import { arrButtonsCategory } from "./utils";

export default function Category() {
 

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
          keyExtractor={(item) => item.type}
          renderItem={({ item }) => (
            <S.ButtonCategory>
              <S.ImageCategory source={item.source} />
              <S.TextButton>{item.type}</S.TextButton>
            </S.ButtonCategory>
          )}
        />
      </S.ContainerButtonsCategory>
    </S.ContainerCategory>
  );
}
