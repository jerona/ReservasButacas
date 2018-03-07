
    /**Obtenemos el tamanio total del JSON.
   * https://www.lawebdelprogramador.com/codigo/JavaScript/2547-Ordenar-por-su-clave-un-array-asociativo.html.
   */
  function tamanioJSON(arrayJSON){
    // Inicializamos los arrays
    var arrayReplica = new Array();

    // Separamos la clave en un solo array
    for (var i in arrayJSON){
      arrayReplica.push(i);
    }
    return arrayReplica.length;
}


  function jsonArray(arrayJSON){
    // Inicializamos los arrays
    var arrayReplica = new Array();

    // Separamos la clave en un solo array
    for (var i in arrayJSON){
      arrayReplica.push(i);
    }
    return arrayReplica;
}

/**Devuelve la primera posicion en la que encuentra en el array indicado el texto proporcionado.
 * En caso de no contenerlo en ninguna posición devolverá -1.
 * @param {*} array Array con las posiciones a verificar.
 * @param {*} texto Texto a verificar del array.
 * @return {Number} Numero de la posicion del array que se encuentra el texto.
 */
function posicionArray(array,texto){
    var pos=-1;
     for(var i=0;i<array.length;i++){
         if(array[i]==texto){
             pos=i;
             break;
         }
     }
     return pos;
}


function sumaNumeroTotal(array){
    var cont=0;
     for(var i=0;i<array.length;i++){
         cont=cont+array[i];
     }
     return cont;
 }