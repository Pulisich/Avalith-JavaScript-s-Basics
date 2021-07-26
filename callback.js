/*
    Completar el siguiente segmento de codigo utilizando el concepto de callback para
    que los mensajes se muestren de manera correcta (1,2,3,4)

    Solo puedes modificar o eliminar los comentarios marcados con "TODO" como crea necesario.
*/

console.log(1);

function esperar2segundos(cb) {
    console.log(2)
    setTimeout(() => {
        console.log(3);
        cb(esperar2segundos)
        
    }, 2000);
    
}

function alTerminar(cb) {
        console.log(4)
}

esperar2segundos(alTerminar);
