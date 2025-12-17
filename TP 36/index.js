import "dotenv/config";

import express from "express"

import {rutas} from "./src/routes/site.routes.js";


const PORT = 4000

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

app.use("/", rutas);

app.use((req, res, next) => {
    res.status(404).send(`<h1>nose pudo encontrar esa pagina!</h1>`)
});

app.listen(PORT, () => {
    console.log(`servidor activo en http://localhost:${PORT}`)
}); 