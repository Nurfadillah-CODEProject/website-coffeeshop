export type Category = "coffee" | "non-coffee" | "bakes";

export type MenuItem = {
  id: number;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
  tagId: string;
  tagEn: string;
  price: number;
  category: Category;
  soldOut: boolean;
  image: string | null;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nameId: "Kopi Susu Kita",
    nameEn: "Kopi Susu Kita",
    descId: "Espresso rumahan, susu segar, dan gula aren.",
    descEn: "Our house espresso, fresh milk & gula aren.",
    tagId: "SIGNATURE · DINGIN",
    tagEn: "SIGNATURE · ICED",
    price: 28000,
    category: "coffee",
    soldOut: false,
    image: null,
  },
  {
    id: 2,
    nameId: "Flat White",
    nameEn: "Flat White",
    descId: "Double espresso, susu lembut, sedikit keajaiban sehari-hari.",
    descEn: "Double espresso, silky milk, a little everyday magic.",
    tagId: "ESPRESSO · PANAS",
    tagEn: "ESPRESSO · HOT",
    price: 32000,
    category: "coffee",
    soldOut: false,
    image: null,
  },
  {
    id: 3,
    nameId: "Iced Americano",
    nameEn: "Iced Americano",
    descId: "Espresso tegas dan segar di atas air dan es.",
    descEn: "Bright, bold espresso over filtered water & ice.",
    tagId: "ESPRESSO · DINGIN",
    tagEn: "ESPRESSO · ICED",
    price: 25000,
    category: "coffee",
    soldOut: false,
    image: null,
  },
  {
    id: 4,
    nameId: "Matcha Latte",
    nameEn: "Matcha Latte",
    descId: "Matcha ceremonial dikocok pelan dengan susu segar.",
    descEn: "Ceremonial matcha whisked slowly with fresh milk.",
    tagId: "NON-KOPI · DINGIN",
    tagEn: "NON-COFFEE · ICED",
    price: 34000,
    category: "non-coffee",
    soldOut: false,
    image: null,
  },
  {
    id: 5,
    nameId: "Croissant Mentega",
    nameEn: "Butter Croissant",
    descId: "Lapisan renyah keemasan, dipanggang segar tiap pagi.",
    descEn: "Golden, flaky layers. Baked fresh every morning.",
    tagId: "BARU DARI OVEN",
    tagEn: "FROM THE OVEN",
    price: 24000,
    category: "bakes",
    soldOut: false,
    image: null,
  },
  {
    id: 6,
    nameId: "Babka Cokelat",
    nameEn: "Chocolate Babka",
    descId: "Brioche lembut, pita cokelat pekat, dan garam laut.",
    descEn: "Soft brioche, dark chocolate ribbons, sea salt.",
    tagId: "BARU DARI OVEN",
    tagEn: "FROM THE OVEN",
    price: 30000,
    category: "bakes",
    soldOut: true,
    image: null,
  },
];
