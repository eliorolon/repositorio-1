// [arrays]

// ejemplo de arrays

const ejemplo1 = ["texto", "otro texto", "mas texto"];

const ejemplo2 = ["texto", 123, true, null, undefined,["otro", "array"]];

// manejo de arrays

const numeros = [2, 9, 7, 11, 52, 20, 5];
console.log(numeros);

console.log(numeros[2]);

// agregar un dato

numeros.push(222);

console.log(numeros);

numeros.unshift(333);
console.log(numeros);

// quitar un dato

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

// metodos splice()

console.clear()

let letras = ["a", "b", "c", "d"];
console.log(letras);

let letrasEliminadas = letras.splice(1, 2);
console.log(letras);
console.log(letrasEliminadas);

letras.splice(1, 0, "b", "c");
console.log(letras);

letras.splice(3, 3, "d", "e");
console.log(letras);

// unir y separar datos

let unido = numeros.join("/")
console.log(unido);

let separado = unido.split("/")
console.log(separado);

// ordenar alfabeticamente

console.clear()

let caracteres = ["A", "C", "B", "D"];
console.log(caracteres);

caracteres.sort();
console.log(caracteres);

// ordenar numeros

console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);

console.clear()

// copiar un array

// copia referencia 

let numeros1 = [1, 2, 3, 4];
let numeros2 = numeros1;

console.log(numeros1);
console.log(numeros2);

numeros1.push(5);
console.log(numeros1);
console.log(numeros2);

// shallow copy

let letras1 = ["a", "b", "c"];
let letras2 = [...letras1];

letras1.push("d");
console.log(letras1);
console.log(letras2);

// limites del shallow copy

let arrayAnidado1 = [1, 2, ["a", "b"]];
let arrayAnidado2 = [...arrayAnidado1];



// deep clone

let arrayAnidado3 = JSON.stringify(arrayAnidado1);
arrayAnidado3 = JSON.parse(arrayAnidado3);
console.log(arrayAnidado3); 

arrayAnidado1[2].push("d");
console.log(arrayAnidado1);
console.log(arrayAnidado3);