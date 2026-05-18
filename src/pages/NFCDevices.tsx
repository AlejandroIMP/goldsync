import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, Smartphone, CheckCircle, AlertCircle } from 'lucide-react'

interface NFCDevice {
  id: number
  name: string
  brand: string
  model: string
  nfcCompatibility: 'full' | 'partial' | 'limited'
  os: 'Android' | 'iOS' | 'Both'
  releaseYear: number
  status: 'available' | 'discontinued'
  notes: string
}

const nfcDevices: NFCDevice[] = [
  // Samsung
  { id: 1, name: 'Samsung Galaxy S24', brand: 'Samsung', model: 'S24', nfcCompatibility: 'full', os: 'Android', releaseYear: 2024, status: 'available', notes: 'Compatible total con NFC. Inducción magnética sin problemas.' },
  { id: 2, name: 'Samsung Galaxy S23', brand: 'Samsung', model: 'S23', nfcCompatibility: 'full', os: 'Android', releaseYear: 2023, status: 'available', notes: 'Excelente compatibilidad. Recomendado.' },
  { id: 3, name: 'Samsung Galaxy A14', brand: 'Samsung', model: 'A14', nfcCompatibility: 'partial', os: 'Android', releaseYear: 2022, status: 'available', notes: 'NFC disponible pero requiere activación en configuración.' },
  { id: 4, name: 'Samsung Galaxy Z Fold 5', brand: 'Samsung', model: 'Z Fold 5', nfcCompatibility: 'full', os: 'Android', releaseYear: 2023, status: 'available', notes: 'Compatible con capa de Ferrita incluida.' },

  // Apple
  { id: 5, name: 'iPhone 15 Pro', brand: 'Apple', model: 'iPhone 15 Pro', nfcCompatibility: 'full', os: 'iOS', releaseYear: 2023, status: 'available', notes: 'Compatibilidad total. iOS 17+ requerido.' },
  { id: 6, name: 'iPhone 14', brand: 'Apple', model: 'iPhone 14', nfcCompatibility: 'full', os: 'iOS', releaseYear: 2022, status: 'available', notes: 'Compatible con iOS 16 o superior.' },
  { id: 7, name: 'iPhone 13 Mini', brand: 'Apple', model: 'iPhone 13 Mini', nfcCompatibility: 'full', os: 'iOS', releaseYear: 2021, status: 'available', notes: 'NFC disponible. Requiere iOS 15+.' },
  { id: 8, name: 'iPhone 12', brand: 'Apple', model: 'iPhone 12', nfcCompatibility: 'full', os: 'iOS', releaseYear: 2020, status: 'available', notes: 'Compatibilidad verificada.' },

  // Google Pixel
  { id: 9, name: 'Google Pixel 8', brand: 'Google', model: 'Pixel 8', nfcCompatibility: 'full', os: 'Android', releaseYear: 2023, status: 'available', notes: 'Excelente compatibilidad con NFC.' },
  { id: 10, name: 'Google Pixel 7a', brand: 'Google', model: 'Pixel 7a', nfcCompatibility: 'partial', os: 'Android', releaseYear: 2022, status: 'available', notes: 'NFC disponible pero puede requerir apps específicas.' },
  { id: 11, name: 'Google Pixel 6', brand: 'Google', model: 'Pixel 6', nfcCompatibility: 'full', os: 'Android', releaseYear: 2021, status: 'available', notes: 'Compatible con Android 12+.' },

  // OnePlus
  { id: 12, name: 'OnePlus 12', brand: 'OnePlus', model: '12', nfcCompatibility: 'full', os: 'Android', releaseYear: 2024, status: 'available', notes: 'Compatible total. OxygenOS 14+.' },
  { id: 13, name: 'OnePlus 11', brand: 'OnePlus', model: '11', nfcCompatibility: 'partial', os: 'Android', releaseYear: 2023, status: 'available', notes: 'NFC disponible en versión global.' },

  // Xiaomi
  { id: 14, name: 'Xiaomi 14', brand: 'Xiaomi', model: '14', nfcCompatibility: 'full', os: 'Android', releaseYear: 2023, status: 'available', notes: 'Compatible con MIUI 14+.' },
  { id: 15, name: 'Xiaomi Redmi Note 12', brand: 'Xiaomi', model: 'Redmi Note 12', nfcCompatibility: 'limited', os: 'Android', releaseYear: 2022, status: 'available', notes: 'NFC solo en variantes específicas.' },

  // Otros
  { id: 16, name: 'Motorola Edge 40', brand: 'Motorola', model: 'Edge 40', nfcCompatibility: 'full', os: 'Android', releaseYear: 2023, status: 'available', notes: 'Compatible con Android 13+.' },
  { id: 17, name: 'Sony Xperia 1 V', brand: 'Sony', model: 'Xperia 1 V', nfcCompatibility: 'full', os: 'Android', releaseYear: 2023, status: 'available', notes: 'Compatibilidad verificada.' },
]

export default function NFCDevices() {
  const [searchTerm, setSearchTerm] = useState('')
  const [osFilter, setOsFilter] = useState<'All' | 'Android' | 'iOS' | 'Both'>('All')
  const [compatibilityFilter, setCompatibilityFilter] = useState<'all' | 'full' | 'partial' | 'limited'>('all')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Filtrar dispositivos
  const filteredDevices = nfcDevices.filter((device) => {
    const matchesSearch =
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.model.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesOS =
      osFilter === 'All' || device.os === osFilter || (osFilter === 'Both' && device.os === 'Both')

    const matchesCompatibility =
      compatibilityFilter === 'all' || device.nfcCompatibility === compatibilityFilter

    return matchesSearch && matchesOS && matchesCompatibility
  })

  const getCompatibilityColor = (compatibility: string) => {
    switch (compatibility) {
      case 'full':
        return 'bg-green-500 text-white'
      case 'partial':
        return 'bg-yellow-500 text-white'
      case 'limited':
        return 'bg-orange-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const getCompatibilityText = (compatibility: string) => {
    switch (compatibility) {
      case 'full':
        return 'Compatible Total'
      case 'partial':
        return 'Parcialmente Compatible'
      case 'limited':
        return 'Compatibilidad Limitada'
      default:
        return 'Desconocido'
    }
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
            Dispositivos NFC Compatibles
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

      {/* Main Content */}
      <motion.div
        className="section-padding container-wide"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Descripción */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">
            Busca tu Dispositivo Compatible
          </h2>
          <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
            Verifica si tu smartphone es compatible con la tecnología NFC de GoldSync.
            Contamos con soporte para más de 500 modelos de dispositivos.
          </p>
        </motion.div>

        {/* Buscador y Filtros */}
        <motion.div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-200" variants={itemVariants}>
          {/* Buscador */}
          <div className="mb-8">
            <label className="block text-lg font-bold mb-3">Buscar Dispositivo</label>
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Busca por marca, modelo o nombre (ej: iPhone, Samsung Galaxy)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition-colors font-opensans"
              />
            </div>
          </div>

          {/* Filtros */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Filtro SO */}
            <div>
              <label className="block font-bold mb-3">Sistema Operativo</label>
              <div className="space-y-2">
                {(['All', 'Android', 'iOS', 'Both'] as const).map((os) => (
                  <label key={os} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="os"
                      value={os}
                      checked={osFilter === os}
                      onChange={(e) => setOsFilter(e.target.value as typeof osFilter)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="font-opensans">{os === 'All' ? 'Todos' : os}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro Compatibilidad */}
            <div>
              <label className="block font-bold mb-3">Nivel de Compatibilidad</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="compatibility"
                    value="all"
                    checked={compatibilityFilter === 'all'}
                    onChange={(e) => setCompatibilityFilter(e.target.value as typeof compatibilityFilter)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="font-opensans">Todos</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="compatibility"
                    value="full"
                    checked={compatibilityFilter === 'full'}
                    onChange={(e) => setCompatibilityFilter(e.target.value as typeof compatibilityFilter)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="font-opensans">
                    <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">✓</span>
                    Compatible Total
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="compatibility"
                    value="partial"
                    checked={compatibilityFilter === 'partial'}
                    onChange={(e) => setCompatibilityFilter(e.target.value as typeof compatibilityFilter)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="font-opensans">
                    <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">⚠</span>
                    Parcialmente Compatible
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="compatibility"
                    value="limited"
                    checked={compatibilityFilter === 'limited'}
                    onChange={(e) => setCompatibilityFilter(e.target.value as typeof compatibilityFilter)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="font-opensans">
                    <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">!</span>
                    Compatibilidad Limitada
                  </span>
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resultados */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-6">
            Resultados: <span className="text-gold-500">{filteredDevices.length}</span> dispositivos encontrados
          </h3>

          {filteredDevices.length === 0 ? (
            <motion.div
              className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AlertCircle className="w-12 h-12 text-amber-600 mx-auto mb-3" />
              <p className="text-lg font-opensans text-amber-900">
                No encontramos dispositivos que coincidan con tus criterios de búsqueda.
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {filteredDevices.map((device) => (
                <motion.div
                  key={device.id}
                  className="bg-white rounded-xl border border-gray-200 hover:border-gold-500 shadow-md hover:shadow-xl transition-all p-6"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <Smartphone className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg">{device.name}</h4>
                        <p className="text-sm text-gray-500 font-opensans">{device.model}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {/* Compatibilidad */}
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getCompatibilityColor(device.nfcCompatibility)}`}>
                        {getCompatibilityText(device.nfcCompatibility)}
                      </span>
                    </div>

                    {/* SO */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">SO:</span>
                      <span className="text-sm text-gray-600 font-opensans">{device.os}</span>
                    </div>

                    {/* Año de lanzamiento */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">Lanzado:</span>
                      <span className="text-sm text-gray-600 font-opensans">{device.releaseYear}</span>
                    </div>

                    {/* Estado */}
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 font-opensans">
                        {device.status === 'available' ? 'Disponible' : 'Descontinuado'}
                      </span>
                    </div>
                  </div>

                  {/* Notas */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600 font-opensans italic">{device.notes}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Info Adicional */}
        <motion.div className="mt-16 bg-gold-500 bg-opacity-10 border border-gold-500 border-opacity-30 rounded-lg p-8" variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-4">¿No ves tu dispositivo?</h3>
          <ul className="space-y-2 text-gray-700 font-opensans ml-6">
            <li>• Esta lista se actualiza constantemente con nuevos modelos</li>
            <li>• Contamos con soporte para más de 500 dispositivos NFC</li>
            <li>• Si tu dispositivo no está en la lista pero tiene NFC, probablemente funcione</li>
            <li>• Contáctanos en <span className="text-gold-500 font-semibold">support@goldsync.gt</span> para consultas específicas</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 mt-16 border-t border-gray-800">
        <div className="section-padding container-wide text-center text-sm font-opensans">
          <p className="mb-2">
            © {new Date().getFullYear()} GoldSync. Chimaltenango, Guatemala.
          </p>
          <p>
            <Link to="/" className="text-gold-500 hover:text-gold-600 transition-colors">
              Volver al Inicio
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
