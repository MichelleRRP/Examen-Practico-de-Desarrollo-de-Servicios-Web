//Suma de elementos de un arreglo: Crea un arreglo 

//Vamos a pasar cada posición del arreglo con un for, para suma
function sumarArregloFor(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {

     if (typeof numeros[i] == "string") { //si encuentra una cadena, va a mandaar el mensaje de error
      return "Deben ser SÓLO números, no letras";
     }else{
        suma += numeros[i];
     }
  }
  return "La suma de las posiciones es: " + suma;
}

console.log(sumarArregloFor([1, "p", 3, 4, 5])); // marca el error
console.log(sumarArregloFor([1, 2, 3, 4, 5])); // la suma es 15
