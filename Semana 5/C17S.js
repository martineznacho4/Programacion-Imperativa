
// 1)
// Declara una variable que contenga una matriz
// de 5x5 llena de puros numeros enteros y positivos

// Luego, escribe un algoritmo para sumar todos
// los numeros en la matriz.

let matriz5d = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5]
]



let crearMatriz = function (filas, columnas){
    let resultado = []

    for(let i = 0; i < filas; i++){
        let fila = []
        for(let j = 0; j < columnas; j++){
            fila.push(i+j)
        }
        resultado.push(fila)
    }

    return resultado
}



let sumarMatriz = function (matriz){

    let resultado = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            resultado += matriz[i][j]
        }
    }
    return resultado
}


console.log(sumarMatriz(crearMatriz(4,8)))
// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

// 1  2  3  4  5  6  7  8  9  10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100


let matriz10d = function (){
    let resultado = []

    let contador = 1

    for(let i = 0; i < 10; i++){
        resultado.push([])
        for(let j = 0; j < 10; j++){
            resultado[i].push(contador)
            contador ++
        }
    }
    return resultado
}

// console.log(matriz10d())

// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo (principal).
// b) La otra va a marcar los valores de la diagonal marcada en verde (secundaria).
// Ambas funciones deben devolver un resultado único.


let sumaDiagonalPrincipal = function (matriz){
    let resultado = 0

    for(let i = 0; i < matriz.length; i++){
        resultado += matriz[i][i]
    }
    return resultado
}

// console.log(sumaDiagonalPrincipal(matriz10d()))

let sumaDiagonalSecundaria = function (matriz){
    let resultado = 0

    for(let i = matriz.length - 1; i >= 0 ; i--){
        resultado += matriz[i][i]
    }
    return resultado
}

// console.log(sumaDiagonalSecundaria(matriz10d()))

// for (let i = 0; i < array.length; i++) {

//     if (condition) {
        
//     }
//     for (let j = 0; j < array.length; j++) {
        

//     }
// }