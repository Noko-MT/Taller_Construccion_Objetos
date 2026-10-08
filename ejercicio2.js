function Mascota (nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function() {
        return `Nombre: ${this.nombre} | Especie: ${this.especie} | Edad: ${this.edad} años | Peso: ${this.peso}Kg`;
    }
};

const m1 = new Mascota("Lucius", "Perro", 3, 10);
const m2 = new Mascota("Lukas", "Pato", 1, 3);
const m3 = new Mascota("Mia", "Gato", 2, 5);
//console.log(m1.presentarse());

for (pet of [m1, m2, m3]){
    console.log(pet.presentarse());
};
//Pregunta:
//La palabra this permite al constructor asociar parametros a las propiedades del objeto por lo cual this tambien permite acceso a los atributos y metodos del objeto.