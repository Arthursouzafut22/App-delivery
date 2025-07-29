import { useAuthCategory } from "@/context/ContextCategory/useContextCategory";
import { FlatList, SafeAreaView, View } from "react-native";
import CardsFoods from "@/src/components/CardsFoods/CardsFoods";
import Carrosel from "../../../components/Carrosel/Carrosel";
import Category from "../../../components/Category/Category";
import Header from "../../../components/Header/Header";
import * as S from "./Style";

export default function Home() {
  const { foodData } = useAuthCategory();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Carrosel />
      <Category />
      <S.ContainerCardsFoods>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 12,
            rowGap: 12,
          }}
          data={foodData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16, flex: 1 }}>
              <CardsFoods food={item} />
            </View>
          )}
        />
      </S.ContainerCardsFoods>
    </SafeAreaView>
  );
}
