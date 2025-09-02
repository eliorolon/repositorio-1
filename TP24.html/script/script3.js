document.querySelector("#Saludar").addEventListener("click", () => {
    const nombre= document.querySelector("#nombre");
    const mensaje = document.querySelector("#Saludar #resultado");

    if(nombre.value === ""){
        mensaje.textContent = "error escriba su nombre en el input";
    }else{
        mensaje.textContent = "hola " + nombre.value
    }
});

document.querySelector("#calcular").addEventListener("click", () =>{
    const cantidad = document.querySelector("#cantidad");
    const mensaje = document.querySelector("#ingredientes #resultados");
    const papas = 500;
    const leche = 100;
    const manteca = 30;
    const huevo = 1;

    if(cantidad.value === ""){
        mensaje.textContent = "error! escriba una cantidad en el input"
    }else{
        console.log("input cinb info: " + nombre.value);
        mensaje.innerHTML = 
        '<span class="lista"'>
        <span>cantidad de ingredientes</span>
    };
})