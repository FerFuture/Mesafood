import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  ChefHat,
  ClipboardList,
  Printer,
  QrCode,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/5490000000000";
export const DEMO_EMAIL = "demo@mesafood.app";

export const UI = {
  requestDemo: "Solicitar demo",
  contactWhatsApp: "Contactar por WhatsApp",
  mostPopular: "Más popular",
  trustHeadline: "Diseñado para restaurantes modernos",
  footerTagline:
    "Tecnología gastronómica en tiempo real: del salón a la cocina y la administración.",
  footerRights: "Todos los derechos reservados.",
  footerSections: { product: "Producto", company: "Empresa", legal: "Legal" },
  aria: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    website: "Sitio web",
    email: "Correo",
    whatsapp: "WhatsApp",
  },
  hero: {
    badge: "Plataforma gastronómica en tiempo real",
    title: "Controla tu restaurante",
    titleHighlight: "en tiempo real",
    subtitle:
      "Pedidos, sincronización con cocina, menús QR, inventario y analíticas en una sola plataforma moderna.",
  },
  sections: {
    features: {
      eyebrow: "Plataforma",
      title: "Todo lo que tu restaurante necesita",
      subtitle: "Del comedor a la cocina y la administración — un solo sistema conectado.",
    },
    showcase: {
      eyebrow: "Recorrido del producto",
      title: "Hecho para cada rol en tu restaurante",
      subtitle:
        "Interfaces pensadas para meseros, cocineros y dueños — todo sincronizado en tiempo real.",
    },
    benefits: {
      eyebrow: "Por qué Mesafood",
      title: "Opera más ágil y con control",
      subtitle: "Tecnología que se paga sola con velocidad, precisión y visibilidad.",
    },
    howItWorks: {
      eyebrow: "Flujo de trabajo",
      title: "Cómo funciona",
      subtitle: "Del pedido al insight en cuatro pasos simples.",
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "La confianza de dueños de restaurante",
      subtitle: "Equipos que migraron a Mesafood no volvieron atrás.",
    },
    pricing: {
      eyebrow: "Precios",
      title: "Planes que crecen contigo",
      subtitle: "Empieza pequeño o escala a empresa — todos incluyen sincronización en tiempo real.",
    },
    finalCta: {
      title: "Moderniza tu restaurante hoy",
      subtitle: "Lleva velocidad, control y tecnología a tu negocio.",
    },
  },
};

export const NAV_LINKS = [
  { label: "Funciones", href: "#features" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Precios", href: "#pricing" },
  { label: "Demo", href: "#demo" },
];

export const TRUST_LOGOS = [
  "Bistro Nova",
  "La Cocina",
  "Urban Grill",
  "Sakura House",
  "Mar del Plata",
  "Fire & Salt",
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Pedidos en tiempo real",
    description: "Cada pedido se sincroniza al instante entre mesero, cocina y panel administrativo.",
  },
  {
    icon: ChefHat,
    title: "Panel de cocina",
    description: "Pantalla tipo kanban con temporizadores y prioridades para el equipo de cocina.",
  },
  {
    icon: QrCode,
    title: "Menús QR",
    description: "Menús digitales que el cliente escanea en la mesa — actualiza precios en segundos.",
  },
  {
    icon: ClipboardList,
    title: "Control de inventario",
    description: "Rastrea ingredientes, alertas y costos de recetas desde un solo centro de control.",
  },
  {
    icon: BarChart3,
    title: "Analíticas e informes",
    description: "Ingresos, platillos más vendidos y horas pico con reportes exportables.",
  },
  {
    icon: Users,
    title: "Sistema multirol",
    description: "Permisos granulares para dueños, gerentes, meseros y personal de cocina.",
  },
  {
    icon: Printer,
    title: "Impresoras térmicas",
    description: "Imprime comandas y tickets automáticamente en hardware estándar del sector.",
  },
  {
    icon: Smartphone,
    title: "Listo para móvil",
    description: "Optimizado para tablets y celulares — toma pedidos desde cualquier lugar.",
  },
];

export const SHOWCASE_ITEMS = [
  {
    id: "waiter",
    title: "Panel de mesero hecho para la velocidad",
    description:
      "El equipo de piso gestiona mesas, divide cuentas y envía pedidos a cocina en dos toques. Sin manuales complicados.",
    bullets: ["Mapa de mesas con estado en vivo", "Modificadores y combos rápidos", "Envío a cocina con un toque"],
    reverse: false,
  },
  {
    id: "kitchen",
    title: "Pantalla de mando de cocina",
    description:
      "Los cocineros ven cada comanda en tiempo real con tiempos de preparación, alérgenos y agrupación por tiempos — cero caos en papel.",
    bullets: ["Columnas Nuevo / Preparando / Listo", "Prioriza pedidos urgentes", "Alertas sonoras y visuales"],
    reverse: true,
  },
  {
    id: "analytics",
    title: "Panel de analíticas administrativo",
    description:
      "Los dueños monitorean ingresos, eficiencia del personal y rendimiento del menú desde una sola sala de control.",
    bullets: ["Ingresos y cubiertos en vivo", "Mapas de horas pico", "Exportar a CSV / PDF"],
    reverse: false,
  },
  {
    id: "inventory",
    title: "Inventario y recetas",
    description:
      "Vincula cada platillo con ingredientes, descuenta stock al vender y recibe alertas de bajo inventario antes del servicio.",
    bullets: ["Costeo de recetas", "Seguimiento de proveedores", "Alertas de stock bajo"],
    reverse: true,
  },
];

export const BENEFITS = [
  { title: "Servicio más rápido", description: "Los pedidos llegan a cocina en menos de un segundo." },
  { title: "Menos errores", description: "Las comandas digitales eliminan errores de letra." },
  { title: "Mejor organización", description: "Cada mesa, pedido y turno en sincronía." },
  { title: "Control en tiempo real", description: "Mira qué pasa en el salón en este momento." },
  { title: "Gestión de personal más fácil", description: "Roles, turnos y permisos en un solo lugar." },
  { title: "Visibilidad de ventas", description: "Conoce tus números antes de cerrar caja." },
];

export const STATS = [
  { value: 2400000, suffix: "+", label: "Pedidos procesados", prefix: "" },
  { value: 850, suffix: "+", label: "Restaurantes activos", prefix: "" },
  { value: 32, suffix: "%", label: "Cocina más rápida", prefix: "" },
];

export const STEPS = [
  {
    step: 1,
    title: "El mesero toma el pedido",
    description: "El personal elige mesa, agrega platillos y envía — todo desde tablet o celular.",
  },
  {
    step: 2,
    title: "Cocina recibe al instante",
    description: "Las comandas aparecen en pantalla con modificadores y prioridades.",
  },
  {
    step: 3,
    title: "El ticket se imprime solo",
    description: "Las impresoras térmicas disparan comandas por estación sin pasos manuales.",
  },
  {
    step: 4,
    title: "Admin ve las estadísticas",
    description: "Los dueños siguen ventas, inventario y rendimiento en tiempo real.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Redujimos a la mitad los errores en comandas y la cocina dejó de gritarse en la línea. Mesafood se pagó solo el primer mes.",
    name: "María González",
    role: "Dueña, Bistro Nova",
    initials: "MG",
  },
  {
    quote:
      "Solo el menú QR nos ahorró reimpresiones. Pero el panel en tiempo real es lo que abro cada mañana antes del servicio.",
    name: "Carlos Ruiz",
    role: "Gerente general, Urban Grill",
    initials: "CR",
  },
  {
    quote:
      "Capacitar meseros nuevos tomaba días. Ahora son productivos desde el primer turno porque la interfaz es intuitiva.",
    name: "Ana Martínez",
    role: "Operaciones, La Cocina",
    initials: "AM",
  },
];

export const PRICING_PLANS = [
  {
    name: "Inicial",
    price: "$49",
    period: "/mes",
    description: "Para locales pequeños que empiezan con operación digital.",
    features: [
      "Hasta 10 mesas",
      "Paneles de mesero y cocina",
      "Menú digital QR",
      "Analíticas básicas",
      "Soporte por correo",
    ],
    highlighted: false,
    cta: "Comenzar",
  },
  {
    name: "Profesional",
    price: "$99",
    period: "/mes",
    description: "Plataforma completa para restaurantes en crecimiento que necesitan control.",
    features: [
      "Mesas ilimitadas",
      "Inventario y recetas",
      "Analíticas avanzadas",
      "Permisos multirol",
      "Soporte para impresoras térmicas",
      "Soporte prioritario",
    ],
    highlighted: true,
    cta: "Solicitar demo",
  },
  {
    name: "Empresarial",
    price: "A medida",
    period: "",
    description: "Grupos con varias sucursales, integraciones a medida y SLAs.",
    features: [
      "Panel multi-sucursal",
      "API e integraciones",
      "Ejecutivo de cuenta dedicado",
      "Onboarding personalizado",
      "SLA y garantía de uptime",
    ],
    highlighted: false,
    cta: "Contactar ventas",
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Funciones", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Demo", href: "#demo" },
  ],
  company: [
    { label: "Nosotros", href: "#" },
    { label: "Empleos", href: "#" },
    { label: "Contacto", href: `mailto:${DEMO_EMAIL}` },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
};
