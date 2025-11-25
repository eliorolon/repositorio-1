import express from "express"
const rutas = express.Router();
import { formularioContacto } from "../controladores/formularios.controllers.js";
import { validarFormulario } from "../middlewares/validaciones.middlewares.js";

rutas.post("/contacto",validarFormulario, formularioContacto);

//rutas.post("/login")

export { rutas }