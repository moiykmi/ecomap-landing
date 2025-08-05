# EcoMap - Landing Page Interactiva

Una landing page completamente interactiva para EcoMap, la aplicación móvil colaborativa para reportar focos de contaminación ambiental.

## 🌟 Características Principales

- **Simulador de App Móvil Completo**: Experiencia completa de la aplicación móvil en el navegador
- **Mapa Interactivo**: Integración con Leaflet para mostrar reportes ambientales
- **Responsive Design**: Optimizado para todos los dispositivos (mobile-first)
- **Animaciones Fluidas**: Implementado con Framer Motion
- **Formularios Interactivos**: Validación en tiempo real
- **Datos Mock Realistas**: Experiencia completa sin backend

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Mapas**: Leaflet + React-Leaflet
- **Iconos**: Lucide React
- **Estado**: React Hooks

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**
   - Navegar a `http://localhost:5173`

## 📱 Funcionalidades del Simulador

### Pantallas Disponibles
- **Bienvenida**: Opciones de acceso (login, registro, anónimo)
- **Login**: Simulación de inicio de sesión
- **Dashboard**: Mapa principal con reportes interactivos
- **Nuevo Reporte**: Formulario completo de 3 pasos
- **Lista de Reportes**: Vista de todos los reportes con filtros
- **Perfil**: Estadísticas personales y configuraciones

### Características del Mapa
- Marcadores interactivos con información detallada
- Filtros por tipo de contaminación
- Popups con detalles de cada reporte
- Geolocalización simulada
- Zoom y navegación completa

## 🎨 Diseño y UX

### Paleta de Colores
- **Primary**: #2E7D32 (Verde principal)
- **Secondary**: #1976D2 (Azul secundario)
- **Success**: #388E3C (Verde éxito)
- **Warning**: #F57C00 (Naranja advertencia)
- **Error**: #D32F2F (Rojo error)

## 📊 Datos Mock

### Tipos de Reportes
- Microbasural
- Contaminación del aire
- Contaminación del agua
- Contaminación acústica
- Residuos peligrosos

### Estadísticas Simuladas
- 2,847 reportes realizados
- 156 comunidades activas
- 89% de casos resueltos
- 24h tiempo promedio de respuesta

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📄 Instrucciones de Uso

1. **Hero Section**: Presenta EcoMap con CTAs prominentes
2. **Demo Interactivo**: Haz clic en "Probar EcoMap" para abrir el simulador
3. **Navegación del Simulador**:
   - Inicia como anónimo o simula login
   - Explora el mapa con reportes reales
   - Crea un nuevo reporte paso a paso
   - Ve la lista completa de reportes
   - Revisa estadísticas en el perfil

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

---

**Hecho con ❤️ para el planeta 🌍**
