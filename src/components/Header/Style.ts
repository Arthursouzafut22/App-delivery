import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Header = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.color_Primary};
`;

export const Wrapper = styled.View``;

export const Texto = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.color_Text};
`;

export const TextDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.color_Icon};
`;

export const Image = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;
