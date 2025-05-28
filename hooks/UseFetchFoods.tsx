import { useCallback, useState, useEffect } from "react";

interface FoodProps {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  avaliacao: number;
}

interface UseFetchFoodsResult {
  foodData: FoodProps[];
  loading: boolean;
  fetchFoods: () => Promise<void>;
}

const useFetchFoods = (endPoint: string): UseFetchFoodsResult => {
  const [foodData, setFoodData] = useState<FoodProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFoods = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.BASE_URL}${endPoint}`);
      if (!response.ok) throw new Error("Falha na resposta do servidor.");
      const json = (await response.json()) as FoodProps[];
      setFoodData(json);
    } catch (error) {
      console.error("Falha ao conectar ao servidor.", error);
      throw new Error("Falha ao buscar comidas. Tente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, [endPoint]);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  return {
    fetchFoods,
    loading,
    foodData,
  };
};

export { useFetchFoods };
