import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerCategory = styled.View`
  margin-top: ${RFValue(35)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextCategory = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.color_Text};
`;

export const TextAll = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.color_Icon};
`;

export const ContainerButtonsCategory = styled.View`
  margin-top: ${RFValue(15)}px;
`;

export const ButtonCategory = styled.TouchableOpacity<{
  activeButton: boolean;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: ${RFValue(5)}px;
  width: ${RFValue(110)}px;
  border-radius: 8px;
  background-color: ${({ theme, activeButton }) =>
    activeButton ? theme.colors.color_Details : theme.colors.color_Secondary};
`;

export const ImageCategory = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;

export const TextButton = styled.Text<{ activeText: boolean }>`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, activeText }) =>
    activeText ? theme.colors.color_Primary : theme.colors.color_Text};
`;
