// const prompt = require("prompt-sync")({sigint:true});

// 1. Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar de nuestra calculadora.
// 2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.
function sumar(numero1, numero2){
    return numero1 + numero2
}

// 3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.

function restar(numero1, numero2){
    return numero1 - numero2
}

// 4. Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación.

function multiplicar(numero1, numero2){
    return numero1 * numero2
}

// 5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado de la división del primero sobre el segundo.

function dividir(numero1, numero2){
    return numero1 / numero2
}



// console.log("-------------- Testeo de Operaciones / Calculadora --------------")


// console.log("--- Sumar ---")
// console.log(sumar(parseInt(prompt("Ingrese el primer numero: ")) , parseInt(prompt("Ingrese el segundo numero: "))))

// console.log("--- Restar ---")
// console.log(restar(parseInt(prompt("Ingrese el primer numero: ")) , parseInt(prompt("Ingrese el segundo numero: "))))

// console.log("--- Multiplicar ---")
// console.log(multiplicar(parseInt(prompt("Ingrese el primer numero: ")) , parseInt(prompt("Ingrese el segundo numero: "))))

// console.log("--- Dividir ---")
// console.log(dividir(parseInt(prompt("Ingrese el primer numero: ")) , parseInt(prompt("Ingrese el segundo numero: "))))


function cuadradoDeUnNumero(numero1){
    return multiplicar(numero1,numero1)
}

function promedioDeTresNumeros(num1,num2,num3){
    return dividir(sumar(num1,sumar(num2,num3)),3)
}

function calcularPorcentaje(numero1, numero2){
    
    return dividir( multiplicar(numero1,numero2),100)
}

function generadorDePorcentaje(numero1,numero2){
    return dividir(multiplicar(numero1,100), numero2) 
}


// Nivel 2

// 1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con anterioridad— creá un console.log en el cual vas a poner un string para indicar que debajo de él comenzarás a probar las funciones, algo así como un “separador de código”. Por ejemplo: console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
// 2. Ejecutar la función que permite sumar y la función que permite restar pasando como argumentos dos números cualesquiera. Mostrar en consola los resultados.
// 3. Ejecutar la función que permite multiplicar pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
// 4. Ejecutar la función que permite dividir pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
// 5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos argumentos, el número cero. Mostrar en consola el resultado.


// Nivel 3

// 1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado. Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

// 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro. Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

// 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total. Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300. Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.
// 100% --- 300
// 15%  --- x=

// 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo. Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora. Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.
// 200 --- 100%
// 2   --- x=
