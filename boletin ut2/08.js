/*Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, 
sus cuadrados, sus cubos y la suma de todos ellos. */

let num = parseInt(prompt("Introduce la cantidad de números naturales que quieras ver, mostraremos el cuadrado, su cubo y la suma de todos ellos",0));

let suma=0;

for (let i = 1; i < num+1; i++) {
     console.log(i);
     console.log("El cuadrado de "+i+" es "+i*i);
     console.log("El cubo de "+i+" es "+Math.pow(i, 3));
     suma= suma+i;
   }

console.log("La suma de todos los número naturales que hemos sacado es "+suma)