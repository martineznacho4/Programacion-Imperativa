// 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. Visiten este sandbox

let fizzbuzz = function () {

    for(let i = 1; i <= 100; i++){

        if(i % 3 === 0){
            if(i % 5 === 0){
                console.log("FizzBuzz")
                continue
            }
            console.log("Fizz")
        } else if( i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

// fizzbuzz()


// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;

let mostrarElemento = function (array, index) {
    console.log(array[index])
}


// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

let cantidadDiasMes = function (mes) {
    
    if (mes === 2){
        return 28
    }
    if (mes <= 7){
        if(mes % 2 === 0){
            return 30
        }else{
            return 31
        }
    }else{
        if(mes % 2 !== 0){
            return 30
        }else{
            return 31
        }
    }
}

// 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.

let invertirNumero = function(numero){

    let resultado = ''

    for(let i = numero.toString().length - 1;  i >= 0; i-- ){
        resultado += numero.toString()[i]
    }

    return parseInt(resultado)
}


// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. 
// let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

let repetidos = function (array){

    let aux = []

    let repetidos = []

    for(let i = 0; i < array.length; i++){

        if(!aux.includes(array[i])){
            aux.push(array[i])
        }else{
            repetidos.push(array[i])
        }

    }

    console.log(repetidos.join(', '))

}







