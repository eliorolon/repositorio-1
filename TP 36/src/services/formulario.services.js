import { query } from "../config/database.js"


export const insertDatosFormulario = async (datos) => {
    console.log("--> insertDatosFormulario");
    // proceso proceso proceso
    //return {error: false}
    try {
        const resp = await query(`INSERT into formulario_contactos (nombre, telefono) VALUES ("${datos.nombre}", "${datos.telefono}")`)
        return{error: false};
    } catch (err) {
        console.log("error 20-501" + err.msg)
        return { error: true, msg: err.msg };
    }
}