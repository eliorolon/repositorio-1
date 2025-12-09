import {insertDatosFormulario} from "../services/formulario.services.js"

export const formularioContacto = async (req, res) => {
    console.log("--> FormularioContacto");
    const resp = await insertDatosFormulario(req.body);
    //respuesta esperada del servicio {error: false} o {error: true, msg:"txt"}
    if(resp.error){
        //res.send(`<h2>error al grabar los datos: ${resp.msg}</h2>`);
        res.redirect("/contactos.html?error=Error al grabar los datos en BD")
        return;
    } else {
        //res.send("datos grabados exitosamente");
        res.redirect("/contactos.html?msg=Formulario enviado con exito");
        return;
    }
}

export const postLogin = async (req, res) => {
    console.log("--> postLogin");



    console.log("login exitoso");
    res.redirect("/login.html?msg=Login exitoso")
}