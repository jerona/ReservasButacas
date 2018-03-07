"use strict";

function domPelicula(peliculaJSONElegida){
    let idPelicula=peliculaJSONElegida["id"];
    let coverPelicula=peliculaJSONElegida["cover"];
    let nombrePelicula=peliculaJSONElegida["nombre"];
    let generoPelicula=peliculaJSONElegida["genero"];
    let sipnosis=peliculaJSONElegida["sipnosis"];
    let idiomaVoces=peliculaJSONElegida["voces"]["idioma"];
    let idiomaVocesImg=peliculaJSONElegida["voces"]["src_img"];
    let idiomaTexto=peliculaJSONElegida["texto"]["idioma"];
    let idiomaTextoImg=peliculaJSONElegida["texto"]["src_img"];
    
    $("section").append("<article>").find("article").last().addClass("left")
    .append("<div>").children().attr("tabindex","0").attr("aria-label","Datos de la pelicula a Reservar").addClass("pelicula")
    .append("<img>").children().attr("tabindex","0").attr("id","img_reservar&"+idPelicula).attr("src",coverPelicula).attr("alt","Datos de la pelicula")
    .after("<div>").next().attr("tabindex","0").attr("aria-labelledby","label_email_"+idPelicula).addClass("reserva_correo")
    .append("<img>").children().attr("src","img/email.png").attr("alt","Reservar pelicula por correo")
    .after("<label>").next().attr("id","label_email_"+idPelicula).text("Reservar por email").parent()
    .after("<div>").next().attr("tabindex","0").attr("aria-labelledby","label_sms_"+idPelicula).addClass("reserva_sms")
    .append("<img>").children().attr("src","img/sms.png").attr("alt","Reservar pelicula por email")
    .after("<label>").next().attr("id","label_sms_"+idPelicula).text("Reservar por sms");

    $(".left").last()
    .after("<article>").next().addClass("right").append("<div>").children().attr("tabindex",0).attr("aria-label","Titulo "+nombrePelicula)
    .append("<h1>").children().text(nombrePelicula)
    .after("<h2>").next().attr("tabindex",0).attr("aria-label",generoPelicula).text(generoPelicula)
    .after("<h2>").next().attr("tabindex",0).text("Sipnosis")
    .after("<p>").next().attr("tabindex",0).text(sipnosis).parent()

    .after("<div>").next().attr("tabindex",0).addClass("voces")
    .append("<label>").children().text("voces")
    .after("<img>").next().attr("src",idiomaVocesImg).attr("alt",idiomaVoces).parent()

    .after("<div>").next().attr("tabindex",0).addClass("texto")
    .append("<label>").children().text("texto")
    .after("<img>").next().attr("src",idiomaTextoImg).attr("alt",idiomaTexto).parent()

    .parent().after("<hr/>");
}


function domHorario(horarioJSON){
    // $(".texto").after("<div>")
    var horariosListo=false;
    var horaLista=false;
    var diaAnterior="";
    var arrayDias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

    for(var i=0;i<arrayDias.length;i++){
        horaLista=false;
        if(horarioJSON[arrayDias[i]]!=undefined){
               
            for(var x=0;horaLista==false;x++){
    
                if(horarioJSON[arrayDias[i]]['Hora'+(x+1)]!=undefined){
                    let hora=horarioJSON[arrayDias[i]]['Hora'+(x+1)]['Hora'];
                    let claseReserva=horarioJSON[arrayDias[i]]['Hora'+(x+1)]['butacas_libre']>0 ? "reserva_disponible":"reserva_no_disponible";
                    
                    if(diaAnterior==arrayDias[i]){
                        $('section').find('.horario').children().last().after("<div>").next().addClass(claseReserva).text(hora);
                    }
                    
                    else{
                        $("section").find('.right').children().last().after("<div>").next().addClass("horario").append("<div>").children().text(arrayDias[i])
                        .after("<div>").next().addClass(claseReserva).text(hora);
                    }
                    diaAnterior=arrayDias[i];    
                }
                else{
                    horaLista=true;
                }
                $(".reserva_disponible").on("click",cargarReserva);
            }
            
        }
        else{
            horariosListo=true;
        }
    }
}

