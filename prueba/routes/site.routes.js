const express = query ('express');
const app = express();

// Middleware para leer JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/recibir', (req, res) => {
    console.log('Datos recibidos:');
    console.log(req.body);   // Se muestra en la terminal

    res.json({ status: 'OK', recibido: req.body });
});