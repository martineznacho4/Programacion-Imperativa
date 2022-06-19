// <!-- Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar. -->

let totalAPagar = (vehiculo, litrosConsumidos) => {
    
    const valorCoche = 86;
    const valorMoto = 70;
    const valorAutobus = 55;

    let total = 0

    switch(vehiculo){
        case "coche":{
            total = consumo(litrosConsumidos,valorCoche)
            break
        }
        case "moto":{
            total = consumo(litrosConsumidos,valorMoto)
            break
        }
        case "autobus":{
            total = consumo(litrosConsumidos,valorAutobus)
            break
        }
        default:
            break
    }
    return total
}

let consumo = (litros,valor) => {
    let total = 0
    if(0 < litros && litros <= 25){
        total = litros * (valor + 50)
    }else{
        total = litros * (valor + 25)
    }
    return total
}

// console.log(totalAPagar("moto", 30))



// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.

function numeroSecreto(numero){
    let secreto = Math.round(Math.random()*10)
    if (numero === secreto){
        return "Felicidades!"
    }
    return `No, ese no es. El correcto era ${secreto} y el ingresado ${numero}`

}



// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

function abrirParacaidas(velocidad, altura){
    if (velocidad< 1000 && altura >= 2000 && altura < 3000){
        return true
    }
    return false
}



// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.


function traductor(texto){

    switch(texto){
        case "casa":{
            return "house"
        }

        case "perro":{
            return "dog"
        }

        case "pelota":{
            return "ball"
        }

        case "arbol":{
            return "tree"
        }

        case "genio":{
            return "genius"

        }
        default:
            return "La palabra ingresada es incorrecta"
}}



// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

// En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// inválido".
// Cuando el usuario haya valorado la película, agradecerle su visita.

function valoracion(){
    let rating = prompt("Ingrese su valoracion: (Muy mala/ Mala/ Mediocre/ Buena/ Muy buena)")
    switch(rating){
        case "Muy mala":
            console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.")

        case "Mala": 
            console.log("Calificaste la película como Mala. Lo lamentamos mucho.")

        case "Mediocre":
            console.log("Calificaste la película como Mediocre. Lo lamentamos mucho.")

        case "Buena":
            console.log("Calificaste la película como Buena. Nos alegra.")

        case "Muy buena":
            console.log("Calificaste la película como Muy buena. Nos alegra.")

        default:
            console.log("Ingresaste un valor inválido")


    }
    

}