import express from "express"
const rutas = express.Router();
import { formularioContacto, postLogin, leerContactos} from "../controladores/formularios.controllers.js";
import { validarFormulario, validarLogin} from "../middlewares/validaciones.middlewares.js";

rutas.post("/contactos",validarFormulario, formularioContacto);

rutas.get("/contactos/leer", leerContactos);

rutas.post("/login", validarLogin, postLogin);


export { rutas } 