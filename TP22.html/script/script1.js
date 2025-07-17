// mochila digital

let mochila = ["lapiz", "goma", "cartuchera"];
console.log("mochila completa:", mochila);

// acceder a un item especifico

console.log("el segundo elemento es:", mochila[1]);

//actualizar un item

mochila[0] = "sacapuntas";
console.log("mochila actualizada", mochila);

// largo de la array

console.log("tengo", mochila.length, "materiales en mi mochila");

// sellecionar ultimo item

console.log("el primer material des:", mochila[0]);
console.log("el ultimo material es:", mochila[mochila.length -1]);

// agregar y quitar items

mochila.push("marcador");
console.log("mochila despues de agregar un marcador:", mochila);

mochila.pop();
console.log("mochila despues de quitar el ultilo item:", mochila);

// vaciar mochila

mochila = [];
console.log("mi mochila esta vacia", mochila);

