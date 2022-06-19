const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 1

// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su doble.
// Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 

let doble = function(numero){
    return numero * 2
}

let multiplicacion = function (numero1, numero2){
    return numero1 * numero2
}

let division = function(numero1, numero2){
    if(numero1 !== 0 && numero2 !== 0){
        return numero1/numero2
    }
}

// -------------------------------------------------------------------

// Ejercicio 2:

// 1) Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades que deberás completar con tus datos:
        // a) nombre
        // b) apellido 
        // c) edad
        // d) tiene Bici (TRUE/FALSE)

let ciclista = {
    nombre : "Nacho",
    apellido : "Martinez",
    edad : 22,
    tieneBici : true
}

// 2. Teniendo en cuenta los datos del punto número 1.
// Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones : 
//     si edad es mayor o igual a 18 y tiene bici  “puede competir”
//     si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
//     si no tiene bici “No podrá competir ” 
// *Deberás realizar la invocación de la función de forma que se pueda ver el resultado 

let competir = function(persona){

    if(persona.tieneBici){
        if(persona.edad >= 18){
            return "Puede competir"
        }else if(persona.edad < 18){
            return "Puede competir, pero con un adulto acompañante"
        }
    }
    return "No podra competir"
}

console.log(competir(ciclista))

// -------------------------------------------------------------------------------------------

// Ejercicio 3

// 1) Crear un array VACÍO llamado competidores. 

let competidores = []

// Dados estos tres objetos	
let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80,
    }

let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90
    }

let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70
    }

// a) Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar)

competidores.push(competidor1, competidor2, competidor3)

// b) Mostrar por consola el array para ver que contenga esos objetos.

console.log(competidores)


// 3) Crea una función que reciba el array competidores como parámetro, e incremente en 100 la cantidad de kilómetros recorridos de cada uno de los competidores, llámala competencia100Km .
// * Debes utilizar alguna estructura de repetición vista en la materia.

let competencia100km = function(participantes){

    for(let i = 0; i < participantes.length; i++ ){
        participantes[i].kilometrosRecorridos += 100
    }

}


//  4) Mostrar por consola el array de competidores antes y después de la ejecución de la función.

console.table(competidores)
competencia100km(competidores)
console.table(competidores)