import { useFetchFoods } from "@/hooks/UseFetchFoods";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PropsContext } from "./types";
import { FoodProps } from "@/hooks/types";

const ContextCategory = createContext<PropsContext>({} as PropsContext);

export const useAuthCategory = () => {
  const context = useContext(ContextCategory);
  if (context === null) throw new TypeError("Error no contexto category.");
  return context;
};

const CategoryContext = ({ children }: PropsWithChildren) => {
  const [indexButton, setIndexButton] = useState<number>(0);
  const [foodData, setFoodData] = useState<FoodProps[]>([]);
  const { fetchFoods } = useFetchFoods();

  async function handleCategory(index: number, type: string) {
    const routerType = type.toLowerCase();
    const dataFood = await fetchFoods("/" + routerType);
    setFoodData(dataFood);
    setIndexButton(index);
  }

  return (
    <ContextCategory.Provider value={{ indexButton, handleCategory, foodData }}>
      {children}
    </ContextCategory.Provider>
  );
};

export default CategoryContext;
