let ejemplo = {
    nombre : "elio",
    apellido : "rolon",
    nacimientoY : 2002,
}

function Persona(nombre, apellido, nacimientoY){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimientoY = nacimientoY;
    this.edad = () => {
        let hoy = new Date ();
        return hoy.getFullYear() - this.nacimientoY;
    }
}

const persona1 = new Persona("elio", "rolon", 2002);
console.log(persona1);

console.log(persona1.edad());