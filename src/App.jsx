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

  return (
    <div className="min-h-screen bg-background">
      <Header onShowDemo={() => setShowSimulator(true)} />
      
      {showSimulator ? (
        <AppSimulator onClose={() => setShowSimulator(false)} />
      ) : (
        <main>
          <HeroSection onShowDemo={() => setShowSimulator(true)} />
          <Stats />
          <Features />
          <Stakeholders />
          <CTASection onShowDemo={() => setShowSimulator(true)} />
        </main>
      )}
      
      <Footer />
    </div>
  )
}

export default App
