document.querySelector("#btnChiste").addEventListener("click", () => {
    fetch("http://www.official-joke-api.appspot.com/random_joke").then((res) => res.json()).then((res) => {
        mostrarChiste(res);
    })
})

function mostrarChiste(chiste){
    console.log(chiste);
    let vista = `<span>${chiste.setup}</span>
    <span>${chiste.punchline}</span>`
    document.querySelector("#chiste").innerHTML = vista;
}


document.querySelector("#btnHecho").addEventListener("click", () => {
    fetch("http://catfact.ninja/fact").then((res) => res.json()).then((res) => {
        mostrarHecho(res);
    })
})

function mostrarHecho(hecho){
    console.log(hecho);
    let vista = `<span>${hecho.fact}</span>`
    document.querySelector("#hecho").innerHTML = vista;
}

document.querySelector("#btnDog").addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json()).then((res) => {
        mostrarDog(res);
    })
})

function mostrarDog(Dog){
    console.log(Dog);
    let vista = `<img src="${Dog.message}">`;
    document.querySelector("#dog").innerHTML = vista;
}

//como precargar eventos

let click = new Event("click");

document.querySelector("#btnChiste").dispatchEvent(click)

document.querySelector("#btnHecho").dispatchEvent(click)

document.querySelector("#btnDog").dispatchEvent(click)

document.querySelector("#btnEdad").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    console.log(nombre)
    if(nombre === ""){alert("no ingreso ningun nombre"); return;}
    const url = `https://api.agify.io?name=${nombre}`
    fetch(url).then((res) => res.json()).then((res) => {
        mostrarEdad(res);
    });

    function mostrarEdad(edad){
    console.log(edad);
    let vista = `<span> edad para${edad.name}: ${edad.age}</span>`
    document.querySelector("#edad").innerHTML = vista;
}
})