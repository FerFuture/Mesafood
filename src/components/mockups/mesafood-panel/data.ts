export type PanelTab = "menu" | "stats" | "stock";

export const PANEL_TABS = [
  { id: "orders" as const, label: "Pedidos" },
  { id: "menu" as const, label: "Gestor de Menú" },
  { id: "qrMenu" as const, label: "QR Menú" },
  { id: "qr" as const, label: "Carta y QR Mesas", labelSm: "Carta y QR" },
  { id: "stock" as const, label: "Gestor de stock", labelSm: "Stock" },
  { id: "stats" as const, label: "Estadísticas" },
  { id: "users" as const, label: "Usuarios" },
  { id: "settings" as const, label: "Configuración", labelSm: "Config." },
];

export const MENU_PRODUCTS = [
  {
    name: "conito de papas y pancho",
    category: "COMBOS",
    description: "papas fritas y pancho",
    price: 7000,
  },
  {
    name: "filetes",
    category: "SEGUNDOS",
    description: "filetes de pollo",
    price: 5000,
  },
  {
    name: "guiso de lentejas",
    category: "SEGUNDOS",
    description: "guiso de lentejas",
    price: 10000,
  },
  {
    name: "helado de limon",
    category: "POSTRES",
    description: "helado de limon",
    price: 8000,
  },
] as const;

export const DAILY_STATS = [
  { label: "Ventas hoy", value: "$ 0,00" },
  { label: "Pedidos hoy", value: "1", highlight: true },
  { label: "Entregados", value: "0" },
  { label: "Cancelados", value: "0", danger: true },
  { label: "Delivery", value: "0" },
  { label: "Retiro local", value: "0" },
  { label: "Ticket prom.", value: "$ 0,00", warn: true },
] as const;

export const SALES_WEEK = [
  { day: "SÁB", amount: 0 },
  { day: "DOM", amount: 0 },
  { day: "LUN", amount: 0 },
  { day: "MAR", amount: 0 },
  { day: "MIÉ", amount: 0 },
  { day: "JUE", amount: 14000 },
  { day: "VIE", amount: 0 },
] as const;

export const TOP_PRODUCTS = [
  { name: "pedido de prueba", qty: 60 },
  { name: "papas fritas", qty: 42 },
  { name: "conito de papas y pancho", qty: 28 },
  { name: "pizza con gaseosa", qty: 13 },
  { name: "pizza común", qty: 7 },
] as const;

export const PAYMENT_METHODS = [
  { method: "Mercado Pago", orders: 1, collected: "$ 20,00", share: "0.0%" },
  { method: "Efectivo", orders: 44, collected: "$ 498.663,00", share: "100.0%" },
] as const;
