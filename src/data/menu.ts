export type MenuItem = {
  name: string;
  description?: string;
  prices: { label: string; value: string }[];
  featured?: boolean;
};
export type MenuCategory = { name: string; items: MenuItem[] };
export const menuCategories: MenuCategory[] = [
  {
    name: "Churrasco",
    items: [
      {
        name: "Frango de churrasco",
        featured: true,
        prices: [
          { label: "1/2 frango", value: "2,80 €" },
          { label: "1 frango", value: "5,00 €" },
        ],
      },
      {
        name: "Costelinha",
        prices: [
          { label: "1/2 dose", value: "7,00 €" },
          { label: "1 dose", value: "14,00 €" },
        ],
      },
      {
        name: "Picanha",
        prices: [
          { label: "1/4 dose", value: "5,90 €" },
          { label: "1/2 dose", value: "11,80 €" },
          { label: "1 dose", value: "17,70 €" },
        ],
      },
    ],
  },
  {
    name: "Pratos do dia",
    items: [
      {
        name: "Dourada na brasa",
        prices: [
          { label: "1/4 dose", value: "4,90 €" },
          { label: "1/2 dose", value: "9,60 €" },
          { label: "1 dose", value: "14,50 €" },
        ],
      },
      {
        name: "Vitela estufada",
        prices: [
          { label: "1/4 dose", value: "4,90 €" },
          { label: "1/2 dose", value: "9,60 €" },
          { label: "1 dose", value: "14,50 €" },
        ],
      },
      {
        name: "Polvo à lagareiro",
        prices: [
          { label: "1/4 dose", value: "9,00 €" },
          { label: "1/2 dose", value: "18,00 €" },
          { label: "1 dose", value: "27,00 €" },
        ],
      },
    ],
  },
  {
    name: "Da casa",
    items: [
      {
        name: "Francesinha à Mimos",
        prices: [{ label: "unidade", value: "6,50 €" }],
      },
      {
        name: "Bacalhau com natas",
        prices: [{ label: "unidade", value: "5,50 €" }],
      },
      {
        name: "Arroz de pato",
        prices: [{ label: "unidade", value: "5,50 €" }],
      },
    ],
  },
];
export const menuNote =
  "Preços e designações conforme a ementa oficial atualmente ligada no site do Mimo’s.";
