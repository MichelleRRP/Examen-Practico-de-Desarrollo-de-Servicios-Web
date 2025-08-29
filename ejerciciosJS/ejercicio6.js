
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let numero = [15, 3, 9, 5, 12, 7, 1, 20, 8];

rl.question("Ingresa un valor para filtrar los números mayores que este: ", function(input) {
    let valorFiltrado = Number(input);

    if (isNaN(valorFiltrado)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        let numeroFiltrado = numero.filter(function(num) {
            return num > valorFiltrado;
        });

        console.log(`Números mayores que ${valorFiltrado}:`, numeroFiltrado);
    }

    rl.close();
});
