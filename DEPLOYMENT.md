# 🚀 Guía de Deployment - EcoMap Landing Page

## 📋 Pasos para GitHub y Vercel

### 1. 📁 Subir a GitHub

#### Opción A: Crear repositorio desde GitHub.com
1. **Ir a GitHub.com** y crear un nuevo repositorio:
   - Nombre: `ecomap-landing`
   - Descripción: `Landing page interactiva para EcoMap - Plataforma colaborativa de reportes ambientales`
   - Público o Privado (según tu preferencia)
   - **NO** inicializar con README, .gitignore o licencia

2. **Conectar tu repositorio local:**
   ```bash
   cd ecomap-landing
   git remote add origin https://github.com/TU_USUARIO/ecomap-landing.git
   git branch -M main
   git push -u origin main
   ```

#### Opción B: Usar GitHub CLI (si tienes gh instalado)
```bash
cd ecomap-landing
gh repo create ecomap-landing --public --description "Landing page interactiva para EcoMap - Plataforma colaborativa de reportes ambientales"
git remote add origin https://github.com/TU_USUARIO/ecomap-landing.git
git branch -M main
git push -u origin main
```

### 2. 🌐 Deploy en Vercel

#### Método 1: Desde Vercel Dashboard (Recomendado)
1. **Ir a [vercel.com](https://vercel.com)** e iniciar sesión
2. **Conectar GitHub** si no lo has hecho
3. **Clic en "New Project"**
4. **Importar tu repositorio** `ecomap-landing`
5. **Configuración automática:** Vercel detectará que es un proyecto Vite
6. **Settings recomendadas:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

7. **Clic "Deploy"** ¡y listo! 🎉

#### Método 2: Usando Vercel CLI
```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Desde el directorio del proyecto
cd ecomap-landing
vercel

# Seguir las instrucciones:
# - Set up and deploy? Yes
# - Which scope? Tu cuenta/organización
# - Link to existing project? No
# - Project name? ecomap-landing
# - Directory? ./
# - Auto-detected settings? Yes

# Para deploys futuros, solo ejecutar:
vercel --prod
```

### 3. ⚙️ Configuración Post-Deploy

#### Variables de Entorno (si necesarias)
En el dashboard de Vercel:
1. Ir a **Settings → Environment Variables**
2. Agregar cualquier variable necesaria

#### Dominio Personalizado (opcional)
1. En **Settings → Domains**
2. Agregar tu dominio personalizado
3. Configurar DNS según las instrucciones

#### Analytics y Monitoring
1. **Vercel Analytics:** Habilitar en Settings
2. **Performance Monitoring:** Disponible automáticamente

### 4. 🔄 Workflow de Desarrollo

#### Para actualizaciones futuras:
```bash
# Hacer cambios en el código
git add .
git commit -m "✨ Descripción de los cambios"
git push origin main

# Vercel automáticamente hará deploy de los cambios
```

#### Preview Deployments:
```bash
# Para branches de desarrollo
git checkout -b feature/nueva-funcionalidad
# Hacer cambios...
git push origin feature/nueva-funcionalidad

# Vercel creará un preview deployment automáticamente
```

### 5. 🏆 URLs Resultantes

Una vez deployado, tendrás:

- **URL Principal:** `https://ecomap-landing.vercel.app`
- **GitHub Repo:** `https://github.com/TU_USUARIO/ecomap-landing`
- **Preview URLs:** Para cada branch y PR

### 6. 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build local para testing
npm run build
npm run preview

# Deploy desde CLI
vercel --prod

# Ver logs de deployment
vercel logs

# Ver información del proyecto
vercel ls
```

### 7. 📊 Optimizaciones Incluidas

#### Performance:
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Compresión gzip
- ✅ Optimización de imágenes

#### SEO:
- ✅ Meta tags optimizados
- ✅ OpenGraph tags
- ✅ Twitter Cards
- ✅ Structured data ready

#### Seguridad:
- ✅ Headers de seguridad
- ✅ CSP ready
- ✅ HTTPS automático

### 8. 🐛 Troubleshooting

#### Build falló:
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Problemas con Git:
```bash
# Ver status
git status

# Ver remote
git remote -v

# Resetear a commit anterior si es necesario
git reset --hard HEAD~1
```

#### Problemas con Vercel:
```bash
# Ver logs
vercel logs

# Redeployar
vercel --prod --force
```

### 9. 🎯 Checklist Pre-Deploy

- [x] ✅ Proyecto compila sin errores (`npm run build`)
- [x] ✅ No hay warnings críticos en consola
- [x] ✅ Responsive design funciona en móviles
- [x] ✅ Simulador de app funciona completamente
- [x] ✅ Mapa interactivo carga correctamente
- [x] ✅ Formularios tienen validación
- [x] ✅ Animaciones son fluidas
- [x] ✅ Meta tags están configurados
- [x] ✅ README.md está actualizado

### 10. 📈 Métricas a Monitorear

Post-deploy, revisa:
- **Performance Score:** Lighthouse > 90
- **Accessibility:** WCAG compliance
- **SEO Score:** Meta tags y estructura
- **Load Time:** < 3 segundos inicial
- **Bundle Size:** Chunks optimizados

---

## 🎉 ¡Tu EcoMap Landing está lista para el mundo!

**URLs de ejemplo:**
- Demo: `https://ecomap-landing.vercel.app`
- GitHub: `https://github.com/tu-usuario/ecomap-landing`

¿Necesitas ayuda? Revisa la documentación de [Vercel](https://vercel.com/docs) o [GitHub](https://docs.github.com).

---

*Hecho con ❤️ para el planeta 🌍*