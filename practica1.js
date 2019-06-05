// Imprime la fecha actual
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
console.log(" " + day + "/ " + month + "/" + year)

// Otra manera
console.log(Date());


// Obten el área de un triángulo. Pidele los 3 lados al usuario
function area (b,h){ 
var b = parseInt(prompt("introduce la medida de la base"));
var h = parseInt(prompt("introduce la medida de la altura"));
var calArea= (b * h) / 2;
alert("el área de tu triángulo es :" + calArea);
}

// función pidiendo los 3 lados


// Voltea una string dada por el usuario
function volteaString(){
    var string = prompt("introduce el texto que deseas invertir");
    alert(string.reverse());
}

// Voltea una string dada por el usuario sin usar el método de reverse
var cadena = prompt("Escribe la frase que quieres invertir");
var cadenarevertida = "";  
//Iterar la cadena de manera inversa
for(var i = cadena.length-1; i>=0; i--){
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
  nombre:'Germán',
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
function sumaMas(){
  var num1 = parseInt(prompt('Introduce un número'))
  var num2 = 0

  while(num1 >= 0){
    num2 += num1;
    var num1 = parseInt(prompt('Ingresa un número'))
    }
    alert('La suma es: ' + num2 + "  // Para seguir sumando debes ingresar sólo números positivos");
}


// Para sumar dos números hasta que uno de los dos es negativo
function sumaPositiva(){
  var n1 = parseInt(prompt("Introduce un número"));
  var n2 = parseInt(prompt("Introduce el segundo número"));
  if ( n1 >= 0 & n2>= 0){
    alert("La suma es " + (n1+n2));
  }else{ 
    alert("Lo sentimos, tienes que agregar un número positivo, inténtalo nuevamente introduciendo sólo números positivos");
    sumaPositiva();
  }
}


// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
function convertirCadenita(){
var cadenita = prompt("Introduce una frase :): ");
alert(cadenita.replace(/\b\w/g, l => l.toUpperCase())) 
};


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
};


// Revisa cuantas veces se repite un caracter dado en una cadena dada

function buscaCaracter(){
  var cadenaC = prompt("Introduce tu texto");
  var caracter = prompt("¿Qué letra quieres contar");
  var contar = 0;
  
  for (var i = 0; i < cadenaC.length; i++) {
      if(cadenaC[i].toLowerCase() === caracter) contar ++; 
  }
   alert ("Tu frase tiene: " + contar + "  " + caracter);
}


// Revisa cuantas veces se repite un valor dado en un arreglo
function busqueda(){
  var x = [1, 2, 3, 4, 5, 6, 7, 3, 4, 4, 5, 5, 6];
  var busquele = parseInt(prompt("Num"));
  var j = 0;
  for (i = 0; i < x.length; i++) {
      if (x[i] == busquele) j++;
  }
  alert(" El " + busquele + " se repite "+ j + " veces ")     
}


// Divide un número de 3 dígitos en sus centenas, decenas y unidades
// 103 -> 1 centena, 0 decenas, 3 unidades
function numCentenas(){
  var numeroCompleto = prompt("Introduce un número de 3 cifras");
  var resultado = parseInt(numeroCompleto[0])+" centenas, "+ parseInt(numeroCompleto[1])+ " decenas, " + parseInt(numeroCompleto[2]) + " unidades";
  alert(resultado);
};


// Regresa todos los caracteres que no sean letras de una cadena
function puraLetra(){
  var dameLaCadena = prompt(" Introduce texto y números")
  var separaArr = [];
  var noletras = /[A-Za-z]/;
 
  for (var i = 0; i < dameLaCadena.length; i++) {
    if (!dameLaCadena[i].match(noletras)) {
        separaArr.push( dameLaCadena[i] ); 
    } 
  }
  alert ((separaArr.join(" "))+ " no son letras");
}




// Haz una función que lanza un error con el mensaje dado por el usuario
function errOr() {
  var mensajeU = prompt("Escribe tu mensaje");
  console.error(mensajeU);
}

// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack
function errOr() {
  var mensajeU = prompt("Escribe tu mensaje");
  try{
    mensajeU();
  } catch(error){
  console.error(mensajeU);
}


// Suma los contenidos de un arreglo de números
function sumaNumArr(){
  var ponNum = [2, 3, 8, 1, 20, 13];
  var arr = 0
  var i = 0

  for (i=0 ; i<ponNum.length; i++) {
    arr = arr + ponNum[i];
  } alert ("La suma de cada número del arreglo es " + arr)
}


// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original
function arralCuadrado(){
  var arregloexponencial = [2, 3, 4, 5, 6];
  var arr = []
  for (i=2; i<=arregloexponencial.length; i++) {
    arr.push(Math.pow([i], 2));
  } alert (arr)
}
// HAY ERROR / No se imprime el cuadrado el último número



// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/
function calculaAngulo(){
  var angulo= parseInt(prompt("Ingresa los grados de tu ángulo"))
  if(angulo < 90 & angulo > 0){
    alert("Un ángulo de: "+ angulo + " º es agudo")
  }else if(angulo === 90){
    alert("Un ángulo de: "+ angulo + " º es recto")
  }else if(angulo > 90 & angulo <180){
    alert("Un ángulo de: "+ angulo + " º es obtuso")
  }else if(angulo === 180){
    alert("Un ángulo de: "+ angulo + " º es llano")
  } else{
    alert("Los grados ingresados deben estar entre 0 y 180")
  }
} 

// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
function devuelveArr(){
  var arr1 = [1, 2, 4, 6, 3, 2, 4, 2, 7, 8, 9]
  var arrNuevo = [...new Set(arr1)];
  alert("El nuevo arreglo es: " + arrNuevo);
}


// Quita los valores repetidos de un arreglo (sin usar otro arreglo)

/*
function quitaElementos(){
  var arrcero = [1, 4, 5, 2, 3, 5, 6, 5, 6, 7, 7, 9]
  var i,
  for(i=0; i<arreglo.length; i++){
    obj[arrcero[i]]=0;
  }
  alert(arrcero)
}

 var arrcero = [1, 4, 5, 2, 3, 5, 6, 5, 6, 7, 7, 9];
Array.prototype.unique= function(arrcero){
  return function(){return this.filter(arrcero)}}(function(a, b, c){return c.indexOf(a,b+1)<0});
  alert(arrcero)
*/

// Convierte un número binario dado por el usuario a decimal
function convierteaDe(){
  var numBin = parseInt(prompt("Introduce un número binario"))
  alert(numBin.toString(10))
}

// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)
function convierteavarios(){
  var numDecimal = parseInt(prompt("Introduce un número binario"))
  alert("El numero decimal " + numDecimal + " es " + numDecimal.toString(2) + " en binario.");
  alert("El numero decimal " + numDecimal + " es " + numDecimal.toString(8) + " en octal.");
  alert("El numero decimal " + numDecimal + " es " + numDecimal.toString(16) + " en hexadecimal."); 
}

// Regresa la cantidad de valores que comparten dos arreglos diferentes
function comparaArreglos(){
  var array1=[1, 2, 3, 4, 5, 6, 9, 10 ]
  var array2= [2, 4, 6, 78, 9]
  var iguales=0;
  
  for(var i=0;i<array1.length;i++){
	for(var j=0;j<array2.length;j++){
		if(array1[i]==array2[j])
			iguales++;
	}
}
alert(iguales);
}




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