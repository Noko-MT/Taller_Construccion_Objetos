function Computador (marca, procesador, ramGb, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ramGb = ramGb;
    this.precio = precio;
}

const c1 = new Computador("ASUS", "Ryzen 5 9600X", 32, 2650000);
const c2 = new Computador("HP", "Intel I5 14500K", 16, 2850000);
const c3 = new Computador("DELL", "Ryzen 7 9800X3D", 64, 3500000);

console.log(c1);
for (compu of [c1, c2, c3]) {
    console.log(`Marca: ${compu.marca} - Procesador: ${compu.procesador} - RAM: ${compu.ramGb}GB - Precio: $${compu.precio.toLocaleString()}`);
}

//Pregunta:
//Se debe escbirbior menos codigo ya que no se declara el objeto uno a uno, si no que se hace una unica funcion y luego se pasan los parametros de cada objeto