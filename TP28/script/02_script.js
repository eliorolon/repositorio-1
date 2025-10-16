let Tareas = [];

document.querySelector("#btnAgregar").addEventListener("click", () => {
    let tarea = document.querySelector("#tarea");
    // validar input
    if (tarea.value === "") { return }
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
});

function buscarDatosPrevios() {
    let TareasEnLS = localStorage.getItem("tareas");
    //console.log(TareasEnLS);
    TareasEnLS = JSON.parse(TareasEnLS) || [];
    // pasarlo como variable global
    Tareas = TareasEnLS;
    crearVista();
}

buscarDatosPrevios();

function crearVista() {
    document.querySelector("tbody").innerHTML = "";
    Tareas.forEach((tarea) => {
        if(tarea.estado == "eliminada") return
        //cargar info actualizada
        document.querySelector("tbody").innerHTML += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td>
                        <div class="btn verde btnEstado" data-id=${tarea.id} > ${tarea.estado}</div>
                    </td>
                    <td>
                        <div class="btn azul btnEditar">editar</div>
                         <div class="btn naranja btnBorrar data-id=${tarea.estado}">borrar</div>
                     </td>
                 </tr>`;

    })
    document.querySelectorAll(".btnEstado").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (Tareas[e.target.dataset.id].estado == "completa") { Tareas[e.target.dataset.id].estado = "Pendiente" } else { Tareas[e.target.dataset.id].estado = "completa" }
            console.log(Tareas[e.target.dataset.id]);
            localStorage.setItem("tareas", JSON.stringify(Tareas));

            document.querySelectorAll(".btnBorrar").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    (Tareas[e.target.dataset.id].estado == "eliminada")


                    crearVista();
                })
            }

            )
        });
    });
};

