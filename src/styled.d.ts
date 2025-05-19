import "styled-components/native";
import { THEME } from "@/src/styles/Themee";

export type ThemeType = typeof THEME;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
