/*Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.*/

let entrada = prompt("Introduce números positivos separados por comas:");

let numeros = entrada.split(",").map(Number);

let menor = Math.min(...numeros);
let mayor = Math.max(...numeros);
let suma = numeros.reduce((a, b) => a + b, 0);
let media = suma / numeros.length;

alert("Menor: " + menor + "\nMayor: " + mayor + "\nMedia: " + media.toFixed(2));
