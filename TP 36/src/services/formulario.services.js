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

export const selectUsuarios = async() => {
    try {
        const resp = await query("SELECT * FROM usuarios WHERE ELIMINADO = 0");
        return{error: false, data: resp[0]}
        console.log(resp)
        
    } catch (err) {
         console.log("error: " + err)
        return { error: true, msg: err.msg };
    }
}

export const selectContactos = async() => {
    try {
        const resp = await query("SELECT * FROM formulario_contactos");
        return {error: false, data: resp[0]}
    } catch (error) {
        console.log("error al leer BD");
        return{error: true}
    }
}