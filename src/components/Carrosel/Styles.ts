import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { css } from "styled-components";
import { THEME } from "@/src/styles/Themee";

type CssProps = {
  theme: typeof THEME;
};

export const activeColor = css<CssProps>`
  background-color: ${({ theme }) => theme.colors.color_Details};
`;

export const ColorDay = css<CssProps>`
  background-color: ${({ theme }) => theme.colors.color_Icon};
`;

const { width } = Dimensions.get("window");
const imageHeight = 250;

export const CarroselContainer = styled.View`
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${imageHeight}px;
`;

export const ContainerImage = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerRadioCotroller = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const RadioController = styled.View<{ active: boolean }>`
  ${({ active }) => (active ? activeColor : ColorDay)};
  width: 10px;
  height: 10px;
  border-radius: 10px;
`;
