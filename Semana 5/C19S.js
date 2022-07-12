let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

// ¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura? Utiliza bubble sort.

let ordernarCantantes = function(artistas){

    for (let i = 0; i < artistas.length; i++) {
        
        for(let j = 0; j < artistas.length - 1; j++){

            if(artistas[j].estatura > artistas[j + 1].estatura){
                let aux = artistas[j]
                artistas[j] = artistas[j + 1]
                artistas[j + 1] = aux
            }
        }
        
    }

}

console.table(personas)
ordernarCantantes(personas)
console.table(personas)

