/*Escriba un algoritmo que lea un instante de tiempo 
dado en horas y minutos y escriba como respuesta los 
mensajes “Buenos días” “Buenas tardes” “Buenas noches”, 
de acuerdo con las siguientes reglas:

a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.
*/

let hora = prompt("Introduce una hora con sus minutos usando el formato '00:00'",0);

let inicioDia="07:30";
let finalDia="14:00";
let inicioTarde="14:01";
let finalTarde="20:30";
let inicioNoche="20:31";
let finalNoche="07:29";

if (hora>=inicioDia && hora<=finalDia){
     alert("Buenos días");
}
else if (hora>=inicioTarde && hora<=finalTarde){
     alert("Buenas tardes");
}
else{
     alert("Buenas noches");
}