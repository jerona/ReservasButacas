"use strict";

/**Representa un Toastr.
* @author Joel Alberto Armas Reyes.
* @since 16/01/2017.
*/

/**Configura y muestra un Toastr.
 * 
 * @param {*} contenido Contenido del toastr.
 * @param {*} tipoAviso Tipo de aviso (info,success,error...).
 * @param {*} posicion Posicion a colocar el toast.
 * @param {*} empieza 
 * @param {*} termina 
 */
function generarToast(contenido,tipoAviso,posicion,empieza,termina){
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": posicion,
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      toastr[tipoAviso](contenido);
}



