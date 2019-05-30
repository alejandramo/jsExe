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
  numPos = parseInt(prompt("Introduce un número");
  for (numPos >=0){
    var n2= prompt("introduce otro número")
  } 
}
