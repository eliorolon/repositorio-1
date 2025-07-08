// Scoope
if(2 > 3){
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
    //console.error("semaforo roto");
}

//let monto = window.prompt("ingtresar monto de la compra");

/* if (monto > 50000){
    console.log("25% de descuento");
    console.log("valor a pagar:", (0.75))
} else if(monto > 20000){
    console.log("10% de descuento");
} else {
    console.log("sin descuento");
} */

// Operador ternario 

//let respEdad = edad > 17? "mayor" : "menor";
//console.log(respEdad);

// operadores && y || 

let valor1 = true;
let valor2 = false;

console.log("operador &&", valor1 && valor2);
console.log("operador ||", valor1 || valor2);

/* if(10 == 10 && 20 == 20){
    console.log("los numeros coinciden");
} else {
    console.log("no coinciden");
}

let cantidad = window.prompt("cantidad de productos");
let valorCompra = window.prompt("total de la compra");

if(cantidad > 10 && valorcompra >= 20000){
    let valorfinal = valorcompra * 0.8;
    console.log("valor final con descuento:" + valorfinal); 
} else {
    console.log("valor final sin descuento:" + valorCompra);
}
 */
// switch 
console.clear();
let color = window.prompt("color del semaforo");

switch(color){
    case "verde": 
    console.log("avanzar");
    break;
    case "amarrillo": 
    console.log("precausion");
    break;
    case "rojo": 
    console.log("detenerse");
    break;
    default: 
    console.log("semaforo roto");
    break;
}