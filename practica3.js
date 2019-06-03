
/*
// PARTE 1
Recorre un arreglo usando un callback, imprime cada elemento
Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3
Escribe un callback que recibe un argumento y lo imprime
Crea una función que recibe el callback anterior y lo ejecuta
Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo

*/

/* Recorre un arreglo usando un callback, imprime cada elemento
Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3 
*/


setTimeout(()=> console.log(2000));
setTimeout([2],6000);
setTimeout([3],8000);


[1,2,3].forEach(t => alert(t));
setTimeout(foo, 3000);


[1,2,3].forEach (function printt = (alert(printt));
setTimeout([0],3000);
setTimeout([2],6000);
setTimeout([3],8000);

funcion imprimelos(){
let uno = 1;
let dos = 2;
let tres = 3;

    no1 (){
    setTimeout(uno, 3000);
};

function no2 (){
    setTimeout(dos, 1000);
};

function no3 (){
    setTimeout(tres, 8000);
};

}console.log(imprimelos);

/* Funciona así 

var arregloArr = [ 1, 2, 3 ]
arregloArr.forEach(elementoDelArreglo => console.log(elementoDelArreglo));

// o así --- (ES LO MISMO)
miArreglo.forEach(function(y)){
    console.log(y)
}
*/




// Escribe un callback que recibe un argumento y lo imprime
function reciboargumento(argumenti) {
    argumenti('Este es el argumento que vale');
}
reciboargumento(function(argumentoenviado){
    console.log(argumentoenviado);
})

// Crea una función que recibe el callback anterior y lo ejecuta

let tacos = ["pastor", "suadero", "lengua", "queso"];
let orden = function(taco){
    console.log("Tu taco favorito es de: "+taco);
}
tacos.forEach(orden);


// Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo
function deporte (alguno){
    return function (alguno2){
        return function (alguno3){
            return alguno+alguno2+alguno3;
        }
    }
}


// ** 
let multiplicaciones = (a) => (b) => (c) => a*b*c
multiplicaciones(1)(2)(3)


/* 
// PARTE 2

Convierte todos los ejercicios de la parte 1 a usar Promises
Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)
Agrega un catch al ejercicio anterior
Agrega un finally al ejercicio anterior
Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto la primera termina
Crea una función con 4 promesas, que acaben a tiempos diferentes y regresa cuando todas acaben
Crea una Cadena de Promesas en la cual una se rechaza, asegurate de agregar un catch
Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch


*/



/*
PARTE 2-B 
Explica la salida de las siguientes promesas
Promise.resolve(1).then(v => v + 3).then(v => Promise.reject(v))
  .then(v => v * 3).catch(e => console.log(e));
Promise.reject(2).then(v => v + 3).catch(e => e * 3).then(v => v - 1).then(v => console.log(v));
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(e => console.log(e));
Promise.race([Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(1)])
  .then(v => console.log(v)).catch(e => console.log(e));
Promise.race([Promise.reject(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(1)])
  .then(v => console.log(v)).catch(e => console.log(e));
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(arr => console.log(arr));
 
*/

/*
// PARTE 3
Convierte todos los ejercicios de la parte 2 a usar Async/Await
(incluidos los de analizar la salida)


*/