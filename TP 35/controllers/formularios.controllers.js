const fs = require ("fs")


const formularioDatos = (datos) => {
    console.log("controller formulariosDatos llamado")
    console.log(datos)
    // bla bla bla del proceso
    return {error: true}
} 

const formularioDatosV2 = async (req, res) => {
    console.log("controller formularioDatosV2 llamado");
    console.log(req.body)

    res.send("post recibido, gracias");
}

const formularioDatosV3 = async (req, res) => {
    console.log("controller formularioDatosV2 llamado");
    console.log(req.body)
    // grabar la info en un archivo JSON
    let datos = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
    }
   datos = JSON.stringify(datos) + ",";
    fs.appendFile("./data/formularios.js", datos, (error) => {
        console.log(error);
        return;
    })
    res.send("post recibido, gracias");
}


module.exports = {
    formularioDatos,
    formularioDatosV2,
    formularioDatosV3,
}