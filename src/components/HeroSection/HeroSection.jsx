import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Users, CheckCircle } from 'lucide-react'

const HeroSection = ({ onShowDemo }) => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Transforma tu{' '}
              <span className="text-primary">comunidad</span> en un{' '}
              <span className="text-secondary">agente de cambio</span>{' '}
              ambiental
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              EcoMap conecta ciudadanos, comunidades y autoridades para reportar, 
              monitorear y resolver problemas ambientales de forma colaborativa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                onClick={onShowDemo}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                Probar EcoMap
              </motion.button>
              
              <motion.button
                onClick={onShowDemo}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Geolocalización</p>
                  <p className="text-sm text-text-secondary">Reportes precisos</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Colaborativo</p>
                  <p className="text-sm text-text-secondary">Toda la comunidad</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-success/10 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Resultados</p>
                  <p className="text-sm text-text-secondary">Soluciones reales</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual/Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              {/* Mock App Preview */}
              <div className="aspect-[9/16] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col">
                  {/* Header */}
                  <div className="bg-primary text-white p-4 flex items-center justify-between">
                    <h3 className="font-semibold">EcoMap</h3>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Map Area */}
                  <div className="flex-1 bg-green-50 relative">
                    <div className="absolute inset-4 bg-primary/20 rounded-lg"></div>
                    
                    {/* Mock Markers */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-error rounded-full border-2 border-white animate-pulse"></div>
                    <div className="absolute top-16 right-12 w-4 h-4 bg-warning rounded-full border-2 border-white animate-pulse"></div>
                    <div className="absolute bottom-20 left-12 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  
                  {/* Report Button */}
                  <div className="p-4">
                    <motion.div
                      className="bg-primary text-white py-3 px-6 rounded-full text-center font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Reportar Problema
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-success text-white p-3 rounded-full shadow-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✓
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-secondary text-white p-3 rounded-full shadow-lg"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              📍
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full"></div>
      </div>
    </section>
  )
}

export default HeroSection