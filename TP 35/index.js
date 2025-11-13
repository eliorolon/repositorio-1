const express = require("express");
const app = express();

const PORT = 4000;
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.send("<h1>bienvenido a mi web</h1><a href='/form'>formulario</a>")
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
    res.send("<h2>formulario recibido :D</h2>")
})

app.use((req, res, next) => {
    res.status(404).send(`<h2>Pagina Inexistente</h2>`)
})

app.listen(PORT, () => {
    console.log(`aplicacion activa en puerto: http://localhost:${PORT}`)
})