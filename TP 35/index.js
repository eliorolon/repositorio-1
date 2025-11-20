const express = require("express");
const app = express();
const controllersFormularios = require("./controllers/formularios.controllers.js");
const middlewareValidacion = require("./middleware/validaciones.middleware.js");

const PORT = 4000;
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.send(`<h1>bienvenido a mi web</h1> 
        <a href='/form'>formularioV2</a>`)
})

app.get("/form", (req, res) => {
    res.send(`<form action="/form/datos" method="post">
    <input type="text" name="nombre" placeholder="nombre">
    <input type="text" name="apellido" placeholder="apellido">
    <input type="submit" value="Enviar">
</form>`)
})

app.post("/form/datos", (req, res) => {
    console.log("post recibido :v")
    console.log(req.body)
    // llamado al controlador y esperamos respuestas
    const respuestas = controllersFormularios.formularioDatos(req.body);
    if(respuestas.error){
        res.send("error al procesar formulario")
    } else{
         res.send("<h2>formulario recibido :D</h2>")
    }
    res.send("<h2>formulario recibido :D</h2>")
})

//========== version2 ===========
app.get("/form/v2", (req, res) => {
    res.send(`<form action="/form/v2" method="post">
    <input type="text" name="nombre" placeholder="nombre">
    <input type="text" name="apellido" placeholder="apellido">
    <input type="text" name="dni" placeholder="DNI SIN PUNTOS">
    <input type="submit" value="Enviar">
</form>`)
})

app.post("/form/v2", middlewareValidacion.validarFormDatos , controllersFormularios.formularioDatosV2);

//========== version3 ===========
app.get("/form/v3", (req, res) => {
    res.send(`<form action="/form/v3" method="post">
    <input type="text" name="nombre" placeholder="nombre">
    <input type="text" name="apellido" placeholder="apellido">
    <input type="text" name="dni" placeholder="DNI SIN PUNTOS">
    <input type="submit" value="Enviar">
</form>`)
})

app.post("/form/v3", middlewareValidacion.validarFormDatos , controllersFormularios.formularioDatosV3);


app.use((req, res, next) => {
    res.status(404).send(`<h2>Pagina Inexistente</h2>`)
})

app.listen(PORT, () => {
    console.log(`aplicacion activa en puerto: http://localhost:${PORT}`)
})