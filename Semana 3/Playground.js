// If/Else

// Ejercicio 1
// Declaremos una variable con el nombre dato y asignémosle un valor booleano.

// Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, que imprima por consola "es true". Caso contrario, que imprima por consola "es false".

// let dato = true;

// if (dato){
//     console.log("es true")
// }else{
//     console.log("es falso")
//     }

// Ejercicio 2
// En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante".

// let lenguaje = "javascript";

// if(lenguaje == "javascript"){
//     console.log("Estoy aprendiendo")
// }else{
//     console.log("Lo aprenderé más adelante")
// }

// Ejercicio 3
// Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true.

// function puedePasar(nombre) {
//     if(nombre == "Cosme Fulanito"){
//         return false
//     }
//     return true
// }


// If Ternario / Switch

// Ejercicio 1
// El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado.

// let dia = 'jueves'
// function finDeSemana (dia) {
// 	switch (dia){
// 		case "viernes":
// 			console.log("buen finde")
// 			break
// 		case "lunes":
// 			console.log("buena semana")
// 			break
// 		default:
// 			console.log("buen dia")
// 			break
// 	}
// }

// Ejercicio 2
// El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases".

// function tengoClases(dia) {
// 	switch (dia) {
// 		case 'lunes':
// 			console.log("tenés clases")
// 			break
// 		case "miércoles":
// 			console.log("tenés clases")
// 			break
// 		case "viernes":
// 			console.log("tenés clases")
// 			break
// 		default:
// 			console.log("no tenés clases")
// 	}
// }


// For Loop

// Ejercicio 1
// La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

// function loro(texto){
//     for(let i = 0; i<5; i++){
//         console.log(texto)
//     }
// }

// Ejercicio 2
// En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

// function noParesDeContarImparesHasta(numero){
//     let contador = 0
//     for(let i = 1; i <= numero; i++){
//         if( i % 2 !== 0){
//             contador++
//         }
//     }
//     return contador
// }


// While

// Ejercicio 1
// Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

// Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:

// 5 * 1 = 5
// 5 * 2 = 10

// 5 * 3 = 15

// ...

// hasta llegar a multiplicarlo por 10.

// function tablaDeMultiplicar(numero){
	
// 	let i = 1
// 	while(i <= 10){
// 		console.log(numero + " * " + i + " = " + numero*i)
// 		i++
// 	}
// }