const curso = {
    nombre : "programacion web",
    sede : "san miguel",
    turno : "tarde",
    inscriptos: 26,
    saludar : () => {
        console.log("hola alumno de " + curso.nombre)
    },
estado : () => {
    if(curso.inscriptos > 25){
        console.log("curso completo")}
        
        else{
            console.log("quedan vacantes");
        }
} 
}

console.log(curso);

console.log(curso.sede);
console.log(curso["turno"]);

// modificar una propiedad

curso.turno = "noche"
console.log(curso);

// añadir una propiedad

curso.ciclo = 2025;
console.log(curso);

// eliminar una propiedad

delete curso.sede;
console.log(curso);

console.clear();

// Loop (ciclo)

for(const dato in curso){
    console.log(dato);
    console.log(curso[dato]);
}

console.clear();

curso.saludar();

curso.nombre = "diseño web"
curso.saludar();
curso.estado();
curso.inscriptos = 8;
curso.estado();

