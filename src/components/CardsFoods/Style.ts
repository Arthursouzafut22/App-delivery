import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerCardsFoods = styled.SafeAreaView`
  margin-top: ${RFValue(25)}px;
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const CardFood = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: ${RFValue(200)}px;
  min-height: ${RFValue(180)}px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_Secondary};
  max-width:170px !important;

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
