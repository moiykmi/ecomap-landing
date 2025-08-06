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

  const renderScreen = () => {
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
        return <WelcomeScreen simulator={simulator} />
    }
  }

  const handleBackdropClick = (e) => {
    onClose()
  }

  const handleModalClick = (e) => {
    e.stopPropagation()
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                🎯 Cómo usar este demo
              </h3>
              <div className="space-y-3 text-gray-700">
                {simulator.currentScreen === 'welcome' && (
                  <div>
                    <p className="mb-3">
                      <strong>Bienvenido al demo interactivo de EcoMap.</strong> Esta es la pantalla de inicio donde los usuarios eligen cómo acceder a la aplicación.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg">
                      💡 <strong>Prueba:</strong> Haz clic en cualquiera de los botones para ver cómo funciona el flujo de acceso.
                    </p>
                  </div>
                )}
                {simulator.currentScreen === 'login' && (
                  <div>
                    <p className="mb-3">
                      <strong>Pantalla de inicio de sesión.</strong> Los usuarios pueden ingresar con su email y contraseña de forma segura.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg">
                      💡 <strong>Prueba:</strong> Escribe cualquier email válido y haz clic en "Iniciar Sesión" para continuar.
                    </p>
                  </div>
                )}
                {simulator.currentScreen === 'dashboard' && (
                  <div>
                    <p className="mb-3">
                      <strong>Mapa principal de EcoMap.</strong> Aquí los usuarios ven todos los reportes ambientales de su área geográfica.
                    </p>
                    <div className="text-sm bg-blue-50 p-3 rounded-lg">
                      <p className="font-medium mb-2">💡 <strong>Características principales:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Marcadores de colores indican diferentes tipos de problemas</li>
                        <li>Filtros para buscar reportes específicos</li>
                        <li>Botón "Reportar" para crear nuevos reportes</li>
                        <li>Navegación inferior para acceder a otras secciones</li>
                      </ul>
                    </div>
                  </div>
                )}
                {simulator.currentScreen === 'report' && (
                  <div>
                    <p className="mb-3">
                      <strong>Formulario de reporte ambiental.</strong> Los usuarios pueden reportar problemas con fotos, ubicación y detalles.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg">
                      💡 <strong>Funcionalidad:</strong> Completa el formulario para simular cómo los ciudadanos reportan problemas ambientales.
                    </p>
                  </div>
                )}
                {simulator.currentScreen === 'reportsList' && (
                  <div>
                    <p className="mb-3">
                      <strong>Lista de reportes comunitarios.</strong> Vista organizada de todos los reportes con filtros y estado de seguimiento.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg">
                      💡 <strong>Beneficio:</strong> Los usuarios pueden seguir el progreso de reportes y ver el impacto de la comunidad.
                    </p>
                  </div>
                )}
                {simulator.currentScreen === 'profile' && (
                  <div>
                    <p className="mb-3">
                      <strong>Perfil del usuario.</strong> Estadísticas personales, historial de reportes y configuración de cuenta.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg">
                      💡 <strong>Gamificación:</strong> Los usuarios ven su impacto ambiental y obtienen reconocimiento por su participación.
                    </p>
                  </div>
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