import { SafeAreaView } from "react-native";
import Carrosel from "../components/Carrosel/Carrosel";
import Category from "../components/Category/Category";
import Header from "../components/Header/Header";
import CardsFoods from "../components/CardsFoods/CardsFoods";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Carrosel />
      <Category />
      <CardsFoods />
    </SafeAreaView>
  );
}
