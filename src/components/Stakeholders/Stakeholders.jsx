import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { stakeholders } from '../../data/stakeholders'

const Stakeholders = () => {
  const [activeStakeholder, setActiveStakeholder] = useState(0)

  const nextStakeholder = () => {
    setActiveStakeholder((prev) => (prev + 1) % stakeholders.length)
  }

  const prevStakeholder = () => {
    setActiveStakeholder((prev) => (prev - 1 + stakeholders.length) % stakeholders.length)
  }

  const currentStakeholder = stakeholders[activeStakeholder]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            EcoMap para Todos los Actores Ambientales
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Una plataforma diseñada para conectar y empoderar a todos los que buscan 
            un ambiente más limpio y sostenible
          </p>
        </motion.div>

        {/* Stakeholder Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-white rounded-full p-2 shadow-lg">
            {stakeholders.map((stakeholder, index) => (
              <button
                key={stakeholder.id}
                onClick={() => setActiveStakeholder(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === activeStakeholder
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{stakeholder.icon}</span>
                {stakeholder.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStakeholder}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-6">{currentStakeholder.icon}</div>
              
              <h3 className="text-3xl font-bold text-text-primary mb-4">
                {currentStakeholder.title}
              </h3>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                {currentStakeholder.description}
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-text-primary">
                  Beneficios clave:
                </h4>
                <ul className="space-y-3">
                  {currentStakeholder.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={prevStakeholder}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-text-secondary hover:text-primary hover:border-primary transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>
                <button
                  onClick={nextStakeholder}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStakeholder}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 bg-primary text-white p-3 rounded-full">
                  <Quote className="w-6 h-6" />
                </div>

                {/* Testimonial */}
                <div className="pt-6">
                  <p className="text-lg text-text-primary leading-relaxed mb-6 italic">
                    "{currentStakeholder.testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {currentStakeholder.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">
                        {currentStakeholder.testimonial.author}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {currentStakeholder.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full -z-10"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '5+', label: 'Tipos de Usuarios', icon: '👥' },
            { number: '100%', label: 'Compromiso Ambiental', icon: '🌱' },
            { number: '24/7', label: 'Disponibilidad', icon: '⏰' },
            { number: '∞', label: 'Impacto Positivo', icon: '♻️' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stakeholders