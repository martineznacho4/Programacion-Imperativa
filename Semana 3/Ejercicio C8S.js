

// console.log('texto', 'texto2')


// 1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function siguientesDiez(numero){
    for(let i = numero; i <= numero + 10; i++) {
        console.log(i + 1)
    }
}
siguientesDiez(3)

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

for (let i = 5; i <= 20; i+= 3) {
    console.log(i);;
}

// 3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

let sumatoria = 0
for(let i = 0; i <= 100; i++){
    sumatoria += i
}

// console.log(sumatoria)

// // 4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

let numero = 9
let factorial = 1
for(let i = 1; i <=numero; i++){
    factorial *= i
}

console.log(factorial)

// 5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.

function fibonacciTermino(numero){

    if(numero === 0 || numero === 1){
        console.log(1)
        return
    }

    let num1 = 0
    let num2 = 1
    
    for(let i = 1; i <= numero; i++){
        let aux = num1 + num2
        console.log(num1)
        num1 = num2
        num2 = aux
    }
}

fibonacci(25)

function fibonacciHasta(numero){

    if(numero === 0 || numero === 1){
        console.log(1)
        return
    }

    let num1 = 0
    let num2 = 1
    console.log(num1)
    console.log(num2)

    for(let i = 1; i <= numero; i++){
        let aux = num1 + num2
        if (aux <= numero){
            console.log(aux)
            num1 = num2
            num2 = aux
        }
    }
}

fibonacci(54)