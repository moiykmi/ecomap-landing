import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AppSimulator from './components/AppSimulator/AppSimulator'
import Features from './components/Features/Features'
import Stakeholders from './components/Stakeholders/Stakeholders'
import Stats from './components/Stats/Stats'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer'

function App() {
  const [showSimulator, setShowSimulator] = useState(false)

  const handleShowDemo = () => {
    console.log('Demo button clicked!')
    setShowSimulator(true)
  }

  const handleCloseDemo = () => {
    console.log('Demo closed!')
    setShowSimulator(false)
  }

  return (
    <div className="min-h-screen bg-background">
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
      
      {/* Debug indicator */}
      {showSimulator && (
        <div className="fixed top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs z-[9999] rounded">
          SIMULATOR ACTIVE
        </div>
      )}
    </div>
  )
}

export default App
