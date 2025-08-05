import { motion } from 'framer-motion'
import { MapPin, Users, Shield, Zap, BarChart3, Bell } from 'lucide-react'

const Features = () => {
  const features = [
    {
      id: 'geolocation',
      icon: MapPin,
      title: 'Geolocalización Precisa',
      description: 'Reporta problemas ambientales con ubicación exacta usando GPS integrado.',
      benefits: [
        'Ubicación automática con GPS',
        'Mapas interactivos en tiempo real',
        'Área de cobertura amplia',
        'Precisión hasta 5 metros'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 'community',
      icon: Users,
      title: 'Comunidad Colaborativa', 
      description: 'Conecta con tu comunidad para resolver problemas ambientales juntos.',
      benefits: [
        'Red de usuarios comprometidos',
        'Reportes colaborativos',
        'Seguimiento comunitario',
        'Notificaciones de área'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 'privacy',
      icon: Shield,
      title: 'Anonimato Garantizado',
      description: 'Protección total de tu identidad si decides reportar de forma anónima.',
      benefits: [
        'Reportes completamente anónimos',
        'Datos personales protegidos',
        'Cumplimiento de privacidad',
        'Control total de información'
      ],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      id: 'realtime',
      icon: Zap,
      title: 'Respuesta en Tiempo Real',
      description: 'Notificaciones instantáneas sobre el progreso de tus reportes.',
      benefits: [
        'Actualizaciones inmediatas',
        'Notificaciones push',
        'Estados de progreso claros',
        'Comunicación bidireccional'
      ],
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Panel para Autoridades',
      description: 'Dashboard completo para municipalidades y organizaciones.',
      benefits: [
        'Métricas detalladas de reportes',
        'Análisis de tendencias',
        'Priorización automática',
        'Reportes de gestión'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Alertas Inteligentes',
      description: 'Sistema de notificaciones personalizado según tus intereses.',
      benefits: [
        'Alertas por zona geográfica',
        'Filtros por tipo de problema',
        'Frecuencia personalizable',
        'Resumen semanal/mensual'
      ],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ]

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades que Hacen la Diferencia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EcoMap combina tecnología avanzada con simplicidad de uso para crear 
            la plataforma de reporte ambiental más efectiva
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 h-full">
                {/* Icon */}
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para ver EcoMap en acción?
            </h3>
            <p className="text-gray-600 mb-6">
              Experimenta todas estas funcionalidades en nuestro demo interactivo
            </p>
            <motion.button
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Probar Demo Interactivo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features