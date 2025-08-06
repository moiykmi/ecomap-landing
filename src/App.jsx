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
    setShowSimulator(true)
    // Scroll to top to ensure modal is visible
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCloseDemo = () => {
    setShowSimulator(false)
  }

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
    </div>
  )
}

export default App
