import { useAuthCategory } from "@/context/ContextCategory/useContextCategory";
import { FlatList, SafeAreaView } from "react-native";
import CardsFoods from "../../components/CardsFoods/CardsFoods";
import Carrosel from "../../components/Carrosel/Carrosel";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
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
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={foodData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <CardsFoods food={item} />}
        />
      </S.ContainerCardsFoods>
    </SafeAreaView>
  );
}
