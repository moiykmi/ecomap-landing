import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react'

const LoginScreen = ({ simulator }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!email || !password) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      simulator.loginUser({
        name: email.split('@')[0],
        email: email,
        anonymous: false
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center">
        <button
          onClick={() => simulator.navigateToScreen('welcome')}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold">Iniciar Sesión</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Bienvenido de vuelta!
            </h2>
            <p className="text-gray-600">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Tu contraseña"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>💡 Demo:</strong> Usa cualquier email y contraseña para simular el inicio de sesión
              </p>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Iniciando sesión...
                </div>
              ) : (
                'Iniciar Sesión'
              )}
            </motion.button>

            {/* Forgot Password */}
            <div className="text-center">
              <button
                type="button"
                className="text-green-600 hover:text-green-600/80 text-sm font-medium"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-3">
            ¿No tienes cuenta?
          </p>
          <button
            onClick={() => simulator.navigateToScreen('welcome')}
            className="text-green-600 font-medium hover:text-green-600/80"
          >
            Registrarse aquí
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen