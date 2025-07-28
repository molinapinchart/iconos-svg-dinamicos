const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo.html'));
});

// Ruta para la demo
app.get('/demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo.html'));
});

// Ruta de salud para Railway
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Iconos SVG Dinámicos funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🎨 Iconos SVG Dinámicos corriendo en puerto ${PORT}`);
    console.log(`📱 Accede a: http://localhost:${PORT}`);
});

module.exports = app;
