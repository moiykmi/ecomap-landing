import { motion, AnimatePresence } from 'framer-motion'
import { X, RotateCcw, Smartphone } from 'lucide-react'
import useAppSimulator from '../../hooks/useAppSimulator'
import MobileFrame from './MobileFrame'
import WelcomeScreen from './WelcomeScreen'
import LoginScreen from './LoginScreen'
import DashboardScreen from './DashboardScreen'
import ReportFormScreen from './ReportFormScreen'
import ReportsListScreen from './ReportsListScreen'
import ProfileScreen from './ProfileScreen'

const AppSimulator = ({ onClose }) => {
  const simulator = useAppSimulator()

  // Debug logging
  console.log('🎮 AppSimulator rendering with screen:', simulator.currentScreen)

  const renderScreen = () => {
    try {
      switch (simulator.currentScreen) {
        case 'welcome':
          return <WelcomeScreen simulator={simulator} />
        case 'login':
          return <LoginScreen simulator={simulator} />
        case 'dashboard':
          return <DashboardScreen simulator={simulator} />
        case 'report':
          return <ReportFormScreen simulator={simulator} />
        case 'reportsList':
          return <ReportsListScreen simulator={simulator} />
        case 'profile':
          return <ProfileScreen simulator={simulator} />
        default:
          console.log('⚠️ Using default WelcomeScreen for:', simulator.currentScreen)
          return <WelcomeScreen simulator={simulator} />
      }
    } catch (error) {
      console.error('❌ Error rendering screen:', error)
      return <div className="p-4 text-red-600">Error loading screen: {error.message}</div>
    }
  }

  const handleBackdropClick = (e) => {
    console.log('🖱️ Backdrop clicked - closing simulator')
    onClose()
  }

  const handleModalClick = (e) => {
    e.stopPropagation()
    console.log('🖱️ Modal content clicked - keeping open')
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ 
        zIndex: 10000,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={handleModalClick}
      >
        {/* Header */}
        <div className="bg-green-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Demo Interactivo EcoMap</h2>
              <p className="text-white/80">
                Pantalla actual: {simulator.screens[simulator.currentScreen]}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={simulator.resetSimulator}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              title="Reiniciar Demo"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              title="Cerrar Demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-gray-50">
          <div className="flex justify-center">
            <MobileFrame>
              <AnimatePresence mode="wait">
                <motion.div
                  key={simulator.currentScreen}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {renderScreen()}
                </motion.div>
              </AnimatePresence>
            </MobileFrame>
          </div>

          {/* Instructions */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                💡 Instrucciones del Demo
              </h3>
              <div className="space-y-3 text-text-secondary">
                {simulator.currentScreen === 'welcome' && (
                  <p>
                    <strong>Paso 1:</strong> Elige cómo quieres acceder a EcoMap. 
                    Puedes iniciar sesión, registrarte o continuar como usuario anónimo.
                  </p>
                )}
                {simulator.currentScreen === 'login' && (
                  <p>
                    <strong>Paso 2:</strong> Simula el inicio de sesión con cualquier email. 
                    En la app real, aquí validaríamos tus credenciales.
                  </p>
                )}
                {simulator.currentScreen === 'dashboard' && (
                  <div>
                    <p className="mb-2">
                      <strong>Paso 3:</strong> Explora el mapa principal de EcoMap:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Haz clic en los marcadores para ver reportes existentes</li>
                      <li>Usa los filtros para mostrar tipos específicos de problemas</li>
                      <li>Presiona "Reportar" para crear un nuevo reporte</li>
                      <li>Navega usando los tabs inferiores</li>
                    </ul>
                  </div>
                )}
                {simulator.currentScreen === 'report' && (
                  <p>
                    <strong>Paso 4:</strong> Crea un reporte de problema ambiental. 
                    Completa el formulario simulando una situación real.
                  </p>
                )}
                {simulator.currentScreen === 'reportsList' && (
                  <p>
                    <strong>Explorar:</strong> Ve todos los reportes de la comunidad. 
                    Filtra por tipo, estado o urgencia para encontrar información específica.
                  </p>
                )}
                {simulator.currentScreen === 'profile' && (
                  <p>
                    <strong>Perfil:</strong> Ve tu actividad en EcoMap, estadísticas 
                    personales y configura tus preferencias.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AppSimulator