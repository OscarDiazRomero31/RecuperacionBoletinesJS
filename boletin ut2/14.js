/*Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. 
Para ello disponemos de un documento donde se recoge si se trata de un hombre (H) o una mujer 
(M) y su sueldo correspondiente. La entrada de datos termina cuando se lee un * como sexo. 
Se validarán todas las entradas, el sexo será H o M y el sueldo entre los 1000 y 2000 euros 
independientemente de que el trabajador sea hombre o mujer. */

let totalHombres = 0, totalMujeres = 0;
let sumaHombres = 0, sumaMujeres = 0;

while (true) {
  let sexo = prompt("Introduce el sexo (H para hombre, M para mujer, * para salir):").toUpperCase();

  if (sexo === "*") {
    break;
  }

  if (sexo !== "H" && sexo !== "M") {
    alert("Sexo no válido. Introduce H, M o *.");
    continue;
  }

  let sueldo = parseFloat(prompt("Introduce el sueldo (entre 1000 y 2000):"));

  if (isNaN(sueldo) || sueldo < 1000 || sueldo > 2000) {
    alert("Sueldo no válido. Debe estar entre 1000 y 2000.");
    continue;
  }

  if (sexo === "H") {
    sumaHombres += sueldo;
    totalHombres++;
  } else {
    sumaMujeres += sueldo;
    totalMujeres++;
  }
}

let mediaHombres = totalHombres > 0 ? (sumaHombres / totalHombres).toFixed(2) : "No hay datos";
let mediaMujeres = totalMujeres > 0 ? (sumaMujeres / totalMujeres).toFixed(2) : "No hay datos";

alert("Media de sueldos:\n" +
      "Hombres: " + mediaHombres + "\n" +
      "Mujeres: " + mediaMujeres);
