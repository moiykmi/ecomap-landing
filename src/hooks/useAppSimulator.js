import { useState, useCallback } from 'react'

const useAppSimulator = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome')
  const [user, setUser] = useState(null)
  const [reportData, setReportData] = useState({
    type: '',
    description: '',
    urgency: 'medio',
    photos: [],
    location: null,
    anonymous: false
  })
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    urgency: 'all'
  })

  const screens = {
    welcome: 'Bienvenida',
    login: 'Iniciar Sesión',
    register: 'Registro',
    dashboard: 'Mapa Principal',
    report: 'Nuevo Reporte',
    reportsList: 'Lista de Reportes',
    profile: 'Perfil',
    reportDetail: 'Detalle del Reporte'
  }

  const navigateToScreen = useCallback((screen) => {
    setCurrentScreen(screen)
  }, [])

  const loginUser = useCallback((userData) => {
    setUser(userData)
    setCurrentScreen('dashboard')
  }, [])

  const loginAnonymous = useCallback(() => {
    setUser({ name: 'Usuario Anónimo', anonymous: true })
    setCurrentScreen('dashboard')
  }, [])

  const updateReportData = useCallback((data) => {
    setReportData(prev => ({ ...prev, ...data }))
  }, [])

  const submitReport = useCallback(() => {
    const newReport = {
      id: Date.now(),
      ...reportData,
      status: 'nuevo',
      createdAt: new Date().toISOString(),
      reporter: user?.anonymous ? 'Anónimo' : user?.name || 'Usuario'
    }
    
    // Simulate API call
    setTimeout(() => {
      setCurrentScreen('dashboard')
      setReportData({
        type: '',
        description: '',
        urgency: 'medio',
        photos: [],
        location: null,
        anonymous: false
      })
    }, 1000)
    
    return newReport
  }, [reportData, user])

  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }, [])

  const resetSimulator = useCallback(() => {
    setCurrentScreen('welcome')
    setUser(null)
    setReportData({
      type: '',
      description: '',
      urgency: 'medio',
      photos: [],
      location: null,
      anonymous: false
    })
    setFilters({
      type: 'all',
      status: 'all',
      urgency: 'all'
    })
  }, [])

  return {
    currentScreen,
    screens,
    user,
    reportData,
    filters,
    navigateToScreen,
    loginUser,
    loginAnonymous,
    updateReportData,
    submitReport,
    updateFilters,
    resetSimulator
  }
}

export default useAppSimulator