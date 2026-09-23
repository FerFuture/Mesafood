import { LegalDocument } from "../components/layout/LegalDocument";
import { CONTACT_EMAIL } from "../lib/constants";

const LAST_UPDATED = "26 de agosto de 2026";

export function PrivacyPage() {
  return (
    <LegalDocument
      title="Política de privacidad"
      subtitle="Cómo Mesafood recopila, utiliza y protege la información de restaurantes, personal y clientes."
      lastUpdated={LAST_UPDATED}
      sections={[
        {
          title: "1. Responsable del tratamiento",
          paragraphs: [
            `Mesafood es responsable del tratamiento de los datos personales procesados a través de su sitio web, plataforma y servicios relacionados. Para consultas sobre privacidad puede escribir a ${CONTACT_EMAIL}.`,
          ],
        },
        {
          title: "2. Datos que recopilamos",
          bullets: [
            "Datos de contacto: nombre, correo electrónico, teléfono y nombre del restaurante.",
            "Datos de cuenta: credenciales, rol, configuración del local y preferencias del sistema.",
            "Datos operativos: pedidos, mesas, menús, inventario, reportes y registros de actividad.",
            "Datos técnicos: dirección IP, tipo de dispositivo, navegador, logs de acceso y cookies esenciales.",
          ],
        },
        {
          title: "3. Finalidad del tratamiento",
          bullets: [
            "Prestar, mantener y mejorar la plataforma Mesafood.",
            "Gestionar cuentas, soporte, facturación y comunicaciones del servicio.",
            "Garantizar la seguridad, prevenir fraudes y cumplir obligaciones legales.",
            "Analizar el uso del producto de forma agregada para optimizar funcionalidades.",
          ],
        },
        {
          title: "4. Base legal",
          paragraphs: [
            "Tratamos los datos con base en la ejecución del contrato de servicio, el interés legítimo en operar y mejorar la plataforma, el cumplimiento de obligaciones legales y, cuando corresponda, el consentimiento del titular.",
          ],
        },
        {
          title: "5. Conservación y seguridad",
          paragraphs: [
            "Conservamos los datos mientras exista una relación activa con el cliente o mientras sea necesario para cumplir obligaciones legales, resolver disputas o hacer valer acuerdos.",
            "Aplicamos medidas técnicas y organizativas razonables para proteger la información contra acceso no autorizado, pérdida, alteración o divulgación indebida.",
          ],
        },
        {
          title: "6. Compartición de datos",
          paragraphs: [
            "No vendemos datos personales. Podemos compartir información con proveedores de infraestructura, soporte, analítica o pagos que actúen como encargados del tratamiento y solo en la medida necesaria para prestar el servicio, sujetos a confidencialidad y protección adecuada.",
          ],
        },
        {
          title: "7. Derechos del titular",
          bullets: [
            "Acceder, rectificar o actualizar sus datos personales.",
            "Solicitar la eliminación o limitación del tratamiento cuando corresponda.",
            "Oponerse a ciertos tratamientos o retirar consentimientos previamente otorgados.",
            "Solicitar portabilidad de los datos en los casos previstos por la ley.",
          ],
        },
        {
          title: "8. Cookies",
          paragraphs: [
            "Utilizamos cookies y tecnologías similares estrictamente necesarias para el funcionamiento del sitio y la plataforma. Podremos ampliar esta política si incorporamos cookies analíticas o de marketing.",
          ],
        },
        {
          title: "9. Cambios a esta política",
          paragraphs: [
            "Podemos actualizar esta política para reflejar cambios legales, técnicos o del servicio. Publicaremos la versión vigente en esta página e indicaremos la fecha de última actualización.",
          ],
        },
        {
          title: "10. Contacto",
          paragraphs: [
            `Si tiene preguntas sobre privacidad o desea ejercer sus derechos, escríbanos a ${CONTACT_EMAIL} indicando su nombre, restaurante y solicitud.`,
          ],
        },
      ]}
    />
  );
}
