let adress = "Avenida de dos carriles, 23";

console.log(typeof adress);//nos dice el tipo (string)

let price = 2.33;

console.log(typeof price);//nos dice el tipo (number)

let active = false;

console.log(typeof active);//nos dice el tipo(boolean)

let sample;

console.log(typeof sample);//nos dice el tipo(undefined)

let sampleNull = null;

console.log(typeof sampleNull);//nos dice el tipo(object)

//CASTING DE STRING A BOOLEAN DA TRUE SI TIENE CONTENIDO Y FALSE SI ES UN STRING VACÍO
let booleanAdress = Boolean(adress);
console.log(booleanAdress);//dice que es true, porque nos dirá true si contiene algo y false si es un string vacío

//CASTING DE STRING A NUMBER-> SI CONTIENE LETRAS, DARÁ NoN, SI SOLO CONTIENE NÚMEROS DEVOLVERÁ LOS NÚMEROS
let numberAdress = Number(adress);
console.log(numberAdress);//dice que NoN, not a number, no tiene representación numérica

//CASTING DE NUMBER A BOOLEAN-> SI EL Nº=0 O NO HAY Nº, DA FALSE, SI EXISTE (+ ó -), DA FALSE
let boolean = Boolean(54);
console.log(boolean);//da true porque hay un nº!=0