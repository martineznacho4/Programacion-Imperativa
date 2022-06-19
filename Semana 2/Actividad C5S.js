const prompt = require("prompt-sync")({sigint:true});


// 1. Crear una función que convierta pulgadas en centímetros.

// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
function pulgadasACentimetros (pulgadas){
    return pulgadas * 2.54
}

// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”
function strToURL (string){
    return `http://www.${string}.com`
}

// 3. Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.
function exclamacion (string) {
    return `${string}!`
}

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.
function edadPerro (edad){
    return edad * 7
}

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.
function valorHora (sueldo){
    return sueldo / 40
}

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.
// El índice de masa corporal (IMC) es el peso de una persona en kilogramos dividido por el cuadrado de la estatura en metros.
function calculadorIMC (altura,peso){
    return peso/(Math.pow(altura,2))
}

// console.log(calculadorIMC(1.82,65))

// Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla
// como función expresada y función flecha.
let strtoURL = (string) => `http://www.${string}.com`

// console.log(strtoURL('pepito'))

// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.
// Investigá qué hace el método de strings .toUpperCase()
function upper (string) {
    return string.toUpperCase()
}

// console.log(upper("cadena"))

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.
// Pista: te servirá revisar qué hace la palabra reservada typeof.
function tipo (dato) {
    return typeof dato
}

// console.log(tipo(89))
// console.log(tipo("Cadena"))
// console.log(tipo(true))

// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
// circunferencia.
// Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.
function circunferencia (radio){
    return 2 * Math.PI * radio
}

console.log(circunferencia(3))