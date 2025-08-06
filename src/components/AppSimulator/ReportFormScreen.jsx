import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Camera, MapPin, AlertTriangle, Send, CheckCircle } from 'lucide-react'
import { reportTypes } from '../../data/mockReports'

const ReportFormScreen = ({ simulator }) => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    urgency: 'medio',
    anonymous: false
  })
  const [photos, setPhotos] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    simulator.updateReportData({ [field]: value })
  }

  const simulatePhotoCapture = () => {
    const mockPhotos = [
      '/mock-images/photo-capture-1.jpg',
      '/mock-images/photo-capture-2.jpg',
      '/mock-images/photo-capture-3.jpg'
    ]
    const newPhoto = mockPhotos[Math.floor(Math.random() * mockPhotos.length)]
    setPhotos(prev => [...prev, newPhoto])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.type || !formData.description) return

    setIsSubmitting(true)
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      
      setTimeout(() => {
        simulator.submitReport()
      }, 2000)
    }, 2000)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  if (isSuccess) {
    return (
      <div className="h-full bg-white flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="bg-green-500/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Reporte Enviado!
          </h2>
          <p className="text-gray-600 mb-6">
            Tu reporte ha sido enviado exitosamente. Las autoridades serán notificadas y podrás seguir el progreso desde tu perfil.
          </p>
          <div className="bg-green-600/10 rounded-lg p-4">
            <p className="text-sm text-green-600 font-medium">
              ID del reporte: #ECO{Date.now().toString().slice(-6)}
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => simulator.navigateToScreen('dashboard')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">Nuevo Reporte</h1>
        </div>
        <div className="text-sm text-white/80">
          Paso {currentStep} de 3
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 h-1">
        <motion.div
          className="bg-green-600 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / 3) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Type Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                ¿Qué tipo de problema quieres reportar?
              </h2>
              
              <div className="space-y-3">
                {reportTypes.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleInputChange('type', type.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      formData.type === type.id
                        ? 'border-green-600 bg-green-600/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{type.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{type.name}</h3>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-gray-900">
                Describe el problema
              </h2>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Descripción detallada
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe qué está sucediendo, dónde exactamente se encuentra el problema, desde cuándo lo has notado..."
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  rows={4}
                  maxLength={500}
                />
                <div className="text-right text-xs text-gray-600 mt-1">
                  {formData.description.length}/500
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Nivel de urgencia
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'bajo', label: 'Bajo', color: 'bg-green-100 text-green-800', icon: '😌' },
                    { value: 'medio', label: 'Medio', color: 'bg-yellow-100 text-yellow-800', icon: '😐' },
                    { value: 'alto', label: 'Alto', color: 'bg-red-100 text-red-800', icon: '😰' }
                  ].map(urgency => (
                    <button
                      key={urgency.value}
                      type="button"
                      onClick={() => handleInputChange('urgency', urgency.value)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        formData.urgency === urgency.value
                          ? 'border-green-600 bg-green-600/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{urgency.icon}</div>
                      <div className="text-sm font-medium">{urgency.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Photos */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Fotografías (opcional)
                </label>
                
                <div className="grid grid-cols-3 gap-3">
                  {photos.map((photo, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Foto {index + 1}</span>
                      </div>
                    </div>
                  ))}
                  
                  {photos.length < 3 && (
                    <button
                      type="button"
                      onClick={simulatePhotoCapture}
                      className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-green-600 hover:bg-green-600/5 transition-colors"
                    >
                      <Camera className="w-6 h-6 text-gray-400 mb-1" />
                      <span className="text-xs text-gray-400">Tomar foto</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Location & Privacy */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-gray-900">
                Ubicación y privacidad
              </h2>

              {/* Location */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Ubicación actual</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  📍 Av. Principal 1234, Puente Alto, Chile
                </p>
                <p className="text-xs text-gray-600">
                  Coordenadas: -33.4489, -70.6693
                </p>
                <button
                  type="button"
                  className="mt-3 text-green-600 text-sm font-medium hover:text-green-600/80"
                >
                  Cambiar ubicación
                </button>
              </div>

              {/* Privacy */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Opciones de privacidad</h3>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.anonymous}
                    onChange={(e) => handleInputChange('anonymous', e.target.checked)}
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Reporte anónimo</div>
                    <div className="text-sm text-gray-600">
                      Tu nombre no será visible para otros usuarios ni autoridades
                    </div>
                  </div>
                </label>
              </div>

              {/* Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Resumen del reporte</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Tipo:</span>
                    <span className="text-blue-900 font-medium">
                      {reportTypes.find(t => t.id === formData.type)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Urgencia:</span>
                    <span className="text-blue-900 font-medium capitalize">{formData.urgency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Fotos:</span>
                    <span className="text-blue-900 font-medium">{photos.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Anónimo:</span>
                    <span className="text-blue-900 font-medium">{formData.anonymous ? 'Sí' : 'No'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </form>
      </div>

      {/* Footer Navigation */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex justify-between gap-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Anterior
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={currentStep === 1 && !formData.type}
              className="flex-1 py-3 px-4 bg-green-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600/90 transition-colors"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting || !formData.type || !formData.description}
              className="flex-1 py-3 px-4 bg-green-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600/90 transition-colors flex items-center justify-center gap-2"
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar Reporte
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReportFormScreen