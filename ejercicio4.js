function Libro(titulo, autor, ano, prestado) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.prestado = false;
    this.prestar = function() {
        if (this.prestado === false) {
            this.prestado = true;
            return "Libro prestado correctamente"
        }
        return `El libro ya se encuentra en prestamo`;
    };
    this.devolver = function() {
        if (this.prestado === true) {
            this.prestado = false;
            return "Libro devuelto correctamente"
        }
        return `¡Inconsistencia! el libro ya se ha devuelto`;
    }
}

const l1 = new Libro("La teoria del todo", 'Stephen Hawking', 2002);
const l2 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943);


console.log(l1);
console.log(l1.prestar());
console.log(l1);
console.log(l1.devolver());

//Pregunta:
//Se generaria un error en el invemntario, por eso es importante estas validaciones y alertas ya que solo puede cambiar el estado si esta en prestamo o en el inventario.