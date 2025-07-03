// Scoope
if(2 > 1){
    let resp = "numero mayor";
} else {
    resp = "numero menor";
}
console.log(resp);

// if else if

let semaforo = "rojo";

if (semaforo == "verde"){
    console.log("avanzar");
} else if( semaforo == "amarillo"){
    console.log("rojo");
} else {
    console.log("detenerse!!!");
}
{
    console.error("semaforo roto");
}

let monto = window.prompt("ingtresar monto de la compra");

if (monto > 50000){
    console.log("25% de descuento");
    console.log("valor a pagar:", (0.75))
} else if(monto > 20000){
    console.log("10% de descuento");
} else {
    console.log("sin descuento");
}

// Operador ternario 

let respEdad = edad > 17? "mayor" : "menor";
console.log(respEdad);