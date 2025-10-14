let Tareas = [];

document.querySelector("#btnAgregar").addEventListener("click", () => {
let tarea = document.querySelector("#tarea");
// validar input
if(tarea.value === ""){return}
// crear objeto "tarea"
let objTarea = {
    tarea: tarea.value,
    estado: "pendiente",
    id: Tareas.length,
}
// agregar objeto al array global
Tareas.push(objTarea);
localStorage.setItem("tareas", JSON.stringify(Tareas));
//limpiar pagina y mostrar datos
tarea.value = "";
    // limpiar tbody
    document.querySelector("tbody").innerHTML = "";
Tareas.forEach((tarea) => {
    //console.log(tarea);
    //cargar info actualizada
    document.querySelector("tbody").innerHTML += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td>
                        <div class="btn verde">${tarea.estado}</div>
                    </td>
                    <td>
                        <div class="btn azul">editar</div>
                        <div class="btn naranja">borrar</div>
                    </td>
                </tr>`;
})
});

function buscarDatosPrevios(){
    let TareasEnLS = localStorage.getItem("Tareas");
    //console.log(TareasEnLS);
    TareasEnLS = JSON.parse(TareasEnLS) || [];

        document.querySelector("tbody").innerHTML = "";
        TareasEnLS.forEach((tarea) => {
    //console.log(tarea);
    //cargar info actualizada
    document.querySelector("tbody").innerHTML += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td>
                        <div class="btn verde">${tarea.estado}</div>
                    </td>
                    <td>
                        <div class="btn azul">editar</div>
                        <div class="btn naranja">borrar</div>
                    </td>
                </tr>`;
})
}

buscarDatosPrevios();