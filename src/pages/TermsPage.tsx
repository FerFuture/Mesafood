import { LegalDocument } from "../components/layout/LegalDocument";
import { CONTACT_EMAIL } from "../lib/constants";

const LAST_UPDATED = "26 de agosto de 2026";

export function TermsPage() {
  return (
    <LegalDocument
      title="Términos de uso"
      subtitle="Condiciones generales para el acceso y uso de Mesafood y sus servicios asociados."
      lastUpdated={LAST_UPDATED}
      sections={[
        {
          title: "1. Aceptación de los términos",
          paragraphs: [
            "Al acceder al sitio web, solicitar una demo, registrarse o utilizar la plataforma Mesafood, usted acepta estos Términos de uso. Si no está de acuerdo, debe abstenerse de utilizar el servicio.",
          ],
        },
        {
          title: "2. Descripción del servicio",
          paragraphs: [
            "Mesafood es una plataforma de software para restaurantes que incluye gestión de pedidos, menús, cocina, inventario, reportes y funcionalidades relacionadas. Algunas características pueden variar según el plan contratado.",
          ],
        },
        {
          title: "3. Cuentas y acceso",
          bullets: [
            "El cliente es responsable de la veracidad de la información registrada.",
            "Debe mantener la confidencialidad de sus credenciales y del acceso de su personal.",
            "Debe notificar de inmediato cualquier uso no autorizado de su cuenta.",
            "Mesafood puede suspender cuentas ante uso indebido, incumplimiento o riesgos de seguridad.",
          ],
        },
        {
          title: "4. Uso permitido",
          bullets: [
            "Utilizar la plataforma únicamente para operaciones legítimas del restaurante o negocio autorizado.",
            "No intentar acceder sin autorización a sistemas, datos o cuentas de terceros.",
            "No interferir con la disponibilidad, integridad o seguridad del servicio.",
            "No utilizar Mesafood para actividades ilícitas, fraudulentas o que vulneren derechos de terceros.",
          ],
        },
        {
          title: "5. Planes, pagos y facturación",
          paragraphs: [
            "Los precios, funcionalidades y condiciones comerciales se informan en la landing, propuesta comercial o acuerdo específico. Los planes de pago se facturan según la periodicidad acordada. El incumplimiento de pago puede derivar en suspensión del servicio.",
          ],
        },
        {
          title: "6. Propiedad intelectual",
          paragraphs: [
            "Mesafood, su marca, software, diseño, documentación y contenidos propios son propiedad de sus titulares y se protegen por la legislación aplicable. El cliente conserva la titularidad de sus datos comerciales, menús, información operativa y contenidos cargados en la plataforma.",
          ],
        },
        {
          title: "7. Disponibilidad y soporte",
          paragraphs: [
            "Procuramos mantener la plataforma disponible y funcional, pero no garantizamos operación ininterrumpida. Pueden existir mantenimientos, actualizaciones o interrupciones por causas técnicas o de fuerza mayor. El nivel de soporte dependerá del plan contratado.",
          ],
        },
        {
          title: "8. Limitación de responsabilidad",
          paragraphs: [
            "En la máxima medida permitida por la ley, Mesafood no será responsable por daños indirectos, lucro cesante, pérdida de datos o perjuicios derivados del uso o imposibilidad de uso del servicio, salvo dolo o culpa grave debidamente acreditada.",
          ],
        },
        {
          title: "9. Terminación",
          paragraphs: [
            "El cliente puede solicitar la baja del servicio conforme a las condiciones comerciales aplicables. Mesafood puede terminar o suspender el acceso ante incumplimiento material de estos términos, riesgos de seguridad o requerimientos legales.",
          ],
        },
        {
          title: "10. Modificaciones",
          paragraphs: [
            "Podemos actualizar estos términos para reflejar cambios del servicio, requisitos legales o mejoras operativas. La versión vigente estará disponible en esta página con su fecha de actualización.",
          ],
        },
        {
          title: "11. Ley aplicable y contacto",
          paragraphs: [
            "Estos términos se interpretarán conforme a la legislación aplicable en la jurisdicción acordada con el cliente o, en su defecto, la legislación de la República Argentina.",
            `Para consultas legales o comerciales, contacte a ${CONTACT_EMAIL}.`,
          ],
        },
      ]}
    />
  );
}
