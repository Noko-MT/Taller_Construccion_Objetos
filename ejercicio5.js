//Constructor
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
        const pintura = prompt("Digite el nuevo color : ");
        this.color = pintura;
        return `El nuevo color del ${this.marca} es: ${pintura}`
    }

    this.ultimoModelo = function(){
        const lastModelo = 2026;
        if (this.ano === lastModelo) { //No estoy seguro si es el ultimo modelo es 2026 o 2027 Xd
            return "El vehiculo es ultimo modelo";
        }
        return "El vehiculo No es ultimo modelo";
    }
}

// funcion mostrar el inventariio
function Mostrarinventario(inventario) {
    for (let mostar of inventario){
        console.log(`########`);
        console.log(`Marca: ${mostar.marca}`);
        console.log(`Modelo: ${mostar.modelo}`);
        console.log(`Color: ${mostar.color}`);
        console.log(`Año: ${mostar.ano}`);
        console.log(`Gasolina: ${mostar.gasolina}`);
        console.log(``);
    }
}

const inventario = []

//Inventario fijo
// const v1 = new Vehiculos("Honda", "Civic", "Blanco", 2025, 100);
// const v2 = new Vehiculos("Ford", "Munstang", "Roja", 2025, 150);
// const v3 = new Vehiculos("renaut", "clio", "Verde", 2026, 150);
// inventario.push(v1);
// inventario.push(v2);
// inventario.push(v3);

//Ingresar datos Vehiculos Fijo en 
for (let i = 0; i <= 2; i++){
    const marca = prompt(`Digita la Marca del vehiculo ${i+1}: `);
    const modelo = prompt(`Digita la Modelo del vehiculo ${i+1}: `);
    const color = prompt(`Digita la Color del vehiculo ${i+1}: `);
    const ano = Number(prompt(`Digita la Año del vehiculo ${i+1}: `));
    const gasolina = Number(prompt(`Digita cuanta gasolina tien el vehiculo ${i+1}: `));
    const vh = new Vehiculos(marca, modelo, color, ano, gasolina);
    inventario.push(vh);
}
Mostrarinventario(inventario);


//Menu 
let opt = "";
while(opt != '4') {
    opt = prompt("Elige la opcion a consultar digitando el numero: 1.Conducir (Ten encuenta el conbustible), 2.Cambiar color vehiculo, 3.Validar si el vehiculo es ultimo modelo, 4.Salir: ");
    if (opt == '1') {
        while(opt != '5'){
            opt = prompt('Presiona 5 para salir del menu conducir 1 para continuar: ');
            if(opt == '5'){break;}
            Mostrarinventario(inventario);
            let optvehiculo = prompt("Digita una opcion para validar entre los 3 vehiculos almacenados del 0 al 2 para cada uno: ");
            console.log(`Tanque antes del desplazamiento: ${inventario[optvehiculo].gasolina}`)
            console.log(inventario[optvehiculo].desplazar());
            console.log(`La gasolina actual es: ${inventario[optvehiculo].gasolina}`)
        }
    }
    if (opt == '2') {
        while(opt != ''){
            opt = prompt('Presiona 1 para cambiar el color del vehiculo 2 para salir: ');
            if(opt == '2'){break;}
            Mostrarinventario(inventario);
            let optvehiculo = prompt("Digita una opcion para validar entre los 3 vehiculos almacenados del 0 al 2 para cada uno: ");
            //let nuevoColor = prompt("Digita de que color deseas cambiar el vehiculo");
            console.log(inventario[optvehiculo].rePintura());
        }
    }
    if (opt == '3') {
        Mostrarinventario(inventario);
        let optvehiculo = prompt("Digita una opcion para validar entre los 3 vehiculos almacenados del 0 al 2 para cada uno: ");
        console.log(inventario[optvehiculo].ultimoModelo());
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