//Palíndromo: Dada una palabra y verifica si es palíndromo (es decir, si se lee igual de adelante hacia atrás)

function esPalindromo(cadena) {
  if (typeof cadena !== "string") {
    return "Debes ingresar una cadena de texto.";
  }

  // Pasamos todo a minúsculas, quitamos espacios y signos de puntuación
  let textoMinusculas = cadena
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúüñ]/gi, "");

  // Invertimos el texto
  let textoInvertido = textoMinusculas.split("").reverse().join("");

  // Comparamos
  return textoMinusculas === textoInvertido
    ? "Es un palíndromo" //si es igual, es palíndromo
    : "No es un palíndromo"; //si NO es igual, NO ES PALÍNDROMO
}

// Ejemplos de uso:
console.log(esPalindromo("Anita lava la tina")); // Es un palíndromo
console.log(esPalindromo("Hola mundo"));         // NO es un palíndromo