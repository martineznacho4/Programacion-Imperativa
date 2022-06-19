// 1) A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


// Obtener en un nuevo array las edades menores a 18.

// let obtenerMenores = function (arreglo){
//     let resultado = []

//     for(let i = 0; i < arreglo.length; i++){
//         if(arreglo[i] < 18){
//             resultado.push(arreglo[i])
//         }
//     }

//     return resultado    
// }

// Obtener en un nuevo array las edades mayor o igual a 18.

// let obtenerMayores = function (arreglo){
//     let resultado = []

//     for(let i = 0; i < arreglo.length; i++){
//         if(arreglo[i] >= 18){
//             resultado.push(arreglo[i])
//         }
//     }

//     return resultado    
// }

// Obtener en un nuevo array las edades igual a 18.

// let obtener18anios = function (arreglo){
//     let resultado = []

//     for(let i = 0; i < arreglo.length; i++){
//         if(arreglo[i] === 18){
//             resultado.push(arreglo[i])
//         }
//     }

//     return resultado    
// }
// Obtener el menor.

// let obtenerMenor = function (arreglo){
//     let resultado = arreglo[0]

//     for(let i = 0; i < arreglo.length; i++){
//         if(arreglo[i] < resultado){
//             resultado = arreglo[i]
//         }
//     }

//     return resultado    
// }

// Obtener el mayor. 

// let obtenerMayor = function (arreglo){
//     let resultado = arreglo[0]

//     for(let i = 0; i < arreglo.length; i++){
//         if(arreglo[i] > resultado){
//             resultado = arreglo[i]
//         }
//     }

//     return resultado    
// }

// Obtener el promedio de edades.

let obetenerPromedioEdades = function (arreglo){
    let resultado = 0

    for(let i = 0; i < arreglo.length; i++){
        resultado += arreglo[i]
    }

    return resultado/arreglo.length 
}
// console.log(obetenerPromedioEdades(edades))

// Incrementar en 1 todas las edades.

// let aumentarUno = function (arreglo){

//     for(let i = 0; i < arreglo.length; i++){
//         arreglo[i] += 1
        
//     }

//     return arreglo 
// }

// 2) Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada

const arrayCuentas =
[
{
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo"    
},
{
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo"
},
{
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente"
},
{
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo"
},
{
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo"
},
{
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente"
}
]


let obtenerPorEdad = function (arreglo,edad,criterio){
    let resultado = []

    for(let i = 0; i < arreglo.length; i++){

        switch(criterio){
            case "Menores":
                if(arreglo[i].edadTitular < edad){
                    resultado.push(arreglo[i])
                }

            case "Mayores":
                if(arreglo[i].edadTitular >= edad){
                    resultado.push(arreglo[i])
                }

            case "Iguales":
                if(arreglo[i].edadTitular === edad){
                    resultado.push(arreglo[i])
                }
            }
        }
    return resultado    
}
// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
// obtenerPorEdad(arrayCuentas,30,"Menores")


// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// obtenerPorEdad(arrayCuentas,30,"Mayores")

// Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
// obtenerPorEdad(arrayCuentas,30,"Iguales")

// Obtener la cuenta con el titular de la misma más joven.

let obtenerMasJoven = function (arreglo){

    let cliente = arreglo[0]

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i].edadTitular < cliente.edadTitular){
            cliente = arreglo[i]
        }
    }

    return cliente
}

// Obtener un nuevo array por cada tipo de cuenta.

let separarPorCuenta = function(arreglo){

    let cuentaSueldo = []
    let cuentaCorriente = []

    for(let i = 0; i < arreglo.length; i++){
        
        switch(arreglo[i].tipoCuenta){
            case 'sueldo':
                cuentaSueldo.push(arreglo[i])
                break

            case 'corriente':
                cuentaCorriente.push(arreglo[i])
                break
        }
    }

    return {cuentaSueldo, cuentaCorriente}

}

let valores = separarPorCuenta(arrayCuentas)

console.table(valores.cuentaCorriente)

let cuentaPorTipo = function(array,tipo){

    let resultadoHabilitadas = []
    let resultadoDeshabilitadas = []

    for(let i = 0; i < array.length; i++ ){

        if(array[i].estaHabilitada){
            resultadoHabilitadas.push(array[i])
        }else resultadoDeshabilitadas.push(array[i])
    }

    switch(tipo){
        case "Habilitadas":
            return resultadoHabilitadas

        case "Deshabilitadas":
            return resultadoDeshabilitadas
    }

}

// Obtener un nuevo array con las cuentas habilitadas.

cuentaPorTipo(arrayCuentas, "Habilitadas")

// Obtener un nuevo array con las cuentas deshabilitadas.

cuentaPorTipo(arrayCuentas, "Deshabilitadas")

// Obtener la cuenta con el menor saldo.

// Obtener la cuenta con el mayor saldo.
