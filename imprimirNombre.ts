/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/

import * as readlineSync from "readline-sync";

// ingresan los datos
let nombre = readlineSync.question("ingrese el nombre: ");
let apellido = readlineSync.question("ingrese el apellido: ");
let calculoFinal: number;
let mensajeAMostrar: string;
let largoMensajeAMostrar: number;



// funcion para devolver una cadena del largo del mensaje a mostrar
function marcoMensaje(caracteres: number): string {
  let cadena: string = "";
  for (let i = 0; i < caracteres; i++) {
    cadena = cadena + "*";
  }

  return cadena;
}

// concateno los string ingresado


mensajeAMostrar =  "* " + nombre + " " + apellido+ " *" 


// evaluo cuantos caracteres tiene el menasaje final a mostrar  
largoMensajeAMostrar = mensajeAMostrar.length;

console.log(marcoMensaje(largoMensajeAMostrar));
console.log(mensajeAMostrar);
console.log(marcoMensaje(largoMensajeAMostrar));