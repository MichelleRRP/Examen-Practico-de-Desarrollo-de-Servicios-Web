const lectorEntrada = require('readline');


const lector = lectorEntrada.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nombres = ["Luis", "María", "Carlos", "Ana", "Sofía", "Pedro"];


lector.question("Ingresa un nombre para buscar: ", function(nombreBuscado) {
  
    const encontrado = nombres.includes(nombreBuscado);


    if (encontrado) {
        console.log(`${nombreBuscado} está en la lista.`);
    } else {
        console.log(`${nombreBuscado} NO está en la lista.`);
    }

    lector.close();
});
