import { FoodProps } from "@/hooks/types";

export interface PropsContext {
  indexButton: number;
  foodData: FoodProps[];
  handleCategory: (indexButton: number, type: string) => Promise<void>;
}
