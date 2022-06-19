const prompt = require("prompt-sync")({ sigint: true });

function adivinar() {
    let numero = parseInt(prompt("Ingrese un numero: "));
    let aleatorio = Math.round(Math.random() * 10);

    while (true) {
        if (aleatorio === numero) {
            console.log("Felicidades");
            return;
        } else {
            console.log("Vuelve a intentar");
            numero = parseInt(prompt("Ingrese un numero: "));
        }
    }
}

// adivinar()




// Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

// Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.

// No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).

let cantidadParesImpares = function (){

    let numeros = []

    while(true){
        let numeroIngresado = prompt("Ingrese un numero: (0 para terminar) ")

        if (isNaN(numeroIngresado) || parseInt(numeroIngresado) === 0){
            break
        }
        numeros.push(parseInt(numeroIngresado))
    }

    let pares = 0
    let impares = 0

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares += 1
        }else{
            impares += 1
        }
    }

    console.log(`La cantidad de numeros pares es ${pares}`)
    console.log(`La cantidad de numeros impares es ${impares}`)

    
}

// cantidadParesImpares()


// Escribe una función que pueda devolver el valor más pequeño de un array numérico o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). No uses métodos del objeto array.

// Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados.

// Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'

let menorValorIndice = function (array, tipo){

    let menor = array[0]
    let indice = 0
    
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i]
            indice = i
        }
    }

    switch(tipo){
        case "v":
            return menor
        case "i":
            return indice
    }
}

// console.log(menorValorIndice([4,5,7], 'i'))


// Escribe una función que determina si la letra que sele pasa como argumento se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.

let existeEn = function(letra, array){

    for(let i = 0; i < array.length; i++){

        if(array[i] === letra){
            return true
        }
    }
    return false
}