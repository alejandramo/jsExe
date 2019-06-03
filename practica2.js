// Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro) y calcule su edad en años de perro (edad x 7)
function calculateDogAge(){
    var edadHumanaDePerrit = Number(prompt("¿Cuál es la edad humana de perrit?"));
    var edadPerritDePerrit = (edadHumanaDePerrit)*7;
    alert ("Perrit tiene: " + edadPerritDePerrit + " en edad perrit");
};

// Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día) y calcule cuantos dulces consumirías por el resto de tu vida.
    // El resto de tu vida es definido por una edad constante (por ejemplo, 75 años)
function  getCandySupply(edad, cantidadXdia){
    var edad = Number(prompt("¿Cuál es tu edad?"));
    var cantidadXdia = Number(prompt("¿Cuántos dulces comes al día?"));
    const tiempodevidapromedio = Number(90);
    var dulcesporcomer = (365*(tiempodevidapromedio-edad)*cantidadXdia);
    alert("Si sigues comiendo " + cantidadXdia + " de dulces, cuando tengas " + tiempodevidapromedio + " te habras comido " + dulcesporcomer + " dulces");
};


// Crea una función que permita encadenar llamadas
  // a().a().a() ... etc


// Crea una función que recibe un tipo (formal/casual) y dos funciones, una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
// La función debe regresar el tipo de saludo que va a usarse
//FORMA 1 - No es como la instrucción indica
function saludo(){
    let tuTipo = prompt("¿Quieres un saludo casual o formal?");
    let formal = "Buenos días";
    let casual = "¡Hola!";
    if (tuTipo === "casual"){ 
        alert(casual);
    } else if (tuTipo === "formal"){ 
        alert(formal);
    } else {
        alert("Sólo puedes escoger entre casual o formal D:");
    }
}

//FORMA 2 -
function saludoFormal(){
    alert("Buenos días");
}
function saludoCasual(){
    alert("¡Hola!");
}
function saludaYa(){
    let tipo = prompt("¿Prefieres un saludo formal o casual?");
    if (tipo==="formal"){
        alert(saludoFormal());
    } else if (tipo === "casual"){
        alert(saludoCasual());
    } else {
        alert("Sólo puedes escoger entre casual o formal D:"); 
    }
};


//FORMA 3 -
function saludaYa(){
    function saludoFormal(){
        alert("Buenos días");
    }
    function saludoCasual(){
        alert("¡Hola!");
    }
    let tipo = prompt("¿Prefieres un saludo formal o casual?");
    if (tipo==="formal"){
        alert(saludoFormal());
    } else if (tipo === "casual"){
        alert(saludoCasual());
    } else {
        alert("Sólo puedes escoger entre casual o formal D:"); 
    }
}


// Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map







// Explica cual es la salida de las siguientes funciones y porqué:
/*
var a = 12;
(function() {
  alert(a);
})();
--> La salida es 12 porque la función sólo hace un alert de la variable global a, que es igual a 12
*/

/*
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();
--> la salida es 12, porque la función cambia el valor de a=5 a a=12 y hace un alert con el nuevo valor 
*/

/*
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();
--> La salida es 12, aunque inicialmente el valor de a es 10, posteriormente se cambia a 12, se regresa la función y se muestra un alert con el ultimo valor de a
*/

/*
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();
--> la salida es 10, porque aunque a tiene un nuevo valor después que se declaró la primera vez, el segundo valor
está anidado en una función y en otro nivel. Por lo que la salida mandará el valor con el que trabaja la función en ese nivel D:
*/

/*
var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    alert(a);
  });
})();
x();
--> La salida es 12 ya que la llamada al alert está dentro de la función en la que se ha cambiado el valor de a=12
*/

/*
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();
--> Salida = 15 porque el alert se manda desde la función que da el valor 15 a a
*/

/*
function leFunction() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}
leFunction();

--> la salida es: undefined y 2, porque cuando se hace el primer console.log(a), todavía no se ha definido a
Después el console.log(foo()) hace que se ejecute la función que retorna 2
*/

/*
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
*/

/*
var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var aCall = obj.prop.getFullname;
console.log(aCall());
console.log(obj.fullname);
*/

/*
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
*/

/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/

/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)

  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/