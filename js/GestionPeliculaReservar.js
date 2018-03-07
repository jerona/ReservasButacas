"use strict";


var peliculaElegidaJSON;
var datosElegidos={};
var salaCineJSON;
var diasSalaCinePeliculaJSON=new Array();

datosElegidos={
    "Prop_IdPelicula":"",
    "Prop_NombrePelicula":"",
    "Prop_IdSalacine":"",
    "Prop_DiaPelicula":"",
    "Prop_HoraPelicula":"",
    "Prop_EtiquetaSalacineX":"",
    "Prop_EtiquetaPeliculaX":"",
    "Prop_Num_Entrada_Adquirir":""
};

$(function (){
    $("#img_regresar").on('keydown',function (e){
        if (e.which == 13) {
            window.location.href='index.html';
        }
    }).on('click',function (e){
            window.location.href='index.html';
    });
    peliculaElegidaJSON=recogerLocalStorage('key_pelicula_elegida');
    datosElegidos["Prop_IdPelicula"]=peliculaElegidaJSON["id"];
    datosElegidos["Prop_NombrePelicula"]=peliculaElegidaJSON["nombre"];
    cargarSalasCine();
    domPelicula(peliculaElegidaJSON);
    cargarDiasSalaCinePelicula(peliculaElegidaJSON);
    domHorario(diasSalaCinePeliculaJSON);
    //rellenarDatosPeliculaHtml();
});

function rellenarDatosPeliculaHtml(){
    idPelicula=recogerLocalStorage("key_id_pelicula");

    $(".pelicula").find(">img").attr("src",peliculaJSON[idPelicula]["cover"]).
                                attr("aria-label","Cover pelicula "+peliculaJSON[idPelicula]["nombre"]);
    $(".contenido_pelicula").find("h1").first().text(peliculaJSON[idPelicula]["nombre"]).
                                        attr("aria-label","Titulo "+peliculaJSON[idPelicula]["nombre"]).
                                        next().text(peliculaJSON[idPelicula]["genero"]).
                                        attr("aria-label","Genero "+peliculaJSON[idPelicula]["genero"]).
                                        next().text("Sipnosis").
                                        next().text(peliculaJSON[idPelicula]["sipnosis"]);
}


function cargarSalasCine(peliculaElegidaJSON){
    salaCineJSON=recogerLocalStorage('key_sala_cine');

    if(salaCineJSON==undefined || salaCineJSON==null){
        almacenarLocalStorage('key_sala_cine',salaCineJSONDefault);
        salaCineJSON=recogerLocalStorage('key_sala_cine');
    }
}


function cargarDiasSalaCinePelicula(peliculaElegidaJSON){
    var arraySalaCineX;
    var arrayPeliculaSalaX;
    var cont2;

    arraySalaCineX=jsonArray(salaCineJSON);

    for(var i=0;i<arraySalaCineX.length;i++){
       
        let arrayPeliculaSalaX=jsonArray(salaCineJSON['sala_cine_'+i]);
            cont2=arrayPeliculaSalaX.length;
        for(var x=0;x<cont2;x++){
          
           if(salaCineJSON["sala_cine_"+i]["pelicula_"+x]!=undefined && 
            salaCineJSON["sala_cine_"+i]["pelicula_"+x]["idPelicula"]==peliculaElegidaJSON["id"]){
            datosElegidos["Prop_IdSalacine"]=salaCineJSON["sala_cine_"+i]["id"];
            datosElegidos["Prop_EtiquetaSalacineX"]="sala_cine_"+i;
            datosElegidos["Prop_EtiquetaPeliculaX"]="pelicula_"+x;

            diasSalaCinePeliculaJSON=salaCineJSON["sala_cine_"+i]["pelicula_"+x]["horario"];
            almacenarLocalStorage("key_horario_pelicula_elegida",diasSalaCinePeliculaJSON);
            return true;
           }
        }
    }
}

function cargarReserva(){
    let hora=$(this).text();
    let dia=$(this).parent().children().first().text();

    datosElegidos["Prop_DiaPelicula"]=dia;
    datosElegidos["Prop_HoraPelicula"]=hora;
    almacenarLocalStorage("key_datos_elegidos_usuario",datosElegidos);
    window.location.href='butacaselegir.html';
}