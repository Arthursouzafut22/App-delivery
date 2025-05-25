import { useState, useRef } from "react";
import { FlatList, View } from "react-native";
import * as S from "./Styles";
import { ImageProps, ImgsProps } from "./types";

export default function Carrosel() {
  const [indexImage, setIndexImage] = useState<number>(0);

  const referenceIndex = useRef((info: ImageProps) => {
    setIndexImage(info.viewableItems[0].index!);
  });

  const imgs: ImgsProps[] = [
    { id: "b1", source: require("@/assets/images/banner1.jpg") },
    { id: "b2", source: require("@/assets/images/banner2.png") },
    { id: "b1", source: require("@/assets/images/banner3.png") },
  ];

  return (
    <S.CarroselContainer>
      <FlatList
        style={{ height: 170 }}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 15 }}></View>}
        onViewableItemsChanged={referenceIndex.current}
        showsHorizontalScrollIndicator={false}
        data={imgs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <S.ContainerImage>
            <S.Image
              source={item.source}
              resizeMode="contain"
              style={{ borderRadius: 10 }}
            />
          </S.ContainerImage>
        )}
      />

      <S.ContainerRadioCotroller>
        {imgs.map((_, index) => (
          <S.RadioController active={index === indexImage} key={index} />
        ))}
      </S.ContainerRadioCotroller>
    </S.CarroselContainer>
  );
}
