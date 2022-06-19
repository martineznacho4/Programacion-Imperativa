const prompt = require("prompt-sync")({sigint:true});

// 1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola. Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola debés utilizar el método console.log().

function imprimir(){
    let frase = prompt("Ingrse la frase: ")
    console.log(frase)
}

// 2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".

function imprimirNombre(){
    let nombre = prompt("Cual es tu nombre?: ")
    console.log(`Hola ${nombre}!`);
}

// 3) Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

function imprimirSuma(){
    let num1 = prompt("Ingrese un numero: ")
    let num2 = prompt("Ingrese el segundo numero: ")
    console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`)
}

// 4) Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años). Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola: “Tienes 20 años”.

function calcEdad(){
    let anioNacimiento = prompt("Cual es su año de nacimiento?: ")

    console.log(`Su edad es ${2022 - anioNacimiento}`)
}

// 5) Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!"

function adivinar(){
    let aleatorio = Math.round(Math.random()) * 10

    let numIngresado = parseInt(prompt("Adivine el numero: "))

    if (numIngresado === aleatorio){
        console.log("Felicitaciones, ese era!")
    }else{
        console.log("Lo siento, intenta nuevamente!")
    }


}

// 6) Escribí un programa que imprima los números pares del 0 al 100.

let par = number => {
    if (!(number % 2))return true

}

function imprimirparesHasta(numero){
    let cont = 0;
    for (let i = 0; i<= numero ; i++){
        if (par(i)) console.log(i)
    }
}

// imprimirparesHasta(100)

// 7) Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola: const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

function imprimirNombres(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}

// imprimirNombres(["Pedro", "Pablo", "Maria", "Juan", "Diana"])


// 8) Construí un pseudocódigo que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.

// Ingresar numero
//     Si el numero es mayor a 500
//         Mostrar el 18%


// 9) Escribí una función llamada elemento que recibe un arreglo como parámetro. La función debe devolver el valor que se encuentra en la tercera posición. Si el arreglo no tiene al menos 3 elementos deberá retornar -1.

function elemento(arreglo){
    if(arreglo.length < 3){
        return -1
    }
    return arreglo[2]
}


// 10) Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras. Considerar que el usuario ingresa números de hasta dos cifras.

function cifras(){
    let numero = parseInt(prompt("Ingrese un numero: "))

    if (numero < 10){
        console.log(10 - numero)
    }else{
        console.log(100 - numero)
    }
}

cifras()



// 11) Hacer un algoritmo que muestre el promedio de varias notas o de N notas ingresadas, se debe definir el valor de N para conocer la cantidad de notas a ingresar.

let resultado = 0
let cantidadNotas = 4

function promedio(){
    for (let i = 0; i< cantidadNotas; i++){
        
        resultado += parseInt(prompt('Ingrese su nota: '))
    }

    console.log(`Su promedio es ${resultado/cantidadNotas}`)

}
// promedio()


// 12) Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado por teclado.

function sumaNPares(numero){
    let resultado = 0
    let contador = 0

    while(contador !== numero){
        resultado += contador
        contador ++
    }

}









// [[2,3,4],[2,3,4],[1,2,3],[1,2,3]]

// for(){
//     for(){
        
//     }
// }