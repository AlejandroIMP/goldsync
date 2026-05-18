import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  Zap,
  Smartphone,
  Leaf,
  CheckCircle,
  Shield,
  MapPin,
  Bluetooth,
  Eye,
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    profesion: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Preparado para EmailJS - aquí irá la integración
    console.log('Form data:', formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ nombre: '', email: '', telefono: '', profesion: '' })
      setFormSubmitted(false)
    }, 3000)
  }

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario')
    formElement?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-5"></div>

        <motion.div
          className="section-padding container-wide text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {/* Smartphone mockup illustration placeholder */}
          <motion.div
            className="mb-12 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-80 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-3 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-gold-500 rounded-3xl opacity-20"></div>
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-gold-500" />
              </div>
              {/* Floating device indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                GoldSync NFC
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl  font-bold mb-6 text-gray-900 leading-tight"
            variants={itemVariants}
          >
            CONEXIÓN INSTANTÁNEA,{' '}
            <span className="text-gold-500">IDENTIDAD SIN LÍMITES.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-opensans"
            variants={itemVariants}
          >
            El ecosistema <span className="font-semibold">Phygital</span> que
            revoluciona el networking profesional en Guatemala mediante
            tecnología NFC.{' '}
            <span className="text-gold-500 font-semibold">Just Tap and Go.</span>
          </motion.p>

          <motion.button
            onClick={scrollToForm}
            className="btn-primary text-lg mb-12 inline-block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Unirse a la Lista de Espera (Cupos Limitados)
          </motion.button>

          <motion.div
            className="text-sm text-gray-500 font-opensans"
            variants={itemVariants}
          >
            ⚡ Edición Limitada para Fundadores - Solo 50 unidades disponibles
          </motion.div>
        </motion.div>
      </section>

      {/* PROBLEMA VS SOLUCIÓN */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          className="container-wide"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl  font-bold text-center mb-16"
            variants={itemVariants}
          >
            El Problema & Nuestra Solución
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Problema */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-red-500 mb-4">
                <Eye className="w-12 h-12" />
              </div>
              <h3 className="text-2xl  font-bold mb-4">
                El Problema
              </h3>
              <p className="text-lg text-gray-600 font-opensans mb-4">
                El 88% de las tarjetas de presentación de papel{' '}
                <span className="font-bold text-gray-900">
                  terminan en la basura en menos de una semana.
                </span>
              </p>
              <ul className="space-y-3 text-gray-600 font-opensans">
                <li className="flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Ineficiente y contaminante</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Imposible actualizar información</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Alto costo de reimpresión</span>
                </li>
              </ul>
            </motion.div>

            {/* Solución */}
            <motion.div
              className="bg-gradient-to-br from-gold-500 to-gold-500 p-8 rounded-2xl shadow-lg text-white"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl  font-bold mb-4">
                GoldSync
              </h3>
              <p className="text-lg font-opensans mb-4">
                Un único dispositivo físico que apunta a un{' '}
                <span className="font-bold">perfil digital dinámico</span>,
                actualizable en tiempo real.
              </p>
              <ul className="space-y-3 font-opensans">
                <li className="flex items-start gap-3">
                  <span>✓</span>
                  <span>Actualiza tus redes en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>✓</span>
                  <span>100% sostenible y reutilizable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>✓</span>
                  <span>Profesional y premium</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CARACTERÍSTICAS CLAVE */}
      <section className="section-padding bg-white">
        <motion.div
          className="container-wide"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl  font-bold text-center mb-16"
            variants={itemVariants}
          >
            Características Clave
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Gestión Dinámica',
                description:
                  'Actualiza tus redes (LinkedIn, WhatsApp, Portafolio) desde la Web App sin cambiar el dispositivo.',
              },
              {
                icon: Bluetooth,
                title: 'Modo Offline',
                description:
                  'Si el receptor no tiene internet, el chip transfiere un vCard estático directo a la agenda.',
              },
              {
                icon: Zap,
                title: 'Compatibilidad Universal',
                description:
                  'Funciona en menos de 1 segundo mediante inducción magnética en el 95% de smartphones.',
              },
              {
                icon: Leaf,
                title: 'Sostenibilidad',
                description:
                  'Una sola inversión para evitar la impresión de miles de tarjetas físicas.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-gold-500-500 hover:shadow-xl transition-all"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="text-gold-500 mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl  font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-opensans text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* ESPECIFICACIONES TÉCNICAS */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
        <motion.div
          className="container-wide"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl  font-bold text-center mb-16"
            variants={itemVariants}
          >
            Especificaciones Técnicas
          </motion.h2>

          <motion.div
            className="bg-gray-800 rounded-2xl overflow-hidden border border-gold-500 border-opacity-30"
            variants={itemVariants}
          >
            <table className="w-full">
              <thead className="bg-gold-500 bg-opacity-10 border-b border-gold-500 border-opacity-30">
                <tr>
                  <th className="px-6 py-4 text-left  font-bold text-gold-500">
                    Característica
                  </th>
                  <th className="px-6 py-4 text-left  font-bold text-gold-500">
                    Especificación
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  ['Modelo de Chip', 'NTAG215 (ISO/IEC 14443A)'],
                  ['Memoria de Usuario', '504 Bytes (Para URLs y vCards complejas)'],
                  ['Protección Crítica', 'Capa de Ferrita (Anti-metal)'],
                  ['Velocidad de Lectura', '< 1 segundo (inducción magnética)'],
                  ['Compatibilidad', '95% de smartphones actuales'],
                  ['Vida Útil', '100,000 ciclos de escritura (+10 años sin baterías)'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4  font-semibold">
                      {row[0]}
                    </td>
                    <td className="px-6 py-4 text-gray-300 font-opensans">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            className="mt-12 p-6 bg-gold-500 bg-opacity-10 border border-gold-500 border-opacity-30 rounded-xl"
            variants={itemVariants}
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className=" font-bold mb-2">
                  Protección contra Interferencias
                </h4>
                <p className="text-gray-300 text-sm font-opensans">
                  La capa de Ferrita es indispensable para funcionar sobre
                  carcasas de teléfonos metálicas, garantizando compatibilidad
                  universal incluso en dispositivos premium.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROPUESTA COMERCIAL */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          className="container-wide"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl  font-bold text-center mb-16"
            variants={itemVariants}
          >
            Propuesta Comercial
          </motion.h2>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto border-2 border-gold-500"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-8">
              <span className="inline-block bg-gold-500 text-white px-6 py-2 rounded-full  font-bold text-lg mb-6">
                EDICIÓN LIMITADA PARA FUNDADORES
              </span>
              <p className="text-gray-600 font-opensans text-lg mb-8">
                Solo <span className="font-bold text-2xl text-gold-500">50 unidades</span>{' '}
                disponibles para el lote inicial
              </p>
            </div>

            <div className="bg-gradient-to-r from-gold-500 to-gold-500 text-white rounded-2xl p-8 mb-8 text-center">
              <p className=" text-sm mb-3 opacity-90">
                PRECIO DE LANZAMIENTO
              </p>
              <div className="text-6xl  font-bold mb-3">
                Q45.00
              </div>
              <p className="font-opensans text-lg">
                Pago único • Acceso vitalicio • Sin mensualidades
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Acceso vitalicio al perfil base',
                'Modo offline con vCard estática',
                'Actualizaciones de perfil ilimitadas',
                'Soporte prioritario en lanzamiento',
                'Acceso a comunidad de fundadores',
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  <span className="font-opensans text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={scrollToForm}
              className="btn-primary w-full text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Asegurar mi GoldSync de Lanzamiento
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* FORMULARIO DE CONVERSIÓN */}
      <section id="formulario" className="section-padding bg-gradient-to-br from-gray-900 to-black text-white">
        <motion.div
          className="container-wide max-w-2xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl  font-bold text-center mb-4"
            variants={itemVariants}
          >
            Únete a la Revolución
          </motion.h2>

          <motion.p
            className="text-center text-gray-300 mb-12 font-opensans"
            variants={itemVariants}
          >
            Sé parte de los primeros 50 en tener tu GoldSync. Asegura tu dispositivo
            ahora.
          </motion.p>

          <AnimatePresence>
            {formSubmitted ? (
              <motion.div
                className="bg-green-500 text-white p-8 rounded-2xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl  font-bold mb-2">
                  ¡Gracias!
                </h3>
                <p className="font-opensans">
                  Tu solicitud ha sido registrada. Te contactaremos pronto.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleFormSubmit}
                className="bg-gray-800 p-8 rounded-2xl space-y-6 border border-gold-500 border-opacity-30"
                variants={itemVariants}
              >
                <div>
                  <label className="block  font-semibold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500-500 focus:outline-none transition-colors font-opensans"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block  font-semibold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500-500 focus:outline-none transition-colors font-opensans"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block  font-semibold mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500-500 focus:outline-none transition-colors font-opensans"
                    placeholder="+502 XXXX XXXX"
                  />
                </div>

                <div>
                  <label className="block  font-semibold mb-2">
                    Profesión / Empresa
                  </label>
                  <input
                    type="text"
                    name="profesion"
                    value={formData.profesion}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold-500-500 focus:outline-none transition-colors font-opensans"
                    placeholder="Ej: Software Engineer @ Google"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full text-lg font-bold py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Asegurar mi GoldSync de Lanzamiento
                </motion.button>

                <p className="text-xs text-gray-400 text-center font-opensans">
                  Protegemos tu privacidad. Sin spam. Prometido.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-12">
        <motion.div
          className="container-wide"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div variants={itemVariants}>
              <h4 className=" font-bold text-white mb-4">
                GoldSync
              </h4>
              <p className="text-sm font-opensans">
                Revolucionando el networking profesional en Guatemala mediante
                tecnología NFC innovadora.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className=" font-bold text-white mb-4">
                Enlaces
              </h4>
              <ul className="space-y-2 text-sm font-opensans">
                <li>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className=" font-bold text-white mb-4">
                Síguenos
              </h4>
              <ul className="space-y-2 text-sm font-opensans">
                <li>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    @goldsync_gt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-800 pt-8 text-center text-sm font-opensans"
            variants={itemVariants}
          >
            <p className="mb-2">
              © {new Date().getFullYear()} GoldSync. Chimaltenango, Guatemala.
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Made with ❤️ for Guatemala
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  )
}

export default App
