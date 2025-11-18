const validarFormDatos = (req, res, next) => {
    console.log("--> paso por el middleware");
    if(req.body.nombre === "" || req.body.apellido === "" || req.body.dni ===""){
        res.send("completa todos los campos")
    } else if(isNaN (parseInt(req.body.dni))){
        res.send("solo numeros")
    }else{
        next();
    }
}

module.exports = {
    validarFormDatos,
}