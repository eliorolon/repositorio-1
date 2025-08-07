console.log(window);
console.log(document);
console.clear();

console.log(document.querySelector("h1"));

console.log(document.getElementsByTagName("p"));

console.log(document.getElementsByClassName("parrafo"));

console.log(document.getElementById("contenidoPrincipal"));

console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll("parrafo"));

console.log(document.querySelector("#contenidoPrincipal"));

console.clear();

console.log(document.querySelector("main h2").textContent);

console.log(document.querySelector("#contenidoPrincipal").textContent += " - modificado desde js");

console.log(document.querySelector("main").innerHTML += '<p class="parrafo">Parrafo 5</p>');

document.querySelector("#textoinput").value = "texto agregado desde JS";

document.querySelector("#divestilo").style.backgroundColor = "lightblue";

document.querySelector("#divestilo").style.height = "300px";

document.querySelector("#destino").innerHTML += "<p> texto agregado desde JS </p>";

const element = document.createElement("p"); 

element.textContent = "parrafo creado con createElement";

document.querySelector("#destino").appendChild(element);

