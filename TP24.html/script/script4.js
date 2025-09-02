document.querySelectorAll("#carrito .agregar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        //console.log(`boton ${e.target.dataset.productos} clickeado`)
        //console.log(`boton ${e.target.dataset.index} clickeado`)
        carrito[e.target.dataset.index]++;
        actualizarContador();
    });
}); 

const carrito = [0, 0, 0];
let cantidad = 0;

function actualizarContador(){
cantidad++;
document.querySelector("#cantidadcarrito").textContent = cantidad;
}

document.querySelector("#carrito #ver").addEventListener("click", () => {
    let text = `remeras rojas: ${carrito [0]} <br> remeras amarrillas: ${carrito [1]} <br> remeras verde: ${carrito[2]}`;
    document.querySelector("#carrito #mensaje").innerHTML = text;
})
document.querySelector("#carrito #vaciar").addEventListener("click", (e) =>{
document.querySelector("#carrito #mensaje").textContent = "";
document.querySelector("#cantidadCarrito").textContent = 0;
carrito[0] = 0;
carrito[1] = 0;
carrito[2] = 0;
});