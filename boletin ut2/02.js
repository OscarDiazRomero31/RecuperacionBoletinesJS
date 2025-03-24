/*Diseñar un algoritmo para hallar el valor absoluto 
de un número leído de teclado y presentarlo en 
pantalla.*/

let num = prompt("Introduce un número",0);
let abso;

if (num>=0){
 abso = num;
}
else{
     abso = -num;
}

alert("El valor absoluto del número "+num+" es "+abso);