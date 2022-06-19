// Encontrar él intruso

// 1) Ahora tenemos un caso similar, solo que esta vez tenemos más de un
// intruso

// ['0', '0', '0', '0', '0', 'O', '0', '0', 'O', '0', 'O']

// nuestro trabajo será crear una función que los reemplace por ceros y
// retorna un array con objetos literales cuyas propiedades representen a
// él índice y él elemento intruso, por ejemplo
// [
// {
// indice : 2,
// intruso : ‘O’
// },
// {
// indice : 5,
// intruso : ‘P’
// },
// ]

let buscarIntruso = function (arreglo, reemplazo) {
    let resultado = [];

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== reemplazo) {
            resultado.push({ indice: i, intruso: arreglo[i] });
        }
    }

    return resultado;
};

let arrayCeros = [
    "0",
    "0",
    "V",
    "0",
    "0",
    "A",
    "0",
    "0",
    "M",
    "0",
    "O",
    "0",
    "0",
    "S",
    "0",
    "0",
    " ",
    "a",
    " ",
    "0",
    "A",
    "0",
    "P",
    "0",
    "R",
    "0",
    "0",
    "o",
    "0",
    "B",
    "0",
    "0",
    "0",
    "0",
    "A",
    "r",
];

// console.table(buscarIntruso(arrayCeros, '0'))

/* EJERCITACION ARRAY DE PROFESIONALES */
const arrayProfesionales = [
    {
        id: 0,
        estaHabilitado: false,
        nombre: "Huber Wilkins",
        email: "huberwilkins#speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 3,
    },
    {
        id: 1,
        estaHabilitado: true,
        nombre: "Goldie Haley",
        email: "goldiehaley#speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 3,
    },
    {
        id: 2,
        estaHabilitado: false,
        nombre: "Pena Landry",
        email: "penalandry@speedbolt.com",
        especialidad: "Dermatologia",
        cantidadConsultas: 9,
    },
    {
        id: 3,
        estaHabilitado: false,
        nombre: "Leanne Burch",
        email: "leanneburch#speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 13,
    },
    {
        id: 4,
        estaHabilitado: false,
        nombre: "Haynes Fuentes",
        email: "haynesfuentes@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 75,
    },
    {
        id: 5,
        estaHabilitado: true,
        nombre: "Tamika Fuentes",
        email: "tamikanewman@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 32,
    },
    {
        id: 6,
        estaHabilitado: true,
        nombre: "Russo Baldwin",
        email: "russobaldwin@speedbolt.com",
        especialidad: "Dermatologia",
        cantidadConsultas: 67,
    },
    {
        id: 7,
        estaHabilitado: true,
        nombre: "Dodson Shaffer",
        email: "dodsonshaffer#speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 2,
    },
    {
        id: 8,
        estaHabilitado: true,
        nombre: "Guerra Bright",
        email: "guerrabright#speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 6,
    },
    {
        id: 9,
        estaHabilitado: true,
        nombre: "Dina Navarro",
        email: "dinanavarro@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 8,
    },
    {
        id: 10,
        estaHabilitado: false,
        nombre: "Stafford Watts",
        email: "staffordwatts@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
    },
    {
        id: 11,
        estaHabilitado: false,
        nombre: "Joni Avery",
        email: "joniavery@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 6,
    },
    {
        id: 12,
        estaHabilitado: true,
        nombre: "Mayra Tran",
        email: "mayratran@speedbolt.com",
        especialidad: "Oftamologia",
        cantidadConsultas: 2,
    },
    {
        id: 13,
        estaHabilitado: false,
        nombre: "Ward Dale",
        email: "warddale@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 23,
    },
];


// 1)  Desarrollar una función llamada buscarPorId que reciba un array de
// profesionales y un número que represente él identificador, realizar la búsqueda
// de dentro del array, en caso de coincidencias retornar él objeto, caso contrario
// retornar null


let buscarPorId = function(array, identificador){

    for(let i = 0; i < array.length; i++){
        if(identificador === array[i].id){
            return array[i]
        }
    }
    return null
}

// 2) Desarrollar una función llamada filtrarHabilitadosPorEspecialidad que reciba
// un array de profesionales y un string que represente la especialidad, realizar la
// búsqueda de dentro del array deberá coincidir la especialidad y él profesional
// debe estar habilitado, en caso de coincidencias retornar los profesionales, caso
// contrario retorna un array vacío

let filtrarHabilitadosPorEspecialidad = function (arreglo, especialidad){

    let resultado = []

    for(let i = 0; i < array.length; i++){
        if(especialidad === arreglo[i].especialidad && arreglo[i].estaHabilitado){
            resultado.push(arreglo[i])
        }
    }
    return resultado
}


// 3) Desarrollar una función llamada realizarConsulta que reciba un un número
// que represente él identificador del profesional a buscar, reutilizar la función
// buscarPorId, en caso de encontrar él objeto modificar la propiedad
// cantidadConsultas incrementando su valor actual + 1, caso contrario retornar
// null

let realizarConsulta = function (array,identificador){

    let profesional = buscarPorId(array,identificador)
    
    if(profesional){
        
    }
}
