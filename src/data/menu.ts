export type MenuItem = {
  id: number;
  nameId: string;
  nameEn: string;
  price: number;
  category: "coffee" | "non-coffee" | "food";
  soldOut: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nameId: "Kopi Susu",
    nameEn: "Milk Coffee",
    price: 18000,
    category: "coffee",
    soldOut: false,
  },
  {
    id: 2,
    nameId: "Americano",
    nameEn: "Americano",
    price: 15000,
    category: "coffee",
    soldOut: false,
  },
  {
    id: 3,
    nameId: "Cappuccino",
    nameEn: "Cappuccino",
    price: 22000,
    category: "coffee",
    soldOut: false,
  },
  {
    id: 4,
    nameId: "Matcha Latte",
    nameEn: "Matcha Latte",
    price: 24000,
    category: "non-coffee",
    soldOut: false,
  },
  {
    id: 5,
    nameId: "Cokelat Panas",
    nameEn: "Hot Chocolate",
    price: 20000,
    category: "non-coffee",
    soldOut: true,
  },
  {
    id: 6,
    nameId: "Roti Bakar",
    nameEn: "Toast",
    price: 15000,
    category: "food",
    soldOut: false,
  },
];
