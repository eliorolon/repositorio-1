let tareas = [];

document.querySelector("#btnAgregar").addEventListener("click", () => {
    cargarTareas()
});

function cargarTareas() {
    if (document.querySelector("#tarea").value == "") {
        window.alert("Ingrese un nombre de tarea para registrarla");
        return;
    }
};
let tarea = {
    id: tareas.length,
    tarea: document.querySelector("#tarea").value,
    estado: "pendiente"
};

tareas.push(tarea);

