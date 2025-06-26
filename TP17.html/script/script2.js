let miVariable; 
miVariable = " FAN DEL BICHO";

console.log(miVariable);

miVariable = 588;

console.log(miVariable);

const apellido = "rolon";

console.log(apellido);

/* apellido = "rolon";
console.log(apellido); */

const nombre = "elio";

console.log(nombre, apellido);

const nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

/* const dni = window.prompt("ingrese su dni");
console.log(dni); */

let numeroA = 6;
let numeroB = 4;
let suma = numeroA + numeroB;
console.log(suma);

/* let numeroC = window.prompt("primer numero");
numeroC = Number(numeroC); //Parsear
let numeroD = window.prompt("segundo numero");
numeroD = Number(numeroD);
let sumaCD = numeroC + numeroD;
console.log(sumaCD); */

// Scoope

let numeroX = 7;
console.log(numeroX);
{
    let numeroX = 8;
    console.log(numeroX);
    let numeroY = 44;
}
console.log(numeroX);
console.log(numeroY);