import { Leaf, Mail, Globe, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Funcionalidades', href: '#funcionalidades' },
      { name: 'Demo Interactivo', href: '#demo' },
      { name: 'Casos de Uso', href: '#casos' },
      { name: 'Precios', href: '#precios' }
    ],
    support: [
      { name: 'Centro de Ayuda', href: '#ayuda' },
      { name: 'Documentación', href: '#docs' },
      { name: 'API', href: '#api' },
      { name: 'Estado del Sistema', href: '#status' }
    ],
    company: [
      { name: 'Acerca de', href: '#acerca' },
      { name: 'Blog', href: '#blog' },
      { name: 'Carreras', href: '#carreras' },
      { name: 'Prensa', href: '#prensa' }
    ],
    legal: [
      { name: 'Privacidad', href: '#privacidad' },
      { name: 'Términos', href: '#terminos' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Licencias', href: '#licencias' }
    ]
  }

  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EcoMap</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              La plataforma colaborativa que conecta ciudadanos, comunidades y autoridades 
              para resolver problemas ambientales de forma efectiva.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="mailto:hola@ecomap.cl"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://ecomap.cl"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
                title="Sitio Web"
              >
                <Globe className="w-5 h-5" />
              </a>
              <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors cursor-pointer" title="Facebook">
                <span className="text-lg">📘</span>
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors cursor-pointer" title="Instagram">
                <span className="text-lg">📷</span>
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors cursor-pointer" title="Twitter">
                <span className="text-lg">🐦</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} EcoMap. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>para el planeta 🌍</span>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 text-center text-sm text-gray-400">
            <p>
              EcoMap es una plataforma tecnológica comprometida con la transparencia ambiental y la participación ciudadana.
              Juntos construimos comunidades más sostenibles.
            </p>
          </div>
        </div>
      </div>

      {/* Environmental Commitment Badge */}
      <div className="bg-primary/20 border-t border-primary/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="text-gray-200">Compromiso Carbono Neutral</span>
            </div>
            <div className="h-4 w-px bg-gray-500"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">♻️</span>
              <span className="text-gray-200">Tecnología Sostenible</span>
            </div>
            <div className="h-4 w-px bg-gray-500"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              <span className="text-gray-200">Impacto Social Positivo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer