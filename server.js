const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Logging para Railway
console.log('🔧 Iniciando servidor...');
console.log('📍 Puerto:', PORT);
console.log('🌍 Entorno:', process.env.NODE_ENV || 'development');
console.log('📁 Directorio actual:', __dirname);
console.log('🗂️ Archivo ejecutándose:', __filename);

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.static('.'));

// Ruta principal - servir el editor
app.get('/', (req, res) => {
    console.log('📄 Sirviendo editor principal');
    res.sendFile(path.join(__dirname, 'editor-iconos.html'));
});

// Ruta para servir iconos específicos
app.get('/iconos/:iconName', (req, res) => {
    const iconName = req.params.iconName;
    const iconPath = path.join(__dirname, 'iconos-pixel-art-optimizados', iconName + '.svg');
    res.sendFile(iconPath, (err) => {
        if (err) {
            res.status(404).json({ error: 'Icono no encontrado' });
        }
    });
});

// Ruta para listar todos los iconos disponibles
app.get('/api/iconos', (req, res) => {
    console.log('📋 Solicitando lista de iconos');
    const fs = require('fs');
    const iconsPath = path.join(__dirname, 'iconos-pixel-art-optimizados');
    
    try {
        const files = fs.readdirSync(iconsPath);
        const svgFiles = files
            .filter(file => file.endsWith('.svg'))
            .map(file => file.replace('.svg', ''));
        
        console.log('✅ Encontrados ' + svgFiles.length + ' iconos');
        res.json({
            success: true,
            count: svgFiles.length,
            icons: svgFiles
        });
    } catch (error) {
        console.error('❌ Error leyendo iconos:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Error al leer los iconos',
            details: error.message
        });
    }
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'editor-iconos.html'));
});

// Iniciar servidor
const server = app.listen(PORT, () => {
    console.log('🚀 Servidor iniciado en puerto ' + PORT);
    console.log('✅ Listo para recibir conexiones');
});

module.exports = app;
