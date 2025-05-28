import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerCardsFoods = styled.View`
  margin-top: ${RFValue(25)}px;
  flex-direction: row;
  gap: 15px;
`;

export const CardFood = styled.View`
  flex: 1;
  height: ${RFValue(175)}px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_Secondary};
`;

export const ImageFood = styled.Image`
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
  margin: 0 auto;
`;

export const TextName = styled.Text`
  color: ${({ theme }) => theme.colors.color_Text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  text-align: center;
`;

export const TextPrice = styled.Text`
  color: ${({ theme }) => theme.colors.color_Text};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(5)}px;
`;

export const ContainerAssessment = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`;
