let alumnos = [
  {
    id: 1,
    nombre: "Ricardo",
    apellido: "Gonzalez",
    dni: 22544875,
    localidad: "Tres de Febrero"
  },
  {
    id: 2,
    nombre: "Carla",
    apellido: "Perez",
    dni: 33522166,
    localidad: "San Martín"
  },
  {
    id: 3,
    nombre: "José",
    apellido: "Martinez",
    dni: 41578688,
    localidad: "Tres de Febrero"
  },
  {
    id: 4,
    nombre: "Paula",
    apellido: "Gomez",
    dni: 38168726,
    localidad: "San Martín"
  }
];

let cursos = [
  {
    id: 1,
    nombre: "Programación Web",
    calificado: false,
    notas: [],
    alumnos: [1, 2, 3, 4]
  },
  {
    id: 2,
    nombre: "Pensamiento computacional",
    calificado: true,
    notas: [10, 9],
    alumnos: [2, 4]
  },
  {
    id: 3,
    nombre: "Sublimación",
    calificado: false,
    notas: [],
    alumnos: [1, 2]
  },
  {
    id: 4,
    nombre: "Impresión 3D",
    calificado: true,
    notas: [10, 9, 5],
    alumnos: [2, 3, 4]
  }
];

cursos.forEach((dato) => {
    document.querySelector("#cursos").innerHTML += `<div class="curso">
            <h1>${dato.nombre}</h1>
            <span> cantidad de alumnos: ${dato.alumnos.length}</span>
            <span>curso calificado: ${dato.calificado}</span>
            <div class="btn" data-curso="${dato.id}">Detalles</div>
        </div>`
});
document.querySelectorAll("#cursos .btn").forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        console.log("boton de detalle presionado", e.target.dataset);
        mostrarCurso(e.target.dataset.curso);
    })
});

function mostrarCurso(id){
    console.log("funcion mostrar id", id);
    const cursoSeleccionado = cursos.find((dato) => {return dato.id == id});
    console.log(cursoSeleccionado);
}