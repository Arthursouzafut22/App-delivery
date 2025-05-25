import { ViewToken } from "react-native";


export interface ImgsProps {
  id: string;
  source: any;
}

export interface ImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}