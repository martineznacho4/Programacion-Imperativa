// Variables y Tipos de datos

// Ejercicio 1
// Nuestra tarea será declarar dos variables: una con el nombre edad y la otra con el nombre peso.

// let edad;
// let peso;

// Ejercicio 2
// Declaremos dos variables llamadas edad y peso, a las cuales debemos asignarles un valor numérico.

// let edad = 22;
// let peso = 80;

// Ejercicio 3
// Ahora, debemos crear una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignaremos valores numéricos 18 y 99 respectivamente.

// const EDAD_MINIMA = 18;
// const EDAD_MAXIMA = 99;

// Ejercicio 4
// Para este ejercicio, debemos declarar 4 variables de tipo let con los nombres: verdadero, nada, texto y numero. A cada una de ellas, tendremos que asignarle el tipo de dato que sugiera su nombre, según corresponda.

// let verdadero = true;
// let nada = null;
// let texto = "Hey";
// let numero = 3;


// Operadores

// Ejercicio 1
// Declarar y asigna dos variables: primerNumero y segundoNumero.
// Luego, declarar las variables resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision y en cada una almacena el resultado que corresponda.
// Por último, imprimir cada uno de los resultados utilizando console.log(nombreDeLaVariable).

// let primerNumero = 100;
// let segundoNumero = 5;

// let resultadoSuma = primerNumero + segundoNumero;
// let resultadoResta = primerNumero - segundoNumero;
// let resultadoMultiplicacion = primerNumero * segundoNumero;
// let resultadoDivision = primerNumero / segundoNumero;

// console.log(resultadoSuma);
// console.log(resultadoResta);
// console.log(resultadoMultiplicacion);
// console.log(resultadoDivision);


// Funciones regulares

// Ejercicio 1
// Nuestra tarea es crear una función que se va a llamar ejemplo y tiene que devolver un String diciendo "hola, soy una función".

// function ejemplo(){
//     return "hola, soy una función"
// }

// Ejercicio 2
// Primero creamos una variable con el nombre  ejemplo y le asignamos como valor una función. La misma debe retornar un String que diga: "hola, soy una función expresada".

// let ejemplo = function (){
//     return "hola, soy una función expresada"
// }

// Ejercicio 3
// Debemos modificar el código que ya está escrito para agregarle los parámetros que la función necesita.

// function saludar(nombre,apellido) {
//     return 'Hola, ' + nombre + ' ' + apellido + '!';
// }

// Ejercicio 4
// Escribir las siguientes tres funciones:

// anterior: recibe un número como parámetro y devuelve ese número menos uno.
// triple: recibe un número como parámetro y devuelve el triple de ese número.
// anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).

// function anterior(numero){
//     return numero - 1
// }

// function triple(numero){
//     return numero * 3
// }

// function anteriorDelTriple(numero){
//     return anterior(triple(numero))
// }


// Arrow Functions

// Ejercicio 1
// Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.

// // function dameCinco() {
// //     return [1,2,3,4,5];
// // }

// let dameCinco = () => [1,2,3,4,5];

// // function multiplicarPorDos() {
// //   return 123 * 2 ;
// // }

// let multiplicarPorDos = () => 123*2;

// // function mostrarNombre() {
// //   return "Mi nombre es Hernán";
// // }

// let mostrarNombre = () => "Mi nombre es Hernán"

// Ejercicio 2
// Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.

// let saludar = nombre => 'Hola, ' + nombre + '!';

// Ejercicio 3
// Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function.

// let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' + apellido + '!';