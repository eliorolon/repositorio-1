document.querySelector("#botonsaludar").addEventListener("click", (evento) => {
    console.log("hola mundo");
    console.log(evento);
})

document.querySelector("#eventosdelmouse").addEventListener("click", (evento) => {
    console.log("evento click");
});

document.querySelector("#eventosdelmouse").addEventListener("mouseover", (evento) => {
    console.log("evento click mouseover");
});

document.querySelector("#eventosdelmouse").addEventListener("mouseout", (evento) => {
    console.log("evento click mouseout");
});

document.querySelector("#eventosdelmouse").addEventListener("mousedown", (evento) => {
    console.log("evento click mousedown");
});

document.querySelector("#eventosdelmouse").addEventListener("mouseup", (evento) => {
    console.log("evento click mouseup");
});

document.querySelector("#eventosdelmouse").addEventListener("wheel", (evento) => {
    console.log("evento click wheel");
});

document.querySelector("#eventosdelmouse").addEventListener("mousemove", (e) => {
    
    document.querySelector("#eventosdelmouse > span").textContent = e.offsetX + "/" + e.offsetY;
});

document.querySelector("#eventostecla1").addEventListener("keydown", (evento) => {
    console.log("evento keydwon")
})

document.querySelector("#eventostecla1").addEventListener("keyup", (evento) => {
    console.log("evento keyup")
})

document.querySelector("#eventostecla2").addEventListener("keypress", (evento) => {
    console.log("evento.key");
})

document.querySelector("#foco").addEventListener("focus", (e) => {
    console.log("evento focus");
    //document.querySelector("#foco").style.background = "darkorange";
    e.target.style.background = "darkred"

});

document.querySelector("#foco").addEventListener("blur", (e) => {
    console.log("evento desenfocar");
    
    e.target.style.background = "white"

});

