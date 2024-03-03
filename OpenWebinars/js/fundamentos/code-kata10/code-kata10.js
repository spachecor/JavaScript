//ASIGNAMOS QUE AL CLICKAR UN BOTON, NOS SALTE UN ALERT
//primero asignamos a una variable la vinculación con el botón del html
let boton = document.querySelector(".boton");
//luego le asignamos el evento, en este caso al hacer click, que hará que salte una ventana emergente con un mensaje
boton.addEventListener("click", function(event){
    //.stopPropagation() evita que se propaguen los click hacia los elementos superiores desde elementos inferiores (la última función). Ahora el click en el botón
    //no contará como click en el evento inferior
    event.stopPropagation();
    alert("Me pulsaste");
});

//VAMOS A HACER QUE EL USUARIO NO PUEDA ACCEDER AL MENÚ CUANDO PULSA CLICK DERECHO EN LA PG
//como es sobre todo el document, directamente creamos el evento, de tipo contextmenu(menu contextual) y le asignamos su función
document.addEventListener("contextmenu", function(event){
    //usamos el evento que genera la acción para invocar la función prevent default, que interviene el comportamiento por defecto(en este caso del click derecho 
    //gracias al tipo de evento)
    event.preventDefault();
    alert("No lo intentes, no te voy a dejar abrir el menú contextual")
});

//VAMOS AHORA A HACER UN EJEMPLO DE PROPAGACIÓN QUE AFECTARÁ AL PRIMER EVENTO, PUES TAMBÍEN SERÁ UN EVENTO CLICK
//lo que ocurrirá es que se imprimirá en consola cada vez que hagamos click, sin embargo, si hacemos click en el botón, también nos contará ese click. Si no queremos
//que se propague y nos cuente ese click, debemos aplicar el método en el evento del botón .stopPropagation(), y no se propagará.
window.addEventListener("click", function(event){
    console.log("Se ha registrado un click en el window");
});//PODREMOS TENER VARIOS EVENTOS CLICK SI DETENEMOS LA PROPAGACIÓN