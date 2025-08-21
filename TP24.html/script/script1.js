document.querySelector("#btnVertical").addEventListener("click", (e) => {
    console.log("boton vertical apretado");
    document.querySelector("#distribucion").style.flexDirection = "column";
})

document.querySelector("#btnHorizontal").addEventListener("click", (e) => {
    console.log("boton horizontal apretado");
    document.querySelector("#distribucion").style.flexDirection = "row";
})

document.querySelector("#btnRojo").addEventListener("click", (e) => {
    console.log("boton rojo apretado");
    document.querySelector("#caja1").style.backgroundColor = "red";
})

document.querySelector("#btnVerde").addEventListener("click", (e) => {
    console.log("boton verde apretado");
    document.querySelector("#caja1").style.backgroundColor = "green";
})

document.querySelector("#btnGrande").addEventListener("click", (e) => {
    console.log("boton grande apretado");
})

document.querySelector("#btnPequeño").addEventListener("click", (e) => {
    console.log("boton pequeño apretado");
})

document.querySelector("#btnOcultar").addEventListener("click", (e) => {
    console.log("boton ocultar apretado");
    document.querySelector("#ocultar").style.display = "none";
})

document.querySelector("#btnMostrar").addEventListener("click", (e) => {
    console.log("boton mostrar apretado");
    document.querySelector("#ocultar").style.display = "inline";
})

document.querySelector("#colorTexto").addEventListener("click", (e) => {
    console.log("change");
})