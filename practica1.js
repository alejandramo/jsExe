// Imprime la fecha actual
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
console.log(" " + day + "/ " + month + "/" + year)


// Obten el área de un triángulo. Pidele los 3 lados al usuario
function area (b,h){ 
var b = parseInt(prompt("introduce la medida de la base"));
var h = parseInt(prompt("introduce la medida de la altura"));
var calArea= (b * h) / 2;
alert("el área de tu triángulo es :" + calArea);
}



// Voltea una string dada por el usuario
function volteaString(){
    var string = prompt("introduce el texto que deseas invertir");
    alert(string.reverse());
}


// Voltea una string dada por el usuario sin usar el método de reverse

var cadena = prompt("Escribe la frase que quieres invertir");
var cadenarevertida = "";
   
//Iterar la cadena de manera inversa
for(var i = cadena.length-1; i>=0; i--)
{
//Se concatena el valor a la cadena resultado
  cadenarevertida += cadena[i];
}
alert("la cadena invertida es: "+ cadenarevertida);


// Convierte una temperatura dada en C o F a F o C, respectivamente
/*
  C -> F: (C x 9/5) + 32
  F -> C: (F - 32) x 5/9
  Ejemplos:
  60C: 140F
  45C: 7.222222222222222C
*/

function convErt(){ 
var equiv = parseInt(prompt("¿Cuántos grados quieres convertir?"));
var unidad = prompt("Escribe si quieres convertir a C o F");
    if (unidad.value = "F"){
        alert("la conversión de: " + equiv + " ºC, " + "equivale a: "+((equiv*9/5)+32) + " ºF");
    } else{
        alert("la conversión de: " + equiv + " ºF, " + "equivale a: "+((equiv-32)*5/9) + " ºC");
    }
}


// Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero
/*
  si prop es el nombre,
  a  = {};
  a.prop = true
*/
// Definimos el objeto al que se le agregará la propiedad
var usuario={
  nombre:'blarz',
  apellido:'Hernandez'
}
//Creamos la función
function agregarPropiedad(obj){
  var nuevaPropiedad = prompt("Escribe la propiedad que quieres agregar al objeto");
  var nuevoValorPropiedad = prompt("Escribe el valor de la propiedad");
  return Object.defineProperty(obj,nuevaPropiedad,{value: nuevoValorPropiedad});
}
//Agregamos el la propiedad y su valor al objeto
var objeto = agregarPropiedad(usuario);
console.log(usuario);
// Asignamos el valor de tue a la nueva propiedad
usuario.nuevaPropiedad = true;


// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo

// Para sumar dos números hasta que uno de los dos es negativo
function sumaPositiva(){
var n1 = parseInt(prompt("Introduce un número"));
var n2 = parseInt(prompt("Introduce el segundo número"));
if ( n1 >= 0 & n2>= 0)
  alert("La suma es " + (n1+n2));
 
 else 
  alert("Lo sentimos, tienes que agregar un número positivo, inténtalo nuevamente introduciendo sólo números positivos");
  sumaPositiva();
}


// Para sumar n números hasta que ingrese un negativo
var num1 = parseInt(prompt("introduce un número"));
var numSum = 0;

while (num1>=0){
  numSum += num1;
  var num1 = parseInt(prompt("Ingresa un número"))
}
alert('La suma es '+ ' '+ numSum);


/*
function sumaPositiva(){
  var n1 = parseInt(prompt("Introduce un número"));
  var n2 = parseInt(prompt("Introduce el segundo número"));
  if ( n1 >= 0 & n2>= 0)
    alert("La suma es " + (n1+n2));
   
   else 
    alert("Lo sentimos, tienes que agregar un número positivo, inténtalo nuevamente introduciendo sólo números positivos");
    sumaPositiva();
  }
function sumaOno(){
  numPos = parseInt(prompt("Introduce un número")
  while (numPos >=0){
    var n2= prompt("Introduce otro número")
  } 
}
*/
// Agregar un ciclo para recibir n números
// Siempre que el número recibido sea + / hacer suma de los números / mostrar el resultado y pedir un nuevo número
// Cuando el usuario introduzca un -, detener la suma y pedir que se introduzca un +





// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
function convertirCadenita(){
var cadenita = prompt("Introduce una frase :): ");
alert(cadenita.replace(/\b\w/g, l => l.toUpperCase())) 
}


// Revisa si un número dado es múltiplo de 3 o de 7
function multiple(valor, multiple){
  var valor = parseInt(prompt("Ingresa el número que quieres revisar"));
  var multiple = parseInt(prompt("Introduce el múltiplo que quieres explorar"));
  resto = valor % multiple;
    if(resto % 3 === 0) {
        alert("el número " + valor + " es múltiplo de " + multiple);
      } else if (resto % 7 === 0){
        alert("el número " + valor + " es múltiplo de " + multiple);
      } else{ 
        alert("el número que introdujiste no es múltiplo de 3 o 7");
      }
}


// Revisa cuantas veces se repite un caracter dado en una cadena dada




// Revisa cuantas veces se repite un valor dado en un arreglo
function valorDeArreglo (valor, arr){
  var valor = parseInt(prompt("Introduce un valor a buscar").value);
  var valores = 0;
  var arr = [];

  while(valores >=0){
    arr.push(valores);
    valores = prompt("Introduce un valor numérico: "); 
  }
  var conta = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] == valor){
      conta ++;
    }
  }
  alert(conta);
};





// Divide un número de 3 dígitos en sus centenas, decenas y unidades
// 103 -> 1 centena, 0 decenas, 3 unidades

function numCentenas(cantidad){
  var num = cantidad.toString().split(' ');
  var resultado = num[0]+" centenas, "+ num[1]+ " decenas," + num[2] + " unidades";
  alert(resultado);
}
numCentenas(563);


// Regresa todos los caracteres que no sean letras de una cadena
function puraLetra(){
  var 
}



// Haz una función que lanza un error con el mensaje dado por el usuario
// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack
// Suma los contenidos de un arreglo de números
// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original
// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/
// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
// Convierte un número binario dado por el usuario a decimal
// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)
// Regresa la cantidad de valores que comparten dos arreglos diferentes
// Valida que una cadena dada no tenga espacios en blanco
// Dada una cadena, determina su valor de scrabble
/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/
// Determina si una cadena dada por el usuario es un acrónimo
// Implementa una lista ligada
// Implementa una lista doblemente ligada
// Obten el Máximo común divisor de dos números dados