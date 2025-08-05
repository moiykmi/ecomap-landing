import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { mockStats } from '../../data/mockReports'

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const Stats = () => {
  const stats = [
    {
      id: 'reports',
      value: mockStats.totalReports,
      label: 'Reportes Realizados',
      icon: '📝',
      color: 'text-green-600'
    },
    {
      id: 'communities',
      value: mockStats.activeCommunities,
      label: 'Comunidades Activas',
      icon: '🏘️',
      color: 'text-blue-600'
    },
    {
      id: 'resolved',
      value: mockStats.resolvedPercentage,
      label: 'Casos Resueltos',
      suffix: '%',
      icon: '✅',
      color: 'text-emerald-600'
    },
    {
      id: 'response',
      value: mockStats.averageResponseTime,
      label: 'Tiempo Promedio de Respuesta',
      suffix: 'h',
      icon: '⚡',
      color: 'text-amber-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Impacto Real en Números
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EcoMap ya está generando cambios positivos en comunidades de todo Chile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix || ''} 
                />
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué estos números importan?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Participación Ciudadana</h4>
                <p className="text-gray-600">
                  Cada reporte representa un ciudadano comprometido con su entorno
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Eficiencia Municipal</h4>
                <p className="text-gray-600">
                  Respuesta promedio 5x más rápida que métodos tradicionales
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-600 mb-2">Impacto Ambiental</h4>
                <p className="text-gray-600">
                  Problemas resueltos antes de convertirse en crisis mayores
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats