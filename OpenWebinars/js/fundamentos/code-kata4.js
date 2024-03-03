function getCopy(name, year=2023){
    let copy = name + " - " + year;
    return copy;
}
console.log(getCopy("Romualdo"));

let result = function (name, year=1999){//funcion anónima en una variable
    let copy = name + " | " + year;
    return copy;
}
//usamos la variable result para invocar a la función
console.log(result);//en este caso como no recibe los parametros mínimos, nos devuelve la función en sí
console.log(result("Armando"))//Así nos daría el resultado porque recibe los parámetros mínimos(aquellos no preinicializados)

function formateadoraUno(name, year){
    let copy = name + " - " + year;
    return copy;
}
function formateadoraDos(name, year){
    let copy = name + " | " + year;
    return copy;
}
function getCopyWithCallback(name, year, formatter){
    let copy = formatter(name, year);//especificamos que copy será lo que determine la función formatter, que será introducida por parámetro
    return copy;
}
console.log(getCopyWithCallback("Armando Casas", 2023, formateadoraUno));//creamos uno con el nombre y el año y el formato 1 predefinido por una función
console.log(getCopyWithCallback("Armando Paredes", 2024, formateadoraDos));//creamos uno con el nombre y el año y el formato 2 predefinido por una función

//FUNCION AUTOINVOCADA con parámetros y argumentos. Va dentro de paréntesis y finaliza con punto y coma. Es anónima
(function(name, year){//tenemos parámetros no preinicializados
    console.log(name + " - " + year);//se devuelve algo por consola según argumentos
})("Selene", 2024);//los argumentos van al final de la función autoinvocada entre paréntesis antes del punto y coma
//FUNCION AUTOINVOCADA con parámetros preinicializados y sin argumentos
(function(name = "Selene", year = "2024"){
    console.log(name + " | " + year);
})();
//FUNCION AUTOINVOCADA sin parámetros y sin argumentos
(function(){
    console.log("Hola mundo");
})();