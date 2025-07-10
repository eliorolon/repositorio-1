// metodos y propiedades de strings

let letras = "LAS LETRAS"

// Length (largo)
let largo = letras.length;
console.log(largo);

// metodos de seleccion
let letraN = letras.charAt(5);
console.log(letraN);
letraN = letras.at(5);
console.log(letraN);
letraN = letras[5];
console.log(letraN);

// Extraer seccion

let frase = "tu amor me hace fuerte tu odio me hace imparable";

let seccion = frase.slice(0, 15);
console.log(seccion);
console.log(frase.slice(-20));
console.log(frase.substring(0, 15));
console.log(frase.substring(-20));

let nombre = "nombre: elio rolon";
console.log(nombre.slice(8, nombre.length));

// conversion de caja

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

// combinar metodos
console.log(nombre.slice(8).toUpperCase());

// Trim (recorte)

let espaciado = "    espacio de mas    ";
console.log(espaciado);
console.log(espaciado.trim());

// remplazar (transversal regExp)
let saludo = "hola elio";
console.log(saludo);
console.log(saludo.replace("elio", "carlos"));

// Split (separar)

let colores = "rojo, verde, azul";
console.log(colores.split(","));

// includes 

console.log(colores.includes("Verde"));
console.log(colores.includes("verde"));

// comillado 

let dobles = "permite tenr comillas simples dentro, I'm studying JS";
let simple = 'permite "comillas dosbles" dentro';
let backtick = "permite dobles y simpñes";

let localidad = "3F";
console.log("localidad: " + localidad + " buenos aires ");
console.log(`localidad: ${localidad} +  buenos aires `);
