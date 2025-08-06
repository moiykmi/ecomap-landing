import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Filter, Home, List, User, Search, MapPin } from 'lucide-react'

const DashboardScreen = ({ simulator }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Mock data for demo
  const mockReports = [
    { id: 1, title: 'Basura en parque', type: 'waste', urgency: 'medio', status: 'nuevo', address: 'Parque Central', description: 'Acumulación de basura en área recreativa' },
    { id: 2, title: 'Contaminación río', type: 'water', urgency: 'alto', status: 'en-revision', address: 'Río Mapocho', description: 'Agua contaminada afecta vida acuática' },
    { id: 3, title: 'Humo de fábrica', type: 'air', urgency: 'medio', status: 'resuelto', address: 'Zona Industrial', description: 'Emisiones excesivas de chimenea' },
  ]

  const reportTypes = [
    { id: 'waste', name: 'Residuos', icon: '🗑️', color: '#f97316' },
    { id: 'water', name: 'Agua', icon: '💧', color: '#3b82f6' },
    { id: 'air', name: 'Aire', icon: '🌬️', color: '#8b5cf6' },
    { id: 'noise', name: 'Ruido', icon: '🔊', color: '#ef4444' },
  ]

  const filteredReports = mockReports.filter(report => 
    activeFilter === 'all' || report.type === activeFilter
  )

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'alto': return 'text-red-600'
      case 'medio': return 'text-yellow-600'
      case 'bajo': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'nuevo': return 'bg-blue-100 text-blue-800'
      case 'en-revision': return 'bg-yellow-100 text-yellow-800'
      case 'resuelto': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">EcoMap</h1>
            <p className="text-white/80 text-sm">
              {simulator.user?.name || 'Usuario'}
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors relative"
          >
            <Filter className="w-5 h-5" />
            {activeFilter !== 'all' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-3 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          <input
            type="text"
            placeholder="Buscar por ubicación..."
            className="w-full pl-10 pr-4 py-2 bg-white/20 text-white placeholder-white/60 rounded-lg focus:bg-white/30 outline-none transition-colors"
          />
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'all' ? 'bg-white text-green-600' : 'bg-white/20 text-white'
                }`}
              >
                Todos
              </button>
              {reportTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === type.id ? 'bg-white text-green-600' : 'bg-white/20 text-white'
                  }`}
                >
                  {type.icon} {type.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        {/* Simplified Map View */}
        <div className="h-full bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-green-200 bg-opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Grid pattern to simulate map */}
              <div className="w-full h-full" style={{ 
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>
          
          {/* Mock Map Markers */}
          {filteredReports.map((report, index) => {
            const reportType = reportTypes.find(type => type.id === report.type)
            return (
              <motion.div
                key={report.id}
                className="absolute cursor-pointer"
                style={{
                  top: `${30 + index * 15}%`,
                  left: `${20 + index * 20}%`,
                }}
                whileHover={{ scale: 1.2 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <div 
                  className="w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm relative"
                  style={{ backgroundColor: reportType?.color }}
                >
                  {reportType?.icon}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-current"></div>
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white rounded-lg shadow-lg text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity z-20">
                  <div className="font-semibold text-gray-900">{report.title}</div>
                  <div className="text-gray-600">{report.address}</div>
                  <div className={`font-medium ${getUrgencyColor(report.urgency)}`}>
                    {report.urgency} urgencia
                  </div>
                </div>
              </motion.div>
            )
          })}
          
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
            <h4 className="font-semibold text-sm text-gray-900 mb-2">Tipos de Reporte</h4>
            <div className="space-y-1">
              {reportTypes.map(type => (
                <div key={type.id} className="flex items-center gap-2 text-xs">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: type.color }}
                  ></div>
                  <span className="text-gray-700">{type.icon} {type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Report Button */}
        <motion.button
          onClick={() => simulator.navigateToScreen('report')}
          className="absolute bottom-20 right-4 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Plus className="w-6 h-6" />
        </motion.button>

        {/* Stats Overlay */}
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10">
          <div className="text-xs text-gray-500 mb-1">Reportes visibles</div>
          <div className="text-lg font-bold text-green-600">{filteredReports.length}</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around">
          <button
            onClick={() => simulator.navigateToScreen('dashboard')}
            className="flex flex-col items-center gap-1 p-2 text-green-600"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Mapa</span>
          </button>
          
          <button
            onClick={() => simulator.navigateToScreen('reportsList')}
            className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-green-600 transition-colors"
          >
            <List className="w-5 h-5" />
            <span className="text-xs font-medium">Reportes</span>
          </button>
          
          <button
            onClick={() => simulator.navigateToScreen('profile')}
            className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-green-600 transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen