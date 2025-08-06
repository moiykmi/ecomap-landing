import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Plus, Filter, Home, List, User, Search } from 'lucide-react'
import { mockReports, reportTypes } from '../../data/mockReports'
import L from 'leaflet'

// Fix for default markers in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  })
}

const DashboardScreen = ({ simulator }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filteredReports = mockReports.filter(report => 
    activeFilter === 'all' || report.type === activeFilter
  )

  const getMarkerIcon = (report) => {
    const reportType = reportTypes.find(type => type.id === report.type)
    return createCustomIcon(reportType?.color || '#2E7D32')
  }

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
        <MapContainer
          center={[-33.4489, -70.6693]}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          
          {filteredReports.map(report => (
            <Marker
              key={report.id}
              position={[report.location.lat, report.location.lng]}
              icon={getMarkerIcon(report)}
            >
              <Popup>
                <div className="min-w-[200px] p-2">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {report.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${getUrgencyColor(report.urgency)}`}>
                      Urgencia: {report.urgency}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    📍 {report.address}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

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