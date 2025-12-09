import express from "express"
const rutas = express.Router();
import { formularioContacto, postLogin} from "../controladores/formularios.controllers.js";
import { validarFormulario, validarLogin} from "../middlewares/validaciones.middlewares.js";

rutas.post("/contactos",validarFormulario, formularioContacto);

rutas.post("/login", validarLogin, postLogin);

export { rutas } 