import {insertDatosFormulario} from "../services/formulario.services.js"

export const formularioContacto = async (req, res) => {
    console.log("--> FormularioContacto");
    const resp = await insertDatosFormulario(req.body);
    //respuesta esperada del servicio {error: false} o {error: true, msg:"txt"}
    if(resp.error){
        res.send(`<h2>error al grabar los datos: ${resp.msg}</h2>`);
        return;
    } else {
        res.send("datos grabados exitosamente");
        return;
    }
}