// 1) Crear un función que reciba por parámetro un array de números y retorne un objeto con dos propiedades:
// impares: contendrá como valor un array con los números impares 
// pares: contendrá como valor un array con los números pares

let numeros = [1,2,3,4,5,6,7,8,9,10]

let paresImpares = function (array){

    let arrayPares = []
    let arrayImpares = []

    for(let i = 0; i < array.length; i++ ){
        if(array[i] % 2 === 0){
            arrayPares.push(array[i])
        }else{
            arrayImpares.push(array[i])
        }
    }

    return {impares : arrayImpares, pares : arrayPares,}
}

paresImpares(numeros)

// -----------------------------------------------------------------------------------------------

// 2) Dada la siguiente variable:

let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamerica",
        poblacion: 40000000
    },
    {
        nombre: "Colombia",
        continente: "Sudamerica",
        poblacion: 50372000
    },

    {
        nombre: "Brasil",
        continente: "Sudamerica",
        poblacion: 300000000
    },
    {
        nombre: "Venezuela",
        continente: "Sudamerica",
        poblacion: 25000000
    },  
];

// Desarrollar una función que reciba por parámetro el array de países y lo ordene de forma descendente según su población

let ordernarPaises = function (paises){

    for(let i = 0; i < paises.length; i++){
        for(let j = 0; j < paises.length -1; j++){
            if(paises[j].poblacion < paises[j + 1].poblacion){
                let aux = paises[j]
                paises[j] = paises[j + 1]
                paises[j + 1] = aux
            }
        }
    }
}


ordernarPaises(paises)


// ---------------------------------------------------------------------------

// 3) 
//  A) Crear una matriz de 4 x 8 de numeros enteros 

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

// crearMatriz(4,8)

//  B) Crear una función que reciba la matriz generada por parámetro y retorne la sumatoria de todos los valores excepto de la fila 0

let sumatoriaSinPrimerFila = function (matriz){

    let resultado = 0

    for(let i = 1; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            resultado += matriz[i][j]
        }
    }
    return resultado

}

console.log(sumatoriaSinPrimerFila(crearMatriz(4,8)))



//  C) Crear una función que reciba la matriz generada por parámetro y un valor numérico. Deberá retornar un array con todos los valores mayores al parámetro recibido como valor Numérico

let mayores = function (matriz, numero){

    let resultado = []

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > numero){
                resultado.push(matriz[i][j])
            }
        }
    }
    return resultado
}

mayores(crearMatriz(4,8), 9)

