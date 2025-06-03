import { useCallback, useState } from "react";
import { FoodProps, EndPointProps } from "./types";
import { BASE_URL } from "@/service/baseUrl";

const useFetchFoods = () => {
  const [loading, setLoading] = useState(false);

  const fetchFoods = useCallback(async (endPoint: EndPointProps) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}${endPoint}`);
      if (!response.ok) throw new Error("Falha na resposta do servidor.");
      const json = (await response.json()) as FoodProps[];
      return json;
    } catch (error) {
      console.error("Falha ao conectar ao servidor.", error);
      throw new Error("Falha ao buscar comidas. Tente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    fetchFoods,
  };
};

export { useFetchFoods };
