// metodo forEach()

let colores = ["rojo", "verde", "azul", "amarrillo", "violeta"];
colores.forEach((valor, i) => {
    console.log(valor, i);
});

let numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach((numeros) => {
    console.log(numeros * 10);
});

// modificar mediante un numero forEach()

numeros.forEach((x, i) => {
   numeros[i] += 100;
})
console.log(numeros);

numeros = numeros.join();
console.log(numeros);
numeros = numeros.split(",");
console.log(numeros);

numeros.forEach((data, i) => {
    numeros [i] = Number(data);
})

console.log(numeros);

// metodo find()
/* 
 let query = colores.find((dato) => {
    return dato == "verde"; 
 }); */

 let query = colores.find(dato => dato == "verde");
 console.log(query);

let queryIndex = colores.findIndex(dato => dato == "verde")

console.log(query);

// metodo reduce()

 let total = numeros.reduce((acumulador, numero) => {return acumulador + numero});

 // array de arrays

 let dato = [["elio", 123], ["pablo", 456], ["pancho", [789, 120213]]];

 console.log(dato[1][0]);

console.log(dato [2][1][0]);