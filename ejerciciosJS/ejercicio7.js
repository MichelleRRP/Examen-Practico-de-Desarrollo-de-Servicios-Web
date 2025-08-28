//Concatenación de arreglos: Crea dos arreglos de strings y luego concatenarlos en un solo arreglo

function concatenarArreglos(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) { //comprobamos que sean arreglos y no otra cosa
    return "Error: Ambos parámetros deben ser arreglos.";
  }

    //checamos que arr1 sea string
    for (let i = 0; i < arr1.length; i++) {

     if (typeof arr1[i] !== "string") { //si algo diferente a una cadena, va a mandaar el mensaje de error
      return "Deben ser SÓLO STRING";
     }
    }

    //checamos que arr2 sea string
    for (let i = 0; i < arr2.length; i++) {

     if (typeof arr2[i] !== "string") { //si algo diferente a una cadena, va a mandaar el mensaje de error
      return "Deben ser SÓLO STRING";
     }
    }

  
    let combinado1 = arr1.concat(arr2); // usamos concat ps pa concatenar ajsjasj

  return {
     combinado1
  };
}

// Ejemplo de uso
let frutas = ["manzana", "pera", "uva"];
let colores = ["rojo", "verde", "azul"];

console.log(concatenarArreglos(frutas, colores));
