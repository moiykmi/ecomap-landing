import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AppSimulator from './components/AppSimulator/AppSimulator'
import Features from './components/Features/Features'
import Stakeholders from './components/Stakeholders/Stakeholders'
import Stats from './components/Stats/Stats'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer'
import DebugPanel from './components/DebugPanel'

function App() {
  const [showSimulator, setShowSimulator] = useState(false)
  const [debugInfo, setDebugInfo] = useState('')

  const handleShowDemo = () => {
    try {
      console.log('🚀 Demo button clicked!')
      console.log('Current showSimulator state:', showSimulator)
      
      setShowSimulator(true)
      setDebugInfo('Demo opened at ' + new Date().toLocaleTimeString())
      
      console.log('✅ showSimulator set to true')
      console.log('🎯 AppSimulator should now render')
      
      // Scroll to top to ensure modal is visible
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
    } catch (error) {
      console.error('❌ Error opening demo:', error)
      setDebugInfo('Error: ' + error.message)
    }
  }

  const handleCloseDemo = () => {
    try {
      console.log('🔒 Demo closed!')
      setShowSimulator(false)
      setDebugInfo('Demo closed at ' + new Date().toLocaleTimeString())
    } catch (error) {
      console.error('❌ Error closing demo:', error)
    }
  }

  // Debug logging when state changes
  console.log('🔄 App render - showSimulator:', showSimulator)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onShowDemo={handleShowDemo} />
      
      {showSimulator ? (
        <AppSimulator onClose={handleCloseDemo} />
      ) : (
        <main>
          <HeroSection onShowDemo={handleShowDemo} />
          <Stats />
          <Features />
          <Stakeholders />
          <CTASection onShowDemo={handleShowDemo} />
        </main>
      )}
      
      <Footer />
      
      {/* Debug Components */}
      <DebugPanel showSimulator={showSimulator} onShowDemo={handleShowDemo} />
      
      {/* Enhanced Debug Panel */}
      <div className="fixed bottom-4 left-4 bg-black text-white px-3 py-2 text-xs font-mono z-[10000] rounded-lg shadow-lg">
        <div>State: {showSimulator ? '✅ SIMULATOR ON' : '❌ SIMULATOR OFF'}</div>
        <div>Debug: {debugInfo || 'No activity'}</div>
        <div>Time: {new Date().toLocaleTimeString()}</div>
      </div>
      
      {/* High-visibility simulator indicator */}
      {showSimulator && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-[10001] font-bold">
          🎮 DEMO INTERACTIVO ACTIVO - Haz clic en la X para cerrar
        </div>
      )}
    </div>
  )
}

export default App
