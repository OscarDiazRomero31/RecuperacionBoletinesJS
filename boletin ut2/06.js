/*Diseñar un algoritmo que tomando las coordenadas cartesianas de un punto en el plano y calcule e imprima el 
cuadrante al que pertenece dicho punto. También debe detectar cuando está en el origen o sobre un eje.*/

let x = parseFloat(prompt("Introduce la coordenada X:"));
let y = parseFloat(prompt("Introduce la coordenada Y:"));

if (x === 0 && y === 0) {
  alert("El punto está en el origen.");
} else if (x === 0) {
  alert("El punto está sobre el eje Y.");
} else if (y === 0) {
  alert("El punto está sobre el eje X.");
} else if (x > 0 && y > 0) {
  alert("El punto está en el primer cuadrante.");
} else if (x < 0 && y > 0) {
  alert("El punto está en el segundo cuadrante.");
} else if (x < 0 && y < 0) {
  alert("El punto está en el tercer cuadrante.");
} else if (x > 0 && y < 0) {
  alert("El punto está en el cuarto cuadrante.");
}
