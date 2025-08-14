document.querySelector("form").addEventListener("submit", (e) => {
    
    e.preventDefault();
   const resultados = validarForm();
   if (resultados){
    console.log("formulario validado con exito")
   } else {
    console.log("no se pudo validar la informacion");
   }
});

function validarForm(){
    //console.log("validacion")
    let resultados = true;
    let errores = [];

    const nombre = document.querySelector("#nombre");

    const apellido = document.querySelector("#apellido");

    const dni = document.querySelector("#dni");

    if(nombre.value === "" || apellido.value === "" || dni.value === ""){
        resultados = false;
        errores.push("debe completar todos los campos de formulario")
    }

    if(isNaN(dni.value)){
        resultados = false;
        errores.push("el campo dni es con numeros");
    }

    if(dni.value.length !== 8){
        resultados = false;
        errores.push("el dni debe tener 8 digitos");
    }

    const letrasAprobadas = "qwertyuiopasdfghjklñzxcvbnm ".split("");

    const arrayNombre = nombre.value.split("");

    arrayNombre.forEach((letra) => {})

    //console.log(letra.toLowercase());
    let Query = letrasAprobadas.indexOf(letra.toLowerCase());
    if(Query === -1){
        resultados = false;
        errores.push("el campo nombre solo acepta letras");
    }


        const arrayApellido = apellido.value.split("");

    arrayApellidos.forEach((letra) => {})

    //console.log(letra.toLowercase());
    let query = letrasAprobadas.indexOf(letra.toLowerCase());
    if(query === -1){
        resultados = false;
        errores.push("el campo apellidos solo acepta letras");
    }

    mostrarErrores(resultados, errores)
}

    //console.log(errores);




    // validaciones....... error -> resultado = false


function mostrarErrores(resultados, errores){
    if(resultados){
        //mostrar mensaje de exito
        document.querySelector("#respuestas > div").innerHTML = "el formulario fue validado con exito";
    } else {
        //mostrar mensaje de error y detalles de errores
        document.querySelector("#respuestas > div").innerHTML = " no se pudo validar formulario " ;
        document.querySelector("#respuestas > div").innerHTML += `<br>${errores.join("<br>- ")}`;
        document.querySelector("body").style.backgroundColor = "darkred";
    }
}