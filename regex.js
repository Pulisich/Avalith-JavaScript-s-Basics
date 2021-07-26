const texto = 'Mar del Plata​ es una ciudad ubicada en el sudeste de la provincia de Buenos Aires';
let textoCensurado = null;

textoCensurado= texto.replace(/[a-z]/gi, "X")

console.log(textoCensurado)