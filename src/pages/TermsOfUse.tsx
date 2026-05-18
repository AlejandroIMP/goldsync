import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfUse() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="section-padding container-wide">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex items-center justify-between mb-6"
          >
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.webp" alt="GoldSync" className="w-14 h-auto object-contain" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Términos de Uso
            </h1>
            <p className="text-gray-400 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="section-padding container-wide max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Introducción */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            1. Aceptación de Términos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Al acceder y utilizar GoldSync ("el Servicio"), usted acepta estar
            legalmente vinculado por estos Términos de Uso. Si no acepta estos
            términos, no debe usar GoldSync. Nos reservamos el derecho de
            modificar estos términos en cualquier momento, y el uso continuado
            del Servicio constituye la aceptación de los cambios.
          </p>
        </motion.section>

        {/* Descripción del Servicio */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            2. Descripción del Servicio
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            GoldSync es un ecosistema "Phygital" que combina tecnología NFC con
            una plataforma digital para facilitar el networking profesional en
            Guatemala. El servicio permite a los usuarios crear y mantener perfiles
            digitales dinámicos accesibles a través de dispositivos físicos NFC.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> GoldSync se encuentra en fase MVP (Producto
              Mínimo Viable). El servicio está en desarrollo y puede estar sujeto
              a cambios, mejoras o limitaciones temporales.
            </p>
          </div>
        </motion.section>

        {/* Elegibilidad */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            3. Elegibilidad
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Para usar GoldSync, usted declara que:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Tiene al menos 18 años de edad</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Es un residente legal de Guatemala o una jurisdicción permitida</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Tiene autoridad legal para celebrar contratos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>No está prohibido usar el Servicio en su jurisdicción</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>No ha sido previamente suspendido o expulsado de GoldSync</span>
            </li>
          </ul>
        </motion.section>

        {/* Registro de Cuenta */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            4. Registro de Cuenta y Seguridad
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Para acceder a ciertas características de GoldSync, debe crear una
            cuenta. Usted se compromete a:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Proporcionar información precisa, completa y actual</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Mantener la confidencialidad de su contraseña</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Ser responsable de todas las actividades en su cuenta</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Notificarnos inmediatamente de acceso no autorizado</span>
            </li>
          </ul>
        </motion.section>

        {/* Contenido del Usuario */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            5. Contenido del Usuario
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Usted es el único responsable del contenido que carga, publica o
            transmite a través de GoldSync. Al publicar contenido, otorga a
            GoldSync una licencia mundial, no exclusiva, perpetua y libre de
            regalías para usar, reproducir, modificar y distribuir ese contenido.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Se compromete a no publicar contenido que:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Sea ilegal, difamatorio o discriminatorio</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Infrinja derechos de terceros</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Contenga malware o código malicioso</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Sea spam o contenido engañoso</span>
            </li>
          </ul>
        </motion.section>

        {/* Propiedad Intelectual */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            6. Propiedad Intelectual
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            GoldSync, incluyendo su contenido, características, funcionalidad y
            diseño, es propiedad de GoldSync o sus proveedores y está protegido
            por leyes internacionales de derechos de autor y propiedad intelectual.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Usted no puede reproducir, distribuir, transmitir, mostrar, realizar,
            reproducir, publicar, licenciar, crear obras derivadas o vender el
            contenido de GoldSync sin autorización explícita por escrito.
          </p>
        </motion.section>

        {/* Limitación de Responsabilidad */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            7. Limitación de Responsabilidad
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, GOLDSYNC NO SERÁ RESPONSABLE
            POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O
            PUNITIVOS DERIVADOS DEL USO O IMPOSIBILIDAD DE USAR EL SERVICIO.
          </p>
          <p className="text-gray-600 leading-relaxed">
            GoldSync se proporciona "TAL CUAL" sin garantías de ningún tipo, ya
            sean expresas o implícitas. No garantizamos que el Servicio sea
            ininterrumpido, seguro o libre de errores.
          </p>
        </motion.section>

        {/* Indemnización */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            8. Indemnización
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Usted acepta indemnizar, defender y eximir de responsabilidad a
            GoldSync, sus directores, empleados y agentes de cualquier reclamo,
            demanda, daño, pérdida o gasto (incluyendo honorarios de abogados)
            que surja de:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Su uso del Servicio</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Su violación de estos Términos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Su violación de derechos de terceros</span>
            </li>
          </ul>
        </motion.section>

        {/* Suspensión */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            9. Suspensión y Terminación
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            GoldSync se reserva el derecho de suspender o terminar su acceso al
            Servicio en cualquier momento, sin previo aviso, por:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Violación de estos Términos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Conducta abusiva o acoso</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Actividad ilegal</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">•</span>
              <span>Incumplimiento de pago</span>
            </li>
          </ul>
        </motion.section>

        {/* Cookies y Rastreo */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            10. Cookies y Tecnologías de Rastreo
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            GoldSync utiliza cookies y tecnologías similares para mejorar su
            experiencia. Al usar el Servicio, usted consiente el uso de cookies
            de conformidad con nuestra Política de Privacidad.
          </p>
        </motion.section>

        {/* Cambios en los Términos */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            11. Modificaciones de los Términos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            GoldSync se reserva el derecho de modificar estos Términos en cualquier
            momento. Los cambios serán efectivos inmediatamente después de la
            publicación. Su uso continuado del Servicio constituye la aceptación
            de los términos modificados.
          </p>
        </motion.section>

        {/* Ley Aplicable */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            12. Ley Aplicable y Jurisdicción
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Estos Términos se rigen por las leyes de la República de Guatemala.
            Cualquier disputa relacionada con GoldSync será resuelta exclusivamente
            en los tribunales ubicados en Chimaltenango, Guatemala, y usted acepta
            la jurisdicción y competencia de tales tribunales.
          </p>
        </motion.section>

        {/* Contacto */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            13. Contacto
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Si tiene preguntas sobre estos Términos de Uso, por favor contáctenos en:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-900 font-semibold mb-2">GoldSync</p>
            <p className="text-gray-600">Chimaltenango, Guatemala</p>
            <p className="text-gray-600">Email: info@goldsync.gt</p>
            <p className="text-gray-600">Teléfono: +502 XXXX XXXX</p>
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.section variants={itemVariants} className="pt-8 border-t border-gray-200">
          <div className="bg-gold-500 bg-opacity-10 border border-gold-500 border-opacity-30 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Aviso Legal:</strong> Este documento es un borrador y puede
              estar sujeto a cambios. No constituye asesoramiento legal. Se
              recomienda consultar con un abogado para términos específicos según
              su jurisdicción.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
