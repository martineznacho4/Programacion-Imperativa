const prompt = require("prompt-sync")({sigint:true});


// // Metodos


// Ejercicio 1
// Tenemos un array con palabras sueltas que, juntas, forman una gran frase.

// Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.

// let arrayFrase = [
//     "No",
//     "he",
//     "fracasado,",
//     "simplemente",
//     "me",
//     "he",
//     "topado",
//     "con",
//     "diez",
//     "mil",
//     "soluciones",
//     "equivocadas"
//   ];

//   let fraseNueva = arrayFrase.join(' ')


// Ejercicio 2
// Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.

// Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.

// Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.

// let estudiantes = [
//     {
//       nombre: "Alvaro",
//       promedio: 9,
//       curso: "Android"
//     },
//     {
//       nombre: "Daniel",
//       promedio: 6,
//       curso: "Full Stack"
//     },
//     {
//       nombre: "Alexis",
//       promedio: 3,
//       curso: "iOS"
//     }
//   ];

//   let alumnoEgresado = estudiantes.pop()


// Ejercicio 3
// Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.

// Los valores de cada uno son:

// nombre: Juan

// promedio: 5

// curso: iOS

// ------------------

// nombre: Miguel

// promedio: 2

// curso: Android


// let estudiantes = [
//     {
//       nombre: 'Alvaro',
//       promedio : 9,
//       curso : 'Android',
//     },
//     {
//       nombre: 'Daniel',
//       promedio : 6,
//       curso : 'Full Stack',
//     },
//     {
//       nombre: 'Alexis',
//       promedio : 3,
//       curso : 'iOS',
//     },
//   ]

// estudiantes.push({
//     nombre: "Juan",
//     promedio: 5, 
//     curso: "iOS",})

// estudiantes.push({
//     nombre: "Miguel",
//     promedio: 2,
//     curso: "Android",})


// Ejercicio 4

// Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.

// let estudiantes = [
//     {
//        nombre: 'Alvaro',
//        promedio : 9,
//        curso : 'Android',
//      },
//       {
//         nombre: 'Daniel',
//         promedio : 6,
//         curso : 'Full Stack',
//       },
//       {
//         nombre: 'Alexis',
//         promedio : 3,
//         curso : 'iOS',
//       },
//     ]

// let alumnoDeBaja = estudiantes.shift()


// Ejercicio 5 

// Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).

// Los datos que hay que agregar de cada uno son:

// nombre: "Mariana",

// promedio: 9,

// curso: "Full Stack"

// -------------------------

// nombre: "Francisco",

// promedio: 2,

// curso: "Android"

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  estudiantes.unshift({
  nombre: "Mariana",
  promedio: 9,
  curso: "Full Stack"
  })

  estudiantes.unshift({
  nombre: "Francisco",
  promedio: 2,
  curso: "Android"}
  )


// Strings

// Ejercicio 1
// Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".

// function dominio(string){
//     return 'http://www.' + string
// }

// Ejercicio 2
// Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase.

// let texto = "texto"

// console.log(texto.length)

// Ejercicio 3

// Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

// 1. Un texto.

// 2. La palabra que vamos a buscar para reemplazar.

// 3. La palabra que vamos a usar para reemplazar.

// La función deberá devolver el texto con la palabra reemplazada.

// // let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
// // console.log(textoSinGuiones) //'Este texto es buena onda'

// function reemplazoFastFast(texto, palabra, reemplazo){
//     return texto.replace(palabra, reemplazo)
// }   // Rehacer bien

// Ejercicio 4

// Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.
// Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. La misma función retorna true en el caso de encontrar la palabra.


// Ejemplo:

// menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true

// function menciona(texto, palabra){

//     return texto.indexOf(palabra) !== -1
// }

// Ejercicio 5

// Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', almacenada en la variable 'frase' deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.

// let frase = 'Hola!, soy Carli';

// let licenciada = frase.slice(11)

// Objetos Literales

// Ejercicio 1
// Declarar una variable llamada perro de tipo objeto literal.
// Esa variable debe tener 3 propiedades:

// 1. nombre, con un valor de tipo String.

// 2. edad, con un valor de tipo Number.

// 3. vacunado, con un valor de tipo Boolean.

// let perro = {
//     nombre : "Perro",
//     edad : 6,
//     vacunado : true
// }


// Ejercicio 2
// Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

// Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

// La función entrenarHoras tiene las siguientes tres características:

// Recibe por parámetro la cantidad de horas.
// Resta a su energía (this.energia) la cantidad de horas x 5.
// Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

// let deportista = {
// 	energia: 100,
//     experiencia: 10,
//     nombre: "Aimar",
//     entrenarHoras: function (horas) {
//         this.energia -= horas*5
//         this.experiencia += horas*2
//     }
// };

// console.log("==Antes de comenzar entrenamiento==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);
// console.log("==ENTRENANDO==");
// deportista.entrenarHoras(5);
// console.log("==FIN ENTRENAMIENTO==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);