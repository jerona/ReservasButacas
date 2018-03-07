"use strict";

var datosElegidoUsuario;
var salaCineButacasJSON;//datos butacas, filas...
var salaCineJSON;//este sirve para ver si ponemos libre o ocupado la sala del cine, tiene hora y dias
var salaCineButacasJSONActual;

cargarDatosAnterioresUsuario();
cargarDatosSalaCineJSON();
cargarDatosSalaCineButacasJSON();
datosSalaCineElegido();

$(function(){
    domDatosPelicula();
    domSVG();

    $("#boton_reservar").on("click",reservar);
    $(".libre , .reservado").on('click', cambiarEstado);
});


function cargarDatosAnterioresUsuario(){
    datosElegidoUsuario=recogerLocalStorage('key_datos_elegidos_usuario');
    
    if(datosElegidoUsuario==undefined || datosElegidoUsuario==null){
        alert('No se han cumplimentado los datos anteriores, redirigiendo pagina principal');
        window.location.href='index.html';
    }
}

function cargarDatosSalaCineJSON(){
    salaCineJSON=recogerLocalStorage('key_sala_cine');
    
    if(datosElegidoUsuario==undefined || datosElegidoUsuario==null){
        alert('No se han cumplimentado datos anteriores, redirigiendo pagina principal');
        window.location.href='index.html';
    }
}

function cargarDatosSalaCineButacasJSON(){
    salaCineButacasJSON=recogerLocalStorage('key_sala_cine_butacas');

    if(salaCineButacasJSON==undefined || salaCineButacasJSON==null){
        salaCineButacasJSON=salaCineButacasJSONDefault;
        almacenarLocalStorage('key_sala_cine_butacas',salaCineButacasJSON);
    }
}

function datosSalaCineElegido(){
    var salir=false;
    for(var i=0;salir==false;i++){
        if(datosElegidoUsuario['Prop_IdSalacine']==salaCineButacasJSON['sala_cine_'+i]['id']){
            salaCineButacasJSONActual=salaCineButacasJSON['sala_cine_'+i];
            salir=true;
        }
    }
}



/**Accion de evento onclick de use que cambia el estado de la butaca.
  * Se almacena los datos nuevos en el JSON.
  * Se almacena los datos en local (localStorage).
  * Se actualiza texto del numero de asientos ocupados.
 */
function cambiarEstado(){
    var asientosOcupados,estado;

    if ($(this).attr("class")=="reservado"){
        estado="libre";
    }
    else if ($(this).attr("class")=="libre"){
        estado="reservado";
    }
    else{
        estado="";
    }

    if ($(this).attr("class")!="ocupado"){
        $(this).attr("class",estado);

        for(var i=0;;i++){
            if(salaCineButacasJSONActual['butacas']["butaca"+i]['id']==$(this).attr('id')){
                salaCineButacasJSONActual['butacas']["butaca"+i]["estado"]=estado;
                break;
            }
        }
    }

    let entradasTotales=$(".reservado").length;
    $("#entradasAReservar").text(entradasTotales);
    $("#precioTotal").text((entradasTotales*4.50)+'€');

    actualizarSalaCineJSON();
    almacenarLocalStorage("key_sala_cine",salaCineJSON);
    almacenarLocalStorage("key_sala_cine_butacas",salaCineButacasJSON);
    
 
}


/**
 * 
 */
function actualizarSalaCineJSON(){
    var salaCineTerminado=false;
    var peliculaCineTerminado=false;
    var horaEncontrada=false;

    let dia=datosElegidoUsuario['Prop_DiaPelicula']
    let hora=datosElegidoUsuario['Prop_HoraPelicula'];
    let etiquetaSalaCine=datosElegidoUsuario['Prop_EtiquetaSalacineX'];
    let etiquetaSalaCinePelicula=datosElegidoUsuario['Prop_EtiquetaPeliculaX'];


    for(var i=0;salaCineTerminado==false;i++){
        if(salaCineJSON[etiquetaSalaCine][etiquetaSalaCinePelicula]['horario'][dia]['Hora'+i]!=undefined &&
            salaCineJSON[etiquetaSalaCine][etiquetaSalaCinePelicula]['horario'][dia]['Hora'+i]['Hora']!=undefined && 
            salaCineJSON[etiquetaSalaCine][etiquetaSalaCinePelicula]['horario'][dia]['Hora'+i]['Hora']==hora){

            salaCineJSON[etiquetaSalaCine][etiquetaSalaCinePelicula]['horario'][dia]['Hora'+i]['butacas_libre']=$(".libre").length;
            salaCineTerminado=true;
        }
    }
}



/**Creamos una reserva.
 * Se almacena los datos nuevos en el JSON.
 * Se almacena los datos en local (localStorage).
 * Se actualiza texto del numero de asientos ocupados.
 */
function reservar(){
    var todasLasButacas=$("use");

    if($(".reservado").length>0){

        $("use").closest(".reservado").attr("class","ocupado");
        var asientosOcupados=$("use").closest(".ocupado");
       
        $(asientosOcupados).attr("class","ocupado");
        $(".control").children().first().next().next().next().next().children().first()
        .text(asientosOcupados.length);

        
        for(var i=0;;i++){
            if( salaCineButacasJSONActual["butacas"]!=undefined && salaCineButacasJSONActual["butacas"]["butaca"+i] !=undefined){
                salaCineButacasJSONActual["butacas"]["butaca"+i]["estado"]=todasLasButacas[i].getAttribute("class");     
            }
            else{
                break;
            }

        }
        actualizarSalaCineJSON();
        datosElegidoUsuario["Prop_Num_Entrada_Adquirir"]=$("#entradasAReservar").text();
        almacenarLocalStorage("key_datos_elegidos_usuario",datosElegidoUsuario);
        almacenarLocalStorage("key_sala_cine",salaCineJSON);
        almacenarLocalStorage("key_sala_cine_butacas",salaCineButacasJSON);
        window.location.href='pagopelicula.html';
    }
    else{
        generarToast("<p><b><i>Error debes seleccionar el asiento disponible</i></b>"+
        "</p><i>Los asientos de color blancos son los disponibles actualmente</i></b>",
        "error","toast-top-right",200,2000);
    }
}
