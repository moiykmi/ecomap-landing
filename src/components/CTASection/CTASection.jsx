import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Download, Mail, ArrowRight, CheckCircle } from 'lucide-react'

const CTASection = ({ onShowDemo }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showAppModal, setShowAppModal] = useState(false)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      // Simulate subscription
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  const handleAppDownload = () => {
    setShowAppModal(true)
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para transformar tu comunidad?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Únete a miles de personas que ya están usando EcoMap para crear 
              un impacto ambiental positivo en sus comunidades.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={onShowDemo}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                Probar Demo Interactivo
              </motion.button>
              
              <motion.button
                onClick={handleAppDownload}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Descargar App
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">5★</div>
                <div className="text-sm text-gray-600">Valoración</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Newsletter & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Newsletter */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mantente Informado
              </h3>
              <p className="text-gray-600 mb-6">
                Recibe actualizaciones sobre EcoMap y consejos para un impacto ambiental positivo
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Suscribirse
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                  <p className="text-emerald-600 font-semibold">¡Suscripción exitosa!</p>
                  <p className="text-sm text-gray-600">Te mantendremos informado sobre EcoMap</p>
                </motion.div>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Tienes Preguntas?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">hola@ecomap.cl</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-lg">🌐</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Sitio Web</div>
                    <div className="text-gray-600">www.ecomap.cl</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <span className="text-lg">💬</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Soporte</div>
                    <div className="text-gray-600">Lun-Vie 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">Síguenos en redes sociales</p>
              <div className="flex justify-center gap-4">
                {['📘', '📷', '🐦', '💼'].map((emoji, index) => (
                  <motion.button
                    key={index}
                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {emoji}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* App Download Modal */}
        {showAppModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowAppModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¡Próximamente!
                </h3>
                <p className="text-gray-600 mb-6">
                  EcoMap estará disponible muy pronto en App Store y Google Play. 
                  Mientras tanto, ¡prueba nuestro demo interactivo!
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAppModal(false)}
                    className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => { setShowAppModal(false); onShowDemo(); }}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Ver Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default CTASection