interface CategoryProps {
  id: number | string;
  type: string;
  source: any;
}

export const arrButtonsCategory: CategoryProps[] = [
  {
    id: 1,
    type: "Burger",
    source: require("@/assets/images/buguer1.png"),
  },
  {
    id: 2,
    type: "Pizza",
    source: require("@/assets/images/pizza3.png"),
  },
  {
    id: 3,
    type: "Bebidas",
    source: require("@/assets/images/bebida2.png"),
  },
 
];
