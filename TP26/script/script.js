document.querySelector("#registrar").addEventListener("click", () => {
    console.log("click a registrar")
    // capturar datos
    const nombre = document.querySelector("nombre");
    const apellido = document.querySelector("apellido");
    const dni = document.querySelector("dni");
    //validar datos
    if(nombre.value == "" || apellido.value == "" || dni.value == ""){return;}
    // crear instancia de clase
    fichas.push(new Fichas(nombre.value, apellido.value, dni.value))
    // agregar al array
    // vaciar campos
    nombre.value == "";
    apellido.value == "";
    dni.value == "";
    // mostrar largo del array al usuario
    const cantidadRegistros = fichas.length;
    document.querySelector("#vista h2").innerHTML = `registros <span>${fichas.length}</span>`


});

document.querySelector("#mostrar").addEventListener("click", () => {
    console.log("click a mostrar")
});

document.querySelector("#vaciar").addEventListener("click", () => {
    console.log("click a vaciar")
});

let fichas = [];

class Fichas{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

