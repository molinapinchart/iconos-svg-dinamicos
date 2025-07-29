# Editor de Íconos SVG Dinámicos

Un editor web completo para gestionar y personalizar íconos SVG con control dinámico de colores.

## 🚀 Demo en Vivo

**Desplegado en Railway:** [https://iconos-svg-dinamicos-production.up.railway.app](https://iconos-svg-dinamicos-production.up.railway.app)

## ✨ Características

- **Editor Visual**: Interfaz completa para seleccionar y editar íconos
- **Control de Colores**: Modificación separada de bordes y rellenos
- **Animaciones**: Sistema de animaciones CSS incluido
- **Descarga de Íconos**: Exportación de íconos personalizados
- **Carga de Nuevos Íconos**: Subida y optimización automática
- **53 Íconos**: Colección completa de íconos pixel art optimizados

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Node.js + Express.js
- **Íconos**: SVG con `currentColor` para control dinámico
- **Despliegue**: Railway (compatible con Heroku, Vercel, Netlify)

## 📦 Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/nachoapprecio/iconos-svg-dinamicos.git
cd iconos-svg-dinamicos

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start

# Abrir en navegador
http://localhost:3000
```

## 🚢 Despliegue en Railway

1. **Conectar repositorio:**
   - Ve a [Railway.app](https://railway.app)
   - Conecta tu cuenta de GitHub
   - Selecciona este repositorio

2. **Configuración automática:**
   - Railway detectará automáticamente el `package.json`
   - Usará el comando `npm start` definido en los scripts
   - El puerto se configura automáticamente con `process.env.PORT`

3. **Variables de entorno:**
   ```
   NODE_ENV=production
   ```

## 📁 Estructura del Proyecto

```
iconos-svg-dinamicos/
├── editor-iconos.html          # Editor principal (frontend)
├── server.js                   # Servidor Express (backend)
├── package.json               # Dependencias y scripts
├── Procfile                   # Configuración para Railway/Heroku
├── .railwayignore            # Archivos a ignorar en Railway
└── iconos-pixel-art-optimizados/  # 53 íconos SVG optimizados
    ├── airplane.svg
    ├── wifi.svg
    ├── battery-full.svg
    └── ... (50 más)
```

## 🎨 Uso del Editor

1. **Seleccionar Ícono**: Elige de los 53 íconos disponibles
2. **Personalizar Colores**: 
   - Color de relleno (HEX o selector visual)
   - Color de borde (HEX o selector visual)
   - Grosor del borde (0-5px)
3. **Aplicar Animaciones**: 8 animaciones CSS predefinidas
4. **Ajustar Tamaño**: 48px a 160px
5. **Descargar**: SVG optimizado con estilos aplicados

## 🌟 Características Técnicas

- **SVG Dinámicos**: Uso de `currentColor` para control CSS
- **API REST**: Endpoints para listar y servir íconos
- **Optimización Automática**: Procesamiento de SVGs subidos
- **Responsive**: Interfaz adaptable a móviles
- **Sin CORS**: Servidor integrado resuelve problemas de seguridad

## 📡 API Endpoints

```javascript
GET  /                    # Editor principal
GET  /api/iconos         # Lista todos los íconos disponibles
GET  /iconos/:nombre     # Obtiene un ícono específico
```

## 🔧 Scripts Disponibles

```bash
npm start                # Inicia servidor de producción
npm run dev             # Inicia servidor de desarrollo
```

## 📋 Requisitos

- **Node.js**: ≥18.0.0
- **NPM**: ≥8.0.0
- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas versiones)

## 🤝 Contribuir

1. Fork del repositorio
2. Crear rama para feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit de cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear Pull Request

## 📄 Licencia

MIT License - ve [LICENSE](LICENSE) para más detalles.

## 🎯 Próximas Características

- [ ] Más animaciones CSS
- [ ] Exportar en múltiples formatos (PNG, WEBP)
- [ ] Temas de colores predefinidos
- [ ] Galería de íconos comunitarios
- [ ] API para integración externa

---

**Desarrollado por:** [@nachoapprecio](https://github.com/nachoapprecio)  
**Repositorio:** [iconos-svg-dinamicos](https://github.com/nachoapprecio/iconos-svg-dinamicos)