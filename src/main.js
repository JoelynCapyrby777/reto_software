require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Importación de rutas
const pingRoutes = require('./routes/pingRoutes');

// Inicializando Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Conexi´m de rutas
app.use('/', pingRoutes);

// Arramnque del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});