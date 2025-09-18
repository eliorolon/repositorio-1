document.querySelector("#registrar").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");
    //console.log(nombre.value, apellido.value, dni.value);

    if(nombre.value === "" || apellido.value === "" || dni.value === ""){
        //console.log("completar todos los campos faltantes");

    mostrarError("debes completar todos los campos para poder registrarse");

        return;
    }

    let datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        dni: dni.value, 
    }

    //console.log(datos);
    
    fichas.push(datos);

    console.log(fichas);

    nombre.value = []
    apellido.value = []
    dni.value = []

    document.querySelector("#vista h2").innerHTML = `Registros<span>${fichas.length}</span>`;

    //limpiar registros mostrados
    document.querySelector("#salida").innerHTML = "";

    console.log("finaliza la funcion");
})

let fichas = [];

function mostrarError(txt){
const divErrores = document.querySelector("#errores")
divErrores.textContent = txt;
divErrores.style.display = "flex";
setTimeout(() => {
divErrores.style.display = "none";
}, 1000 * 10);
}

document.querySelector("#mostrar").addEventListener("click", () => {
    document.querySelector("#salida").innerHTML = "";
    //console.log("click al boton mostrar")
    if(fichas.length == 0){
        mostrarError("no hay registros para mostrar");
        return;
    }
    fichas.forEach((objeto) => {
        document.querySelector("#salida").innerHTML += `<div class="ficha">
                <span>Nombre: ${objeto.nombre}</span>
                <span>Apellido: ${objeto.apellido}</span>
                <span>dni: ${objeto.dni}</span>
            </div>`
       
    });
});
document.querySelector("#vaciar").addEventListener("click", () => {
    //vaciar los inputs
document.querySelector("#nombre");
document.querySelector("#apellido");
document.querySelector("#dni");
    //vaciar los elementos de salida
    document.querySelector("#salida").innerHTML = "";
    //vaciar array de fichas
    fichas = [];
    //resetear contador
      document.querySelector("#vista h2").innerHTML = `Registros`;
});