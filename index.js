const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Configurar middleware para limitar las peticiones
const limiter = rateLimit({
    windowMs: 3600000, // Ventana de 3600 segundos (1 hora)
    max: 3600, // Máximo 3600 peticiones por IP
});

app.use(express.json());
app.use(limiter);

// Ruta del endpoint
app.get('/api/ip', function(req, res) {
    const origin = req.ip;
    res.json({
        "origin": origin
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
