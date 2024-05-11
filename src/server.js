// Importar Express y EJS
const express = require('express');
const app = express();
const port = 3000;

// Establecer EJS como el motor de plantillas
app.set('view engine', 'ejs');

const path = require("path");

app.set('views', path.join(__dirname, 'views'));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.render('index', { title: 'Página de inicio', message: '¡Hola, mundo!' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web corriendo en http://localhost:${port}`);
});
