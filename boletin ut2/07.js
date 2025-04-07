/*Elabora un programa que dado un precio y una cantidad pagada, obtengamos el cambio con el mínimo número de elementos 
(monedas o billetes). Para devolver el cambio disponemos de una cantidad ilimitada de monedas y de billetes. */

let precio = parseFloat(prompt("Introduce el precio del producto:"));
let pagado = parseFloat(prompt("Introduce la cantidad pagada:"));

if (pagado < precio) {
  alert("La cantidad pagada es insuficiente.");
} else if (pagado === precio) {
  alert("No hay cambio que devolver.");
} else {
  let cambio = (pagado - precio).toFixed(2);
  alert("Cambio a devolver: " + cambio + " €");

  // Denominaciones disponibles (en euros)
  let denominaciones = [500, 200, 100, 50, 20, 10, 5, 2, 1,
                        0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

  let resultado = "Cambio desglosado:\n";
  cambio = parseFloat(cambio); // aseguramos tipo número

  for (let i = 0; i < denominaciones.length; i++) {
    let valor = denominaciones[i];
    let cantidad = Math.floor(cambio / valor);
    if (cantidad > 0) {
      resultado += `${cantidad} x ${valor.toFixed(2)} €\n`;
      cambio = (cambio - cantidad * valor).toFixed(2);
    }
  }

  alert(resultado);
}
