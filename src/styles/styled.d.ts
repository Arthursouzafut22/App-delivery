import "styled-components/native";
import { THEME } from "@/src/styles/Themee";

declare module "styled-components/native" {
  type ThemeType = typeof THEME;
  export interface DefaultTheme extends ThemeType {}
}
