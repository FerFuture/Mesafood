export const STOCK_SUB_TABS = ["Stock", "Recetario", "Alerta"] as const;

export const STOCK_UNIT_FILTERS = ["KG", "G", "L", "ML", "UNIDAD", "PAQUETE"] as const;

export const STOCK_ITEMS = [
  {
    name: "AGUA",
    current: 16,
    unit: "L",
    threshold: 15,
    inputValue: 16,
  },
  {
    name: "ARROZ",
    current: 8,
    unit: "KG",
    threshold: 5,
    inputValue: 8,
  },
] as const;

export const FEATURED_RECIPE = {
  name: "Tortitas Raspadas Mendocinas",
  ingredients: ["Agua", "Grasa", "Harina", "Levadura"],
  qty: 1,
} as const;
