import { LegalDocument } from "../components/layout/LegalDocument";
import { CONTACT_EMAIL, WEBSITE_URL } from "../lib/constants";

export function AboutPage() {
  return (
    <LegalDocument
      title="Nosotros"
      subtitle="Conoce al equipo detrás de Mesafood y nuestra misión de modernizar la operación gastronómica."
      sections={[
        {
          title: "Quiénes somos",
          paragraphs: [
            "Mesafood nace con una idea simple: que administrar un restaurante no tenga que ser caótico. Somos un equipo enfocado en tecnología gastronómica, diseñado para unir salón, cocina y administración en una sola plataforma clara, rápida y confiable.",
            "Trabajamos con locales que quieren dejar atrás procesos manuales, errores en pedidos y falta de visibilidad sobre su negocio. Nuestro objetivo es que cada restaurante pueda operar con más orden, velocidad y control, sin depender de soluciones complicadas o desconectadas.",
          ],
        },
        {
          title: "Qué hacemos",
          bullets: [
            "Desarrollamos software para pedidos en tiempo real, gestión de menú, cocina, inventario y reportes.",
            "Diseñamos interfaces pensadas para el ritmo real de un restaurante: meseros, cocineros y dueños.",
            "Acompañamos la implementación con soporte cercano y mejoras continuas según las necesidades del sector.",
          ],
        },
        {
          title: "Nuestra visión",
          paragraphs: [
            "Creemos que la gastronomía moderna necesita herramientas que se adapten al negocio, no al revés. Queremos que Mesafood sea el sistema operativo de restaurantes en crecimiento: accesible para empezar, potente para escalar y flexible para equipos con distintos roles y tamaños.",
          ],
        },
        {
          title: "Cómo trabajamos",
          paragraphs: [
            "Priorizamos productos útiles, estables y fáciles de adoptar. Escuchamos a nuestros clientes, iteramos con rapidez y construimos funcionalidades que resuelven problemas concretos: menos demoras, mejor coordinación entre áreas y decisiones basadas en datos reales.",
          ],
        },
        {
          title: "Contacto",
          paragraphs: [
            `Si querés conocer Mesafood, solicitar una demo o explorar una solución a medida para tu negocio, escribinos a ${CONTACT_EMAIL} o visitá ${WEBSITE_URL.replace("https://", "")}.`,
          ],
        },
      ]}
    />
  );
}
