/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/

import * as readlineSync from "readline-sync";

// ingresan los datos
let base = readlineSync.questionInt("ingrese el nro base del calculo: ");
let exponente = readlineSync.questionInt("ingrese el exponente a elevar: ");
let calculoFinal: number;
let mensajeAMostrar: string;
let largoMensajeAMostrar: number;

// defino la funcion para el caclulo de la potencia
function calcularPotencia(base: number, exponente: number): number {
  let resultado: number;

  if (exponente == 0) {
    return (resultado = 1);
  }

  resultado = base;

  // evaluo con un for la potencia
  for (let i = 2; i <= exponente; i++) {
    resultado = resultado * base;
  }

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
calculoFinal = calcularPotencia(base, exponente);

mensajeAMostrar =
  "* El resultado de elevar " +
  base.toString() +
  " a la potencia " +
  exponente.toString() +
  " es = " +
  calculoFinal.toString() +
  " *";
// evaluo cuantos caracteres tiene el menasaje final a mostrar  
largoMensajeAMostrar = mensajeAMostrar.length;

console.log(marcoMensaje(largoMensajeAMostrar));
console.log(mensajeAMostrar);
console.log(marcoMensaje(largoMensajeAMostrar));
