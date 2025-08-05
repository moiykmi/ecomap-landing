import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Settings, Bell, Shield, HelpCircle, LogOut, Home, List, User, Award, TrendingUp, MapPin } from 'lucide-react'

const ProfileScreen = ({ simulator }) => {
  const [showSettings, setShowSettings] = useState(false)

  const userStats = {
    reportsSubmitted: 7,
    reportsResolved: 5,
    communityRank: 'Eco-Activista',
    pointsEarned: 340,
    badgesEarned: 3
  }

  const recentActivity = [
    { id: 1, type: 'report', title: 'Reporte de microbasural resuelto', date: '2025-08-01', status: 'resuelto' },
    { id: 2, type: 'badge', title: 'Nuevo logro: Primera resolución', date: '2025-07-30', status: 'nuevo' },
    { id: 3, type: 'report', title: 'Reporte de contaminación del aire', date: '2025-07-28', status: 'en-revision' }
  ]

  const badges = [
    { id: 1, name: 'Primer Reporte', icon: '🏆', earned: true, description: 'Enviaste tu primer reporte' },
    { id: 2, name: 'Eco-Guardián', icon: '🛡️', earned: true, description: '5 reportes enviados' },
    { id: 3, name: 'Solucionador', icon: '✅', earned: true, description: '3 reportes resueltos' },
    { id: 4, name: 'Comunidad Activa', icon: '👥', earned: false, description: '10 reportes en comunidad' },
    { id: 5, name: 'Eco-Líder', icon: '⭐', earned: false, description: '25 reportes enviados' }
  ]

  const handleLogout = () => {
    simulator.resetSimulator()
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => simulator.navigateToScreen('dashboard')}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors mr-3"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Mi Perfil</h1>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* User Info */}
        <div className="bg-white p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl text-primary font-bold">
                {simulator.user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-primary">
                {simulator.user?.name || 'Usuario Demo'}
              </h2>
              <p className="text-text-secondary">{simulator.user?.email || 'demo@ecomap.cl'}</p>
              <div className="flex items-center gap-2 mt-1">
                <Award className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-warning">{userStats.communityRank}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Mis Estadísticas</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              className="bg-white p-4 rounded-xl shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">{userStats.reportsSubmitted}</div>
                  <div className="text-sm text-text-secondary">Reportes enviados</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-xl shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">{userStats.reportsResolved}</div>
                  <div className="text-sm text-text-secondary">Casos resueltos</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-xl shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">{userStats.pointsEarned}</div>
                  <div className="text-sm text-text-secondary">Puntos Eco</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-xl shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-warning/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">{userStats.badgesEarned}</div>
                  <div className="text-sm text-text-secondary">Logros obtenidos</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Badges */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Mis Logros</h3>
            <div className="grid grid-cols-5 gap-3">
              {badges.map(badge => (
                <motion.div
                  key={badge.id}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center p-2 ${
                    badge.earned ? 'bg-white shadow-sm' : 'bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  title={badge.description}
                >
                  <div className={`text-2xl mb-1 ${badge.earned ? '' : 'grayscale opacity-50'}`}>
                    {badge.icon}
                  </div>
                  <div className={`text-xs text-center font-medium ${
                    badge.earned ? 'text-text-primary' : 'text-text-secondary'
                  }`}>
                    {badge.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Actividad Reciente</h3>
            <div className="space-y-3">
              {recentActivity.map(activity => (
                <div key={activity.id} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-text-primary">{activity.title}</p>
                      <p className="text-sm text-text-secondary">{activity.date}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'resuelto' ? 'bg-green-100 text-green-800' :
                      activity.status === 'nuevo' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings Menu */}
          <div className="space-y-3">
            <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <Bell className="w-5 h-5 text-text-secondary" />
              <span className="text-text-primary">Notificaciones</span>
            </button>

            <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <Shield className="w-5 h-5 text-text-secondary" />
              <span className="text-text-primary">Privacidad y Seguridad</span>
            </button>

            <button className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <HelpCircle className="w-5 h-5 text-text-secondary" />
              <span className="text-text-primary">Ayuda y Soporte</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 hover:bg-red-50 transition-colors text-error"
            >
              <LogOut className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around">
          <button
            onClick={() => simulator.navigateToScreen('dashboard')}
            className="flex flex-col items-center gap-1 p-2 text-text-secondary hover:text-primary transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Mapa</span>
          </button>
          
          <button
            onClick={() => simulator.navigateToScreen('reportsList')}
            className="flex flex-col items-center gap-1 p-2 text-text-secondary hover:text-primary transition-colors"
          >
            <List className="w-5 h-5" />
            <span className="text-xs font-medium">Reportes</span>
          </button>
          
          <button
            onClick={() => simulator.navigateToScreen('profile')}
            className="flex flex-col items-center gap-1 p-2 text-primary"
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen