export const validarFormulario = async (req, res, next) => {
    console.log("--> ValidarFormulario");
    //console.log(req.body);
    const nombre = req.body.nombre.trim().toLowerCase().split("")
    const telefono = Number (req.body.telefono.trim());
    console.log(nombre, telefono);
    if(nombre.length === 0 || isNaN(telefono) || telefono === 0){
        console.log("error en la validacion");
        res.send("<h2>error en la validacion</h2>");
        return;
    }
    console.log("validacion exitosa");
    next();

}