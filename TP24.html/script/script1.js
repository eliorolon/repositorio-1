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
let fontsize = 1;
document.querySelector("#btnGrande").addEventListener("click", (e) => {
    if(fontsize > 5){
        return;
    }
    fontsize += 0.2;
    console.log("boton grande apretado");
    document.querySelector("#caja2 > span:first-child").style.fontSize = `${fontsize}em`;
})
document.querySelector("#btnPequeño").addEventListener("click", (e) => {
    if (fontsize < 0.5){
        return;
    }
    console.log("boton pequeño apretado");
    document.querySelector("#caja2 > span:first-child").style.fontSize = `${fontsize}em`;
    fontsize -= 0.1;
})

document.querySelector("#btnOcultar").addEventListener("click", (e) => {
    console.log("boton ocultar apretado");
    document.querySelector("#ocultar").style.display = "none";
})

document.querySelector("#btnMostrar").addEventListener("click", (e) => {
    console.log("boton mostrar apretado");
    document.querySelector("#ocultar").style.display = "inline";
})

document.querySelector("#colorTexto").addEventListener("change", (e) => {
    console.log("boton color texto apretado");
    console.log(e.target.value)
    document.querySelector("#caja2 > span:first-child").style.color = e.target.value;
})

