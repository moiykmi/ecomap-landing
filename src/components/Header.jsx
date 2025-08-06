import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const Header = ({ onShowDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">EcoMap</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Funcionalidades
            </button>
            <button 
              onClick={(e) => {
                console.log('🎯 Header Demo button clicked!')
                e.preventDefault()
                onShowDemo()
              }}
              className="text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={(e) => {
                console.log('🎯 Header CTA button clicked!')
                e.preventDefault()
                onShowDemo()
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Probar Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-text-secondary hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Funcionalidades
              </button>
              <button 
                onClick={onShowDemo}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <button 
                onClick={onShowDemo}
                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Probar Ahora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header