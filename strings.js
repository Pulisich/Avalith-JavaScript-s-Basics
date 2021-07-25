const stringA = 'Rojo,Verde,Amarillo,Azul';
const stringB = 'Sergio';
const stringC = 'Damian';
const stringD = 'Mi nombre es Damian y tengo 28 años';
// -------
let tamanioA = 0;
let cantidadLetraR = 0;
let nombreCompleto = '';
let fraseOtroNombre = '';
let posicionNombre = null;
let arregloParseado = [];


tamanioA = stringA.length;

//cantidadLetraR= {stringA.filter (r => r !== 'R')} ;

nombreCompleto= stringB + " " + stringC;

fraseOtroNombre= stringD.replace ('Damian', stringB);

posicionNombre= stringD.search ('Damian') ;

arregloParseado= parseInt (tamanioA);



console.log(tamanioA);
console.log(cantidadLetraR);
console.log(nombreCompleto);
console.log(fraseOtroNombre);
console.log(posicionNombre);
console.log(arregloParseado);