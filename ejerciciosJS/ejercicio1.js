//Conteo de caracteres: Dada una cadena de texto y luego muestra el número de caracteres que contiene esa cadena

function contarCaracteres(cadena) {
  if (typeof cadena !== "string") {
    return "Debes ingresar una cadena de texto.";
  }
  return "La cadena tiene " + cadena.length + " caracteres.";
}

// console log 
console.log(contarCaracteres("Hola mundo")); //  10 caracteres.
