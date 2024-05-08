/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico 
verdadero o falso según si el primer número que se indique como parámetro es 
múltiplo del segundo. Recuerde que un numero es múltiplo de otro si al dividirlo 
su resto es cero. Recuerde que la operación mod permite saber si el resto de una división es cero
*/

import * as readlineSync from "readline-sync";

// ingresan los datos
let valor1 = readlineSync.questionInt("ingrese el primer valor: ");
let valor2 = readlineSync.questionInt("ingrese el segundo valor: ");
let resultadoFinal: boolean;
let mensajeAMostrar: string;
let largoMensajeAMostrar: number;

// defino la funcion para el caclulo de la potencia
function esMultiplo(valor1: number , valor2: number): boolean {

  let resultado: boolean;

  if ((valor1 % valor2) == 0) { resultado = true;}
    else {resultado = false;}
  
  return resultado;
}

// funcion para devolver una cadena del largo del mensaje a mostrar
function marcoMensaje(caracteres: number): string {
  let cadena: string = "";
  for (let i = 0; i < caracteres; i++) {
    cadena = cadena + "*";
  }

  return cadena;
}

// llamo la funcion que calcula el resultado en función de los datros ingresados
resultadoFinal = esMultiplo(valor1,valor2);

mensajeAMostrar =
  "* El resultado de evaluar si  " +
  valor1.toString() +
  " es multiplo de " +
  valor2.toString() +
  " es " +
  resultadoFinal +
  " *";
// evaluo cuantos caracteres tiene el menasaje final a mostrar  
largoMensajeAMostrar = mensajeAMostrar.length;

console.log(marcoMensaje(largoMensajeAMostrar));
console.log(mensajeAMostrar);
console.log(marcoMensaje(largoMensajeAMostrar));
