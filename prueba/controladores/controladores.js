import {insertDatosFormulario, selectUsuarios, selectContactos} from "../services/formulario.services.js"

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
    //leer la tabla de usuarios
    const tablaUsuarios = await selectUsuarios();
    //buscar user del req en 
    const busquedaUsuario = tablaUsuarios.data.findIndex((reg) => {return reg.usuario == req.body.usuario});
    if(busquedaUsuario === -1){
        res.redirect("/login.html?error=Error en login");
        return;
    }
    //si existe verificar si las contraseñas coinciden
    if(req.body.password !== tablaUsuarios.data[busquedaUsuario].password){
        res.redirect("/login.html?error=Error en login");
    }

    console.log("login exitoso");
    res.redirect("/login.html?msg=login fallado")
}

export const leerContactos = async(req,res) => {
    const query = await selectContactos();
    if(query.error){
        console.log("error al leer contactos");
        return res.send({error: true});
    } else {
        return res.send({error: false, data: query.data});
    }
}