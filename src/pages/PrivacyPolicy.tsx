import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-8 sticky top-0 z-50 shadow-lg">
        <motion.div
          className="container-wide flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.webp" alt="GoldSync" className="w-14 h-auto object-contain" />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gold-500">
            Política de Privacidad
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </Link>
        </motion.div>
      </header>

      {/* Content */}
      <motion.div
        className="section-padding container-wide max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Last Updated */}
        <motion.p
          className="text-sm text-gray-500 mb-8 font-opensans"
          variants={itemVariants}
        >
          Última actualización:{' '}
          {new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </motion.p>

        {/* Introduction */}
        <motion.div
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-12"
          variants={itemVariants}
        >
          <p className="text-gray-700 font-opensans leading-relaxed">
            En <span className="font-semibold">GoldSync</span>, respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos tu información cuando utilizas nuestros servicios.
          </p>
        </motion.div>

        {/* Section 1 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            1. Información que Recopilamos
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Recopilamos información de varias formas y para múltiples propósitos:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  1.1 Información que Proporcionas Directamente
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Datos de Registro:</strong> Nombre completo, correo electrónico, número de teléfono, profesión y empresa
                  </li>
                  <li>
                    <strong>Perfil del Usuario:</strong> Biografía, enlaces de redes sociales (LinkedIn, Twitter, Instagram), portafolio profesional
                  </li>
                  <li>
                    <strong>Información de Pago:</strong> Si realizas una compra, recopilamos información de la transacción (no almacenamos números de tarjeta - procesados por terceros)
                  </li>
                  <li>
                    <strong>Comunicaciones:</strong> Mensajes que nos envías, consultas de soporte, comentarios y sugerencias
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  1.2 Información Recopilada Automáticamente
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Datos del Dispositivo:</strong> Tipo de dispositivo, modelo, sistema operativo, identificadores únicos
                  </li>
                  <li>
                    <strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador, idioma, páginas visitadas, duración de la sesión
                  </li>
                  <li>
                    <strong>Cookies y Tecnologías Similares:</strong> Información sobre preferencias, contraseñas guardadas, historial de navegación
                  </li>
                  <li>
                    <strong>Datos de Ubicación:</strong> País, ciudad (aproximada), si lo autorizas
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  1.3 Información de Terceros
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Datos de proveedores de servicios de pago</li>
                  <li>
                    Datos públicos de redes sociales si vinculan su cuenta
                  </li>
                  <li>Información de referidos si alguien te recomienda GoldSync</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            2. Cómo Utilizamos Tu Información
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Utilizamos la información recopilada para los siguientes propósitos:
            </p>
            <ul className="list-disc list-inside space-y-2 bg-gray-50 p-6 rounded-lg">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Procesar transacciones y enviar confirmaciones</li>
              <li>
                Enviar comunicaciones sobre actualizaciones, novedades y ofertas especiales
              </li>
              <li>Responder a consultas y proporcionar soporte técnico</li>
              <li>Personalizar tu experiencia de usuario</li>
              <li>Prevenir fraude y actividades ilegales</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Realizar análisis estadísticos y mejora de productos</li>
              <li>
                Monitorear y analizar tendencias de uso del servicio
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            3. Compartición de Información
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              No vendemos tu información personal. Sin embargo, podemos compartirla en las siguientes circunstancias:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3.1 Con Proveedores de Servicios
                </h4>
                <p>
                  Compartimos información con terceros que nos ayudan a operar, como procesadores de pagos, proveedores de hosting, análisis y soporte al cliente.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3.2 Por Requisitos Legales
                </h4>
                <p>
                  Podemos divulgar información si es requerido por ley, orden judicial, o si es necesario para proteger nuestros derechos, privacidad o seguridad.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3.3 En Caso de Fusión
                </h4>
                <p>
                  Si GoldSync es adquirida, fusionada o vendida, tu información podría ser transferida como parte de esa transacción.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  3.4 Con Tu Consentimiento
                </h4>
                <p>
                  Podemos compartir información con terceros si nos das consentimiento explícito para hacerlo.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            4. Seguridad de Datos
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Implementamos medidas técnicas y organizativas para proteger tu información:
            </p>
            <ul className="list-disc list-inside space-y-2 bg-gray-50 p-6 rounded-lg">
              <li>Encriptación de datos en tránsito (HTTPS/SSL)</li>
              <li>Encriptación de datos en reposo (AES-256)</li>
              <li>Autenticación de dos factores (2FA)</li>
              <li>Firewalls y sistemas de detección de intrusiones</li>
              <li>Auditorías de seguridad regulares</li>
              <li>Acceso limitado a personal autorizado únicamente</li>
              <li>Contraseñas hash con algoritmos seguros (bcrypt)</li>
            </ul>
            <p className="mt-4 text-orange-700 bg-orange-50 p-4 rounded-lg">
              <strong>Nota:</strong> A pesar de nuestros esfuerzos, no podemos garantizar seguridad absoluta. Eres responsable de mantener la confidencialidad de tu contraseña.
            </p>
          </div>
        </motion.section>

        {/* Section 5 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            5. Retención de Datos
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Retenemos tu información personal mientras tu cuenta esté activa. Después de que cierres tu cuenta:
            </p>
            <ul className="list-disc list-inside space-y-2 bg-gray-50 p-6 rounded-lg">
              <li>
                Datos de perfil: Eliminados después de 30 días (período de gracia para recuperación)
              </li>
              <li>
                Datos de transacción: Retenidos por 7 años para cumplimiento fiscal
              </li>
              <li>
                Datos de análisis: Anonimizados y retenidos indefinidamente
              </li>
              <li>
                Datos de soporte: Retenidos por 2 años para referencia
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 6 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            6. Cookies y Tecnologías de Rastreo
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Tipos de Cookies:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento del sitio
                  </li>
                  <li>
                    <strong>Cookies de Funcionalidad:</strong> Recuerdan tus preferencias
                  </li>
                  <li>
                    <strong>Cookies de Análisis:</strong> Ayudan a entender cómo usas GoldSync (Google Analytics)
                  </li>
                  <li>
                    <strong>Cookies de Marketing:</strong> Para anuncios personalizados (si aceptas)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Control de Cookies:
                </h4>
                <p>
                  Puedes controlar las cookies desde tu navegador. La mayoría de navegadores permiten rechazar cookies o avisar cuando se instalen.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 7 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            7. Derechos del Usuario
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 bg-gray-50 p-6 rounded-lg">
              <li>
                <strong>Acceso:</strong> Solicitar una copia de tus datos personales
              </li>
              <li>
                <strong>Corrección:</strong> Solicitar que corrijamos datos inexactos
              </li>
              <li>
                <strong>Eliminación:</strong> Solicitar que eliminar tus datos ("Derecho al Olvido")
              </li>
              <li>
                <strong>Restricción:</strong> Limitar cómo usamos tu información
              </li>
              <li>
                <strong>Portabilidad:</strong> Recibir tus datos en formato legible
              </li>
              <li>
                <strong>Oposición:</strong> Oponerte al procesamiento de datos
              </li>
              <li>
                <strong>No Discriminación:</strong> No serás discriminado por ejercer estos derechos
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contacta a:{' '}
              <span className="font-semibold">privacy@goldsync.gt</span>
            </p>
          </div>
        </motion.section>

        {/* Section 8 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            8. Datos de Menores de Edad
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              GoldSync no está dirigido a menores de 18 años. No recopilamos conscientemente información de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
            </p>
            <p>
              Si eres padre/madre y crees que tu hijo ha proporcionado información, contacta a:{' '}
              <span className="font-semibold">privacy@goldsync.gt</span>
            </p>
          </div>
        </motion.section>

        {/* Section 9 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            9. Transferencias Internacionales
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Tu información podría ser transferida, almacenada y procesada en países distintos a Guatemala. Al usar GoldSync, consientes estas transferencias.
            </p>
            <p>
              Implementamos salvaguardas apropiadas (como Cláusulas Contractuales Estándar) para proteger tu información durante estas transferencias.
            </p>
          </div>
        </motion.section>

        {/* Section 10 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            10. Enlaces a Terceros
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              GoldSync puede contener enlaces a sitios web de terceros. No somos responsables de sus prácticas de privacidad. Te recomendamos revisar sus políticas antes de compartir información.
            </p>
          </div>
        </motion.section>

        {/* Section 11 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            11. Cambios a Esta Política
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Podemos actualizar esta Política de Privacidad en cualquier momento. Los cambios importantes te serán notificados por correo electrónico o mediante un aviso destacado en nuestra plataforma.
            </p>
            <p>
              Tu uso continuado de GoldSync después de cambios implica aceptación de la política actualizada.
            </p>
          </div>
        </motion.section>

        {/* Section 12 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            12. Ley Aplicable
          </h2>
          <div className="space-y-4 text-gray-700 font-opensans">
            <p>
              Esta Política de Privacidad se rige por las leyes de Guatemala. Cualquier disputa será resuelta en los juzgados competentes del departamento de Chimaltenango.
            </p>
          </div>
        </motion.section>

        {/* Section 13 */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            13. Contacto
          </h2>
          <div className="bg-gold-500 bg-opacity-10 border-l-4 border-gold-500 p-6 rounded-lg">
            <p className="text-gray-700 font-opensans leading-relaxed">
              Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de privacidad, contáctanos:
            </p>
            <div className="mt-6 space-y-3 text-gray-700 font-opensans">
              <div>
                <span className="font-bold">GoldSync Guatemala</span>
              </div>
              <div>
                Chimaltenango, Guatemala
              </div>
              <div>
                📧 Email:{' '}
                <a
                  href="mailto:privacy@goldsync.gt"
                  className="text-gold-500 hover:text-gold-600 transition-colors font-semibold"
                >
                  privacy@goldsync.gt
                </a>
              </div>
              <div>
                📞 Teléfono: +502 XXXX XXXX
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer Notice */}
        <motion.div
          className="mt-16 p-6 bg-amber-50 border border-amber-200 rounded-lg text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-amber-800 font-opensans">
            ⚠️ <strong>Aviso de Borrador:</strong> Esta es una política de privacidad
            de borrador para referencia. Debe ser revisada por un abogado
            especializado en privacidad de datos antes de ser implementada en
            producción.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PrivacyPolicy
