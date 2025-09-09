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

//---------------

class Animal{
    constructor(nombre, color, altura, peso, region){
        this.nombre = nombre;
        this.color = color;
        this.altura = altura;
        this.altura = altura;
        this.peso = peso;
        this.region = region;
    }
}

let animales = [];

animales.push(new Animal("cabra","gris", 800, 100, "asia"));
animales.push(new Animal("perro","gris", 800, 100, "sudamerica"));
animales.push(new Animal("gato","gris", 800, 100, "sudamerica"));
animales.push(new Animal("koala","gris", 800, 100, "asia"));
animales.push(new Animal("panda","gris", 800, 100, "asia"));

console.clear()
console.log(animales);

// metodo find()

function buscarAnimal(nombre){
    return animales.find((info) => info.nombre === nombre)
}

console.log(buscarAnimal("cabra"));
console.log(buscarAnimal("perro"));
console.log(buscarAnimal("gato"));
console.log(buscarAnimal("koala"));
console.log(buscarAnimal("panda"));

// metodo filter()

function filtrarAnimales(region){
  return animales.filter((info) => { return info.region === region})
}

console.log(filtrarAnimales("asia"));