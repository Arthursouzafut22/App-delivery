import { Text } from "react-native";
import * as S from "./Style";
import { useTheme } from "styled-components";

export default function Header() {
    const theme = useTheme();
  return (
    <S.Header hTheme={theme}>
      <Text>Header....</Text>
    </S.Header>
  );
}
