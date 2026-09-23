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
    category: "PLATO ESPECIAL",
    description: "filetes de pollo",
    price: 5000,
  },
  {
    name: "guiso de lentejas",
    category: "PLATO ESPECIAL",
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
  { label: "Ventas hoy", value: "$ 48.600,00" },
  { label: "Pedidos hoy", value: "27", highlight: true },
  { label: "Entregados", value: "22" },
  { label: "Cancelados", value: "2", danger: true },
  { label: "Delivery", value: "9" },
  { label: "Retiro local", value: "13" },
  { label: "Ticket prom.", value: "$ 1.800,00", warn: true },
] as const;

export const SALES_WEEK = [
  { day: "SÁB", amount: 8200 },
  { day: "DOM", amount: 11500 },
  { day: "LUN", amount: 6400 },
  { day: "MAR", amount: 9800 },
  { day: "MIÉ", amount: 7200 },
  { day: "JUE", amount: 14000 },
  { day: "VIE", amount: 15600 },
] as const;

export const SALES_WEEK_TOTAL = SALES_WEEK.reduce((sum, day) => sum + day.amount, 0);

export const TOP_PRODUCTS = [
  { name: "Docena de empanadas y gaseosa", qty: 60 },
  { name: "papas fritas", qty: 42 },
  { name: "conito de papas y pancho", qty: 28 },
  { name: "pizza entera con gaseosa", qty: 13 },
  { name: "pizza común", qty: 7 },
] as const;

export const PAYMENT_METHODS = [
  { method: "Mercado Pago", orders: 18, collected: "$ 186.400,00", share: "37.2%" },
  { method: "Efectivo", orders: 31, collected: "$ 314.280,00", share: "62.8%" },
] as const;
