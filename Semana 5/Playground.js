// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.

let loopDePares = function(numero){

    for(let i = 0; i <= 100; i++){
        console.log(i)
        if((i + numero)% 2 == 0 ){
            console.log(`El número ${i} es par`)
        }
    }
}


// loopDePares(6)


// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

let loopDeImpares = function(numero, palabra){
    for(let i = 0; i <= 100; i++ ){
        console.log(i)
        if((i + numero) % 2 !== 0){
            console.log(palabra)
        }
    }
}

// loopDeImpares(6,"aaaa" )

// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36

function sumatoria(numero){

    let resultado = 0

    for(let i = 0; i <= numero; i++){
        resultado += i
    }

    return resultado
}
// console.log(sumatoria(8))


// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

function nuevoArreglo(numero){
    let resultado = []

    for(let i = 1; i <= numero; i++){
        resultado.push(i)
    }
    return resultado
}

// console.log(nuevoArreglo(10))


// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

let split = function(string){

    let resultado = []

    for(let i = 0; i < string.length; i++){
        resultado.push(string[i])
    }

    return resultado
}

// console.log(split("hola"))

// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

let arrayHandler = function(arreglo1, arreglo2){

    for(let i = 0; i < arreglo1.length; i++){
        console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`)
    }
}

// arrayHandler([1,2,3,4], ["h","o","l","a"])

// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

let palindromo = function(string){

    let cadena = string.replaceAll(' ','')

    for(let i = 0, j = cadena.length - 1; i < Math.floor(cadena.length/2); i++, j--){
        if(cadena[i] != cadena[j]){
            return false
        }
    }
    return true

}



let palindromo2 = function(string){
    let cadena = string.replaceAll(" ","")
    
    return cadena.slice(0, Math.floor(cadena.length/2)) === cadena.slice(Math.floor(cadena.length/2)+1, cadena.length + 1).split('').reverse().join('');
}
// console.log(palindromo("anilina"))
// console.log(palindromo("ana"))
// console.log(palindromo("enrique"))
// console.log(palindromo("neuquen"))

// console.log(palindromo2("anilina"))
// console.log(palindromo2("ana"))
// console.log(palindromo2("enrique"))
// console.log(palindromo2("neuquen"))

console.log(palindromo("anita lava la tina"))
console.log(palindromo2("anita lava la tina"))