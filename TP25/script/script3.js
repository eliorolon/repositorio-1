class Persona{
    constructor(nombre, apellido, nacimientoY){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimientoY = nacimientoY;
    }
    saludar(){
        return `hola ${this.nombre}`;
    }
}

const persona1 = new Persona("elio", "rolon", 2002);
console.log(persona1);
console.log(persona1.saludar());