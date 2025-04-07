/*Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la entrada estándar, 
calcule cuál es el número mínimo de monedas de curso legal que equivalen a dicha cantidad de dinero. */

let cantidad = parseFloat(prompt("Introduce una cantidad de dinero en euros (ej. 17.53):"));

if (isNaN(cantidad) || cantidad < 0) {
  alert("Cantidad no válida.");
} else {
  let centimos = Math.round(cantidad * 100);

  let monedas = [200, 100, 50, 20, 10, 5, 2, 1];

  let resultado = "Monedas necesarias:\n";

  for (let moneda of monedas) {
    let cantidadMonedas = Math.floor(centimos / moneda);
    if (cantidadMonedas > 0) {
      resultado += `${cantidadMonedas} moneda(s) de ${moneda / 100}€\n`;
      centimos -= cantidadMonedas * moneda;
    }
  }

  alert(resultado);
}
