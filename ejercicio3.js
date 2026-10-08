function Estudiante(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
    if(nota >= 3) {
        this.aprobado = true;
    }else {
        this.aprobado = false;
    }
    this.mostrarResultado = function() {
        if(this.aprobado === true) {
            return `${this.nombre}: Aprovado`;
        }
        return `${this.nombre}: Reprovado`;
    }
}

const e1 = new Estudiante("Nicolas", 1.6);
const e2 = new Estudiante("Laura", 1.9);
const e3 = new Estudiante("Daniel", 3.2);
const e4 = new Estudiante("Carlos", 4.6);

for (estu of [e1, e2, e3, e4]) {
    console.log(estu.mostrarResultado());
};
//Pregunta:
//Que el sistema, determina automaticamnte si el estudiante aprovo, temas de segurridad el usuario no digita que paso, si no que calcula automaticamnete, adicional, el valor para aprovar puede cambiar solo modificando el parametro