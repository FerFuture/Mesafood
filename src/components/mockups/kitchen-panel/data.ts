export type KitchenOrder = {
  id: string;
  datetime: string;
  status: string;
  typeLabel: string;
  typeVariant: "local" | "delivery";
  table?: string;
  items: string[];
  footer: string;
};

export const KITCHEN_ORDERS: KitchenOrder[] = [
  {
    id: "f64cf225",
    datetime: "14/5/2026, 10:21:35",
    status: "confirmed",
    typeLabel: "Local / retiro",
    typeVariant: "local",
    table: "5",
    items: ["las empanadas y empanadas × 2"],
    footer: "Mozo: mozo",
  },
  {
    id: "efc9f466",
    datetime: "14/5/2026, 10:18:12",
    status: "confirmed",
    typeLabel: "Delivery mozo",
    typeVariant: "delivery",
    items: ["las empanadas y empanadas"],
    footer: "Dirección: Mi casa",
  },
  {
    id: "73796114",
    datetime: "14/5/2026, 10:15:48",
    status: "confirmed",
    typeLabel: "Local / retiro",
    typeVariant: "local",
    table: "5",
    items: ["pizza con gaseosa × 4"],
    footer: "Mozo: mozo",
  },
];
