// Para todos los ejercicios, si no se especifica que se espera que haga un listener, asuman que debe imprimir algo
//window.onload = () => {
    // Agrega contenido a div1 (ejemplo: 'I am a div!')  
        document.getElementById("div1").innerHTML = "Texto agregado al primer div : I am a div1";

    // Agrega contenido al span de div2 (ejemplo: 'I am a span!')
        document.querySelector("#div2 .a-span").innerText = 'I am a span! en div2'
        
    // Agrega un listener de click al boton de div3, el listener debe imprimir algo (ejemplo: 'I was clicked')
        document.querySelector(".a-button").addEventListener("click", myFunction);
        function myFunction(){ 
        document.querySelector("#div3").innerHTML= "Click en el botón del div3";
        }

    // Agrega un listener de click al boton de div4, no dejes que haga el submit e imprime 'Default prevented'
        document.querySelector("#div4").addEventListener("click", myFunction());
        function myFunction(){ 
        console.log("Click en el botón del div4");
        }
    
    // Agrega un listener de click a div5, imprime el target del evento
    /*

    */
        document.querySelector("#div5").addEventListener("click", (event) => alert(event.target))



   //// ó     
   document.querySelector("#div5").addEventListener(click, myfunction()); 
    function myFunction(event) { 
    alert(event.target);
    }
    // Agrega un listener de click al span de div6 y a la div6, imprime el target del evento en ambos y si es el listener de div o de span
    document.querySelector("#div6").addEventListener("click", (event))

    // Agrega un listener de click al span de div7 y a la div7, imprime el target del evento en ambos y si es el listener de div o de span, evita que el click del span se propague
    // Selecciona los spans de div8, agrega el numero que son como contenido a cada una (1-6)
    // Agrega un listener de click al primer y ultimo span de div9
    // Agrega un listener de click a los spans impares de div10 (1, 3, 5)
    // Agrega otro span a div11, con 'not-a-span' como clase y 'Not a span!' como contenido
    // Cambia el src de la imagen de div12 a dogge.jpg (adjunto)
    // Pon 'THE-span' como id del span de div13
    /**
     * Agrega listeners a los 3 inputs de div14.
     * change para changeInput
     * blur para blurInput
     * ambos para bothInput
     *
     * Los listeners deben imprimir el nombre del target del evento
     */
    /**
     * Agrega un listener al span de div15 que, cuando el mouse pase por encima,
     * cambie el texto a 'I am being hovered'.
     * Debe volver al texto original cuando el mouse deje de estar encima.
     */
    /**
     * Agrega un listener de scroll a la div16.
     * Debe imprimir algo ('I was scrolled') cada vez que se hace scroll de ella.
     * Se recomienda NO usar alert para este ejercicio.
     */
  