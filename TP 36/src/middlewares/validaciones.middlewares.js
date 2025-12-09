export const validarFormulario = async (req, res, next) => {
    console.log("--> ValidarFormulario");
    //console.log(req.body);
    const nombre = req.body.nombre.trim().toLowerCase().split("")
    const telefono = Number (req.body.telefono.trim());
    console.log(nombre, telefono);
    if(nombre.length === 0 || isNaN(telefono) || telefono === 0){
        console.log("error en la validacion");
        res.redirect("/contactos.html?error=Error en la validacion");
        return;
    }
    console.log("validacion exitosa");
    next();
 
}

export const validarLogin = async (req, res, next) => {
    console.log("--> validacion login iniciada");
    const usuario = req.body.usuario.trim();
    const passsword = req.body.password.trim();
    if(usuario.length === 0 || passsword.length === 0){
        console.log("error de validacion de login");
        res.redirect("/login.html?error=Error al validar el login");
        return;
    }

    console.log("validacion exitosa");
    next();
}