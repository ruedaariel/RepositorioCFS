/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico 
verdadero o falso según si el primer número que se indique como parámetro es 
múltiplo del segundo. Recuerde que un numero es múltiplo de otro si al dividirlo 
su resto es cero. Recuerde que la operación mod permite saber si el resto de una división es cero
*/

import * as readlineSync from "readline-sync";

// ingresan los datos
let valor1 = readlineSync.questionInt("ingrese un valor para calcular la cantidad de divisores: ");

let resultadoFinal: number = 0;


// defino la funcion para el caclulo de la potencia
function esMultiplo(valor1: number , valor2: number): boolean {

  let resultado: boolean;

  if ((valor1 % valor2) == 0) { resultado = true;}
    else {resultado = false;}
  
  return resultado;
}



// calculo con un for la cantidad de divisores de un valor ingrsado
for (let i = 0; i <= valor1; i++) {
    
    if (esMultiplo(valor1,i)) {resultadoFinal++;}

}

console.log(" El nro " + valor1, "tiene ", resultadoFinal, " divisores");

