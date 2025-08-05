import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Filter, Search, MapPin, Clock, Home, List, User } from 'lucide-react'
import { mockReports, reportTypes } from '../../data/mockReports'

const ReportsListScreen = ({ simulator }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredReports = mockReports.filter(report => {
    const matchesType = activeFilter === 'all' || report.type === activeFilter
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesType && matchesStatus && matchesSearch
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'nuevo': return 'bg-blue-100 text-blue-800'
      case 'en-revision': return 'bg-yellow-100 text-yellow-800'
      case 'resuelto': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'alto': return 'text-error'
      case 'medio': return 'text-warning'
      case 'bajo': return 'text-success'
      default: return 'text-text-secondary'
    }
  }

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return `Hace ${diffInHours}h`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `Hace ${diffInDays}d`
    }
  }

  const getReportTypeInfo = (typeId) => {
    return reportTypes.find(type => type.id === typeId) || {}
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button
              onClick={() => simulator.navigateToScreen('dashboard')}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors mr-3"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Reportes de la Comunidad</h1>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar reportes..."
            className="w-full pl-10 pr-4 py-2 bg-white/20 text-white placeholder-white/60 rounded-lg focus:bg-white/30 outline-none transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'all' ? 'bg-white text-primary' : 'bg-white/20 text-white'
            }`}
          >
            Todos los tipos
          </button>
          {reportTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setActiveFilter(type.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === type.id ? 'bg-white text-primary' : 'bg-white/20 text-white'
              }`}
            >
              {type.icon} {type.name}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          {['all', 'nuevo', 'en-revision', 'resuelto'].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                statusFilter === status ? 'bg-white text-primary' : 'bg-white/20 text-white'
              }`}
            >
              {status === 'all' ? 'Todos' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <p className="text-text-secondary text-sm">
          Mostrando {filteredReports.length} de {mockReports.length} reportes
        </p>
      </div>

      {/* Reports List */}
      <div className="flex-1 overflow-y-auto">
        {filteredReports.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              No se encontraron reportes
            </h3>
            <p className="text-text-secondary">
              Intenta cambiar los filtros o el término de búsqueda
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {filteredReports.map((report, index) => {
              const typeInfo = getReportTypeInfo(report.type)
              
              return (
                <motion.div
                  key={report.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{typeInfo.icon}</div>
                        <div>
                          <h3 className="font-semibold text-text-primary">{report.title}</h3>
                          <p className="text-sm text-text-secondary">{typeInfo.name}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                        <span className={`text-xs font-medium ${getUrgencyColor(report.urgency)}`}>
                          {report.urgency.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                      {report.description}
                    </p>

                    {/* Location & Time */}
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{report.address}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{getTimeAgo(report.createdAt)}</span>
                      </div>
                    </div>

                    {/* Reporter */}
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-secondary">
                          Reportado por: <span className="font-medium">{report.reporter}</span>
                        </span>
                        {report.photos && report.photos.length > 0 && (
                          <div className="flex items-center gap-1 text-xs text-text-secondary">
                            <span>📸</span>
                            <span>{report.photos.length} foto{report.photos.length > 1 ? 's' : ''}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-3 flex gap-2">
                      <button className="flex-1 bg-primary/10 text-primary py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                        Ver detalles
                      </button>
                      <button className="bg-gray-100 text-text-secondary py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        Compartir
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
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
            className="flex flex-col items-center gap-1 p-2 text-primary"
          >
            <List className="w-5 h-5" />
            <span className="text-xs font-medium">Reportes</span>
          </button>
          
          <button
            onClick={() => simulator.navigateToScreen('profile')}
            className="flex flex-col items-center gap-1 p-2 text-text-secondary hover:text-primary transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportsListScreen