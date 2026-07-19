/*LIKE/UNLIKE SONG*/

const heartSVG = document.getElementById('heart')

heartSVG.addEventListener('click', () => {
    if (heartSVG.getAttribute('fill') === 'none') {
        heartSVG.setAttribute('fill', 'currentColor') 
    } else {
        heartSVG.setAttribute('fill', 'none')
    }
})


/*MOSTRAR CANCION*/
/* 
-crear un array de objetos con los datos de la cancion (imagen, titulo, album y banda, duracion) (fuente)
-asignar cada dato a su elemento correspondiente (usar el primer objeto del array para asignar cada valor)
*/

/*CHANGE SONG*/
/*
-variable o funcion que recorre el array de forma reversible
-crear funcion que actualiza cada valor de cada elemento por el siguiente o anterior de la lista
-capturar un evento de click y asignarselo a cada boton, uno para ir hacia el siguiente y otro hacia el anterior de la lista
*/

/*PLAY / PAUSE SONG */
/*
-crear variable que obtiene la duracion de la cancion y calcula un porcentaje que sera asignado al input range
-actualizar porcentaje del input range cada segundo hasta llegar al final
-crear variable que se va actualizando y mostrando los minutos que avanza hasta llegar al final
-establecer la duracion de la cancion y asignarselo al elemento time final
-capturar un evento de click que comience a contar los minutos transcurridos hasta el valor de la variable final
-con el mismo evento generar una pausa en el contador y guardar el valor
*/

/*RETURN SONG*/
/*
-funcion que devuelve a 0 el valor de la variable que se va actualizando
-capturar un evento de click para asignarle esta funcion al boton return
*/

/*ALEATORY SONG*/
