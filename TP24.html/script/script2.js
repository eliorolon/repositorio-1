document.querySelector("#saludar").addEventListener("click", () => {
const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#respuesta");
if(nombre.value === ""){
    //console.log("unpit vacio");
    mensaje.textContent = "ERROR!! escriba un nombre en el campo"
} else{
console.log("input con info: " + nombre.value);
}
})