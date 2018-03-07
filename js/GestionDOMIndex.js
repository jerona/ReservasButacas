"use strict";

function guardarPeliculaElegida(idPelicula){
    for(var i=0;i<tamanioJSONPeliculas;i++){
        if(listaJSONPeliculas["pelicula_"+i]["id"]==idPelicula){
            almacenarLocalStorage('key_pelicula_elegida',listaJSONPeliculas["pelicula_"+i])
            i=tamanioJSONPeliculas;
        }
    }

}

function domEntranteCatalogo(){
    $("section").attr("aria-labelledby","Catalogo peliculas").append("<article>").children().append("<div>").children().append("<h1>").children().text("Catalogo peliculas").attr("id","pelicula").parent().after("<div>").next().append("<p>").children().text("Reserva tu pelicula ahora");    
}

function domPeliculas(listaJSONPeliculas,tamanioJSON){

    for(var i=0;i<tamanioJSON;i++){
        let idPelicula=listaJSONPeliculas["pelicula_"+i]["id"];
        let coverPelicula=listaJSONPeliculas["pelicula_"+i]["cover"];
        let nombrePelicula=listaJSONPeliculas["pelicula_"+i]["nombre"];
        let generoPelicula=listaJSONPeliculas["pelicula_"+i]["genero"];
        let sipnosis=listaJSONPeliculas["pelicula_"+i]["sipnosis"];
        let idiomaVoces=listaJSONPeliculas["pelicula_"+i]["voces"]["idioma"];
        let idiomaVocesImg=listaJSONPeliculas["pelicula_"+i]["voces"]["src_img"];
        let idiomaTexto=listaJSONPeliculas["pelicula_"+i]["texto"]["idioma"];
        let idiomaTextoImg=listaJSONPeliculas["pelicula_"+i]["texto"]["src_img"];
        
        
        $("section").append("<article>").find("article").last().addClass("left")
        .append("<div>").children().attr("tabindex","0").attr("aria-label","Datos de la pelicula a Reservar").addClass("pelicula")
        .append("<img>").children().attr("tabindex","0").attr("id","img_reservar&"+idPelicula).attr("src",coverPelicula).attr("alt","Datos de la pelicula")
        .after("<div>").next().attr("tabindex","0").attr("aria-labelledby","label_email_"+i).addClass("reserva_correo")
        .append("<img>").children().attr("src","img/email.png").attr("alt","Reservar pelicula por correo")
        .after("<label>").next().attr("id","label_email_"+i).text("Reservar por email").parent()
        .after("<div>").next().attr("tabindex","0").attr("aria-labelledby","label_sms_"+i).addClass("reserva_sms")
        .append("<img>").children().attr("src","img/sms.png").attr("alt","Reservar pelicula por email")
        .after("<label>").next().attr("id","label_sms_"+i).text("Reservar por sms");
    
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
    
        .after("<input>").next().attr("type","button").addClass("boton_reservar").attr("id","boton_reservar&"+idPelicula).attr("value","Enviar").attr("aria-label","Reservar asientos pelicula "+nombrePelicula)
        .parent().after("<hr/>");
    }

    $(".boton_reservar").on("click",irAReservarPelicula);
    $(".pelicula").find(">img").on("click",irAReservarPelicula);
        
}

function irAReservarPelicula(){
    let id=$(this).attr("id");
    let posId=id.lastIndexOf("&")+1;
    let idPelicula=id.substring(posId,id.length);

    guardarPeliculaElegida(idPelicula);
    window.location.href="peliculareservar.html";
}