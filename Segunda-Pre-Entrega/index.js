class movie{
    constructor(nombre, valoracionIndididual){
        this.nombre = nombre;
        this.valoracion += valoracionIndididual;
        this.cantidadValoracion;
    }
}
let cartelera = [{nombre:"Avatar: El Camino del Agua", valoracion:0, cantidadValoracion: 0},
                {nombre:"The Wale", valoracion:0, cantidadValoracion: 0},
                {nombre:"Llaman a la puerta", valoracion:0, cantidadValoracion: 0},
                {nombre:"M3gan", valoracion:0, cantidadValoracion: 0},
                {nombre:"Gato Con botas: El Ultimo Deseo", valoracion:0, cantidadValoracion: 0}];

let opcion = prompt('Bienvenido al espacio de FeedBack de peliculas en cartelera.',
                    'Selecciona una de las siguientes peliculas a valorar o escribe "Salir" para finalizar la devolucion',
                    '1- Avatar: El Camino del Agua',
                    '2- The Wale',
                    '3- Llaman a la puerta',
                    '4- M3gan',
                    '5- Gato Con botas: El Ultimo Deseo');


function valorateMovie(movie, valoracionIndididual){
    
}


while(opcion != 'Salir'){
    switch(opcion){
        case '1':{
            let valoracion= parseFloat(prompt("Ingrese en una escala del 1 al 10 su valoracion:"));
            valorateMovie(cartelera[0], valoracion);
        }
    }
    opcion = prompt('Bienvenido al espacio de FeedBack de peliculas en cartelera.',
                    'Selecciona una de las siguientes peliculas a valorar o escribe "Salir" para finalizar la devolucion',
                    '1- Avatar: El Camino del Agua',
                    '2- The Wale',
                    '3- Llaman a la puerta',
                    '4- M3gan',
                    '5- Gato Con botas: El Ultimo Deseo');
}