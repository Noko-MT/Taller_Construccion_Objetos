const prompt = require('prompt-sync')();
function Vehiculos(marca, modelo, color, ano, gasolina) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.ano = ano;
    this.gasolina = gasolina

    this.desplazar = function() {
        const consumo = 5; //Consumo en galones creo XD
        if (this.gasolina >= 0 && this.gasolina >= consumo){
            this.gasolina -= consumo;
            return "Avanzas 1 kilometro"
        }
        return "No hay suficiente gasolina en el tanque"
    }

    this.rePintura = function() {
        const pintura = prompt("Digite el nuevo color :");
        this.color = pintura;
    }

    this.ultimoModelo = function(){
        const lastModelo = 2026;
        if (this.ano === lastModelo) { //No estoy seguro si es el ultimo modelo es 2026 o 2027 Xd
            return "El vehiculo es ultimo modelo";
        }
        return "El vehiculo No es ultimo modelo";
    }
}

//const dato = prompt("datos :");

const inventario = []
const v1 = new Vehiculos("Honda", "Civic", "Blanco", 2025, 100);
const v2 = new Vehiculos("Ford", "Munstang", "Roja", 2025, 150);
const v3 = new Vehiculos("renaut", "clio", "Verde", 2025, 150);
inventario.push(v1);
inventario.push(v2);


// for (let i = 0; i <= 2; i++){
//     //console.log(v1.desplazar());
//     console.log(i);
// }



let opt = "";
while(opt != '4') {
    opt = prompt("Elige la opcion a consultar digitando el numero: 1.Conducir (Ten encuenta el conbustible), 2.Cambiar color vehiculo, 3.Validar si el vehiculo es ultimo modelo, 4.Salir: ");
    if (opt == '1') {
        for (let mostar of inventario){
            console.log(mostar);
        }
        let optvehiculo = prompt("Digita una opcion para validar entre los 3 vehiculos almacenados del 0 al 2 para cada uno; ");
        console.log(`Tanque antes del desplazamiento: ${inventario[optvehiculo].gasolina}`)
        inventario[optvehiculo].desplazar();
        console.log(`La gasolina actual es; ${inventario[optvehiculo].gasolina}`)
     }
}

//Respuesta
//Que el usuario actualiza lo datos y no nosotros


//console.log(inventario[0].gasolina);
//console.log(v1.desplazar());
// console.log(v1);
// console.log(v1.rePintura());
//console.log(v1.ultimoModelo());
//console.log(v1);