const prompt = require("prompt-sync")({sigint:true});

// Buenas tengo un desafio para quien lo desee, la idea es 
// desarrollar un algoritmo que consulte al usuario si desea jugar, 
// en caso de responder si, 
// generar un numero random y 
// dejar el prompt al usuario para que éste adivine el numero generado

// , mientras no adivide (nro ingresado === nro generado) 
// no salir del juego.

let respuesta = prompt("Desea jugar a adivinar el numero? Y/N: ")
const aceptar = ['Yes', 'yes', 'Y', 'y']

if(aceptar.includes(respuesta)){
    let elegido = prompt('Elija un numero entero entre 1 y 100: ')
    let numeroCorrecto = Math.round(Math.random()*100)
    let intentos = 0

    console.log(numeroCorrecto)
    while(true){

        if(!isNaN(parseInt(elegido)) && parseInt(elegido) === numeroCorrecto){
            console.log(`Correcto, el numero era ${numeroCorrecto}`)
            break
        }

        elegido = prompt('Incorrecto, vuelva a elegir un numero entero entre 1 y 100 (Para terminar ingrese la tecla P): ')
        intentos++
        

        if (elegido === "P"){
            console.log(`Su cantidad de intentos fue de ${intentos}`)
            break
        }
    }
}


