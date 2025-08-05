import { motion } from 'framer-motion'
import { Leaf, LogIn, UserPlus, Users } from 'lucide-react'

const WelcomeScreen = ({ simulator }) => {
  return (
    <div className="h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col">
      {/* Header */}
      <div className="text-center pt-16 pb-8 px-6">
        <motion.div
          className="bg-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <Leaf className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h1
          className="text-3xl font-bold text-text-primary mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Bienvenido a EcoMap
        </motion.h1>
        
        <motion.p
          className="text-text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Tu plataforma para reportar y resolver problemas ambientales en comunidad
        </motion.p>
      </div>

      {/* Illustration */}
      <motion.div
        className="flex-1 flex items-center justify-center px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative">
          <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="text-6xl">🌍</div>
          </div>
          
          {/* Floating icons */}
          <motion.div
            className="absolute -top-4 -right-4 bg-success text-white p-2 rounded-full text-xl"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ♻️
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 bg-primary text-white p-2 rounded-full text-xl"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            🌱
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 -left-8 bg-secondary text-white p-2 rounded-full text-xl"
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            📍
          </motion.div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="p-6 space-y-4">
        <motion.button
          onClick={() => simulator.navigateToScreen('login')}
          className="w-full bg-primary text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogIn className="w-5 h-5" />
          Iniciar Sesión
        </motion.button>

        <motion.button
          onClick={() => simulator.navigateToScreen('login')}
          className="w-full bg-white border-2 border-primary text-primary py-4 rounded-xl font-semibold flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileTap={{ scale: 0.98 }}
        >
          <UserPlus className="w-5 h-5" />
          Registrarse
        </motion.button>

        <motion.button
          onClick={simulator.loginAnonymous}
          className="w-full bg-gray-100 text-text-secondary py-4 rounded-xl font-medium flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileTap={{ scale: 0.98 }}
        >
          <Users className="w-5 h-5" />
          Continuar como Anónimo
        </motion.button>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-xs text-text-secondary">
          Al continuar, aceptas nuestros términos y condiciones
        </p>
      </motion.div>
    </div>
  )
}

export default WelcomeScreen