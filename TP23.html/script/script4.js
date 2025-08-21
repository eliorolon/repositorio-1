/* document.querySelector("#btnHome").addEventListener("click", (e) =>{
console.log("click en home");
console.log(e.target.dataset.boton);
console.log(e.target.dataset.url);
});


document.querySelector("#btnProds").addEventListener("click", (e) =>{
console.log("click en productos");
console.log(e.target.dataset.boton);
console.log(e.target.dataset.url);
});


document.querySelector("#btnCont").addEventListener("click", (e) =>{
console.log("click en contactos");
console.log(e.target.dataset.boton);
console.log(e.target.dataset.url);
});
 */


document.querySelectorAll(".btnNav").forEach((boton) => {
boton.addEventListener("click en ${e.target.dataset.boton");
console.log("URL: " + e.target.dataset.url);
})