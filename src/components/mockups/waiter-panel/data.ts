export type WaiterMenuItem = {
  name: string;
  price: number;
  qty: number;
};

export type WaiterMenuCategory = {
  category: string;
  items: WaiterMenuItem[];
};

export const WAITER_TABLE_NUMBER = "3";

export const WAITER_MENU: WaiterMenuCategory[] = [
  {
    category: "COMBOS",
    items: [
      { name: "las empanadas y empanadas", price: 12000, qty: 1 },
      { name: "pedido de prueba", price: 10, qty: 0 },
      { name: "pizza con gaseosa", price: 10000, qty: 1 },
    ],
  },
  {
    category: "PAPAS",
    items: [{ name: "papas fritas", price: 6000, qty: 2 }],
  },
  {
    category: "PIZZA",
    items: [{ name: "pizza comun", price: 5000, qty: 0 }],
  },
];

export const WAITER_ORDER_TOTAL = 34000;
export const WAITER_ORDER_ITEM_COUNT = 4;

export function formatWaiterPrice(value: number) {
  return `$ ${value.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
