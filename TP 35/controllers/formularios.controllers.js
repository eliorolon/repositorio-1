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

module.exports = {
    formularioDatos,
    formularioDatosV2
}