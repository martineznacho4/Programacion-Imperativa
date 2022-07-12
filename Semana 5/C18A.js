// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.

// La idea es solo registrar el total de los gastos, al finalizar la jornada.

// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.

// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
]

// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
// (Suma de fila)


let gastosSemana = function (matriz,semana){
    
    let resultado = 0

    for(let i = 0; i < matriz[semana - 1].length; i++){
        resultado += matriz[semana - 1][i]
    }

    return resultado
}

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// (Suma de columna)

let totalDia = function (matriz, dia){
    let resultado = 0

    for(let i = 0; i < matriz.length; i++){
        resultado += matriz[i][dia - 1]
    }

    return resultado
}

// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// (Suma total)

let gastosTotales = function (matriz){

    let resultado = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            resultado += matriz[i][j]
        }
    }

    return resultado
}

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// (Semana con mas gasto y dia)

let maxSemana = function (matriz){

    let maximo = gastosSemana(matriz,1)
    
    let indexSemana = 0

    for(let i = 1; i <= matriz.length; i++){
        let aux = gastosSemana(matriz,i)
        if(aux > maximo){
            maximo = aux
            indexSemana = i
        }
    }

    console.log(`La semana con mas gastos fue la Semana ${indexSemana}`)
}


// let matriz = [
//     [1,2,3], 
//     [4,5,6], 
//     [7,8,9],
//     [10,11,12]
// ]

// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
        
//     }
    
// }


let matriz = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]

0 + [1,2,3]