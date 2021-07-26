const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];


edadMadre= originalA.madre.edad;

objetoParseado= JSON.parse(originalB)

existeClaveMadreA= Object.keys(originalA).includes("madre") 
    console.log("La clave madre existe en el objeto originalA");

existeClaveMadreB= Object.keys(objetoParseado).includes("madre")
    console.log("No hay clave madre en el objeto originalB");

clavesDelObjeto=Object.keys(originalA)

nombreDelMasJoven= 
objetoParseado.edad<originalA.edad
? objetoParseado.nombre
: originalA.nombre;



console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);