//2.- Reversión de cadenas: Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso. 
 function invertirPalabras(frase) {

    let palabras = frase.trim().toLowerCase().split(/\s+/);


    // Invertir el orden de las palabras
    let fraseInvertida = palabras.reverse().join(" ");


    return fraseInvertida;
}

let fraseOriginal = "puro pinche pumas";
let fraseInvertida = invertirPalabras(fraseOriginal);


console.log("Frase Original: " + fraseOriginal);
console.log("Frase con palabras invertidas: " + fraseInvertida);
