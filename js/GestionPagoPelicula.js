"use strict";

var datosElegidoUsuario;

cargarDatosAnterioresUsuario();

$(function (){
    cumplimentarDatosRecopiladosAnteriores();
});


function cargarDatosAnterioresUsuario(){
    datosElegidoUsuario=recogerLocalStorage('key_datos_elegidos_usuario');
    
    if(datosElegidoUsuario==undefined || datosElegidoUsuario==null){
        alert('No se han cumplimentado los datos anteriores, redirigiendo pagina principal');
        window.location.href='index.html';
    }
}

function cumplimentarDatosRecopiladosAnteriores(){
    let entradasTotales=datosElegidoUsuario['Prop_Num_Entrada_Adquirir'];
    $('#span_nombre_pelicula').text(datosElegidoUsuario['Prop_NombrePelicula']);
    $('#span_nombre_sala_cine').text(datosElegidoUsuario['Prop_IdSalacine']);
    $('#span_entradas_totales').text(entradasTotales+"");
    $('#span_precio_total').text(parseInt(entradasTotales)*4.50+"€");
    $('#span_dia_semana').text(datosElegidoUsuario['Prop_DiaPelicula']+" - "+datosElegidoUsuario['Prop_HoraPelicula']);
    $('#span_hora').text(datosElegidoUsuario['Prop_HoraPelicula']);
}


function verificarFormularioPago(){
    var elementosFormulario, i, nombre, apellidos, email, email2, telefono, tamanio, datosValidos;
    
    datosValidos=false;
    elementosFormulario=$("form").find("label").find("input");
    i=0;

    nombre=$('.input-container').find('input')[0];
    apellidos=$('.input-container').find('input')[1]; 
    email=$('.input-container').find('input')[2];
    email2=$('.input-container').find('input')[3];
    telefono=$('.input-container').find('input')[4];

    if(!nombre.checkValidity() || !apellidos.checkValidity() ||
       !telefono.checkValidity() || !email.checkValidity() ||
       !email2.checkValidity()){
        generarToast("<p><b><i>Error no se ha cumplimentado correctamente el formulario</i></b>",
        "error","toast-top-full-width",300,1000);
    }
    else if(email.value!=email2.value){
        generarToast("<p><b><i>Error validacion de datos</i></b>"+
        "</p><i>Los emails introducidos no coinciden</i></b>",
        "error","toast-top-full-width",200,2000);
    }
    else{
        datosValidos= true;
    }
    return datosValidos;
}

function tramiteCompra(){
    let estadoComprasRealizadas=recogerLocalStorage("key_datos_compras_json");
    let tamanio=tamanioJSON(estadoComprasRealizadas);
    let realizarCompra;

    let idSalacine=datosElegidoUsuario['Prop_IdSalacine'];
    let nombrePelicula=datosElegidoUsuario['Prop_NombrePelicula'];
    let diaPelicula=datosElegidoUsuario['Prop_DiaPelicula'];
    let horaPelicula=datosElegidoUsuario['Prop_HoraPelicula'];
    let numEntradas=datosElegidoUsuario['Prop_Num_Entrada_Adquirir'];
    let nombre=$('.input-container').find('input')[0];
    let apellidos=$('.input-container').find('input')[1]; 
    let email=$('.input-container').find('input')[2];
    let telefono=$('.input-container').find('input')[4];

    if((realizarCompra=confirmacionCompra()) && (realizarCompra=verificarFormularioPago())){
        
        if(estadoComprasRealizadas==undefined || estadoComprasRealizadas==null){
            estadoComprasRealizadas=
                {
                "compras":{    
                    "compra0":{
                        "datos_usuario":{
                            "nombre":nombre,
                            "apellidos":apellidos,
                            "email":email,
                            "telefono":telefono
                        },
                        "datos_entrada":{
                            "id_sala_cine":idSalacine,
                            "nombre_pelicula":nombrePelicula,
                            "dia_pelicula":diaPelicula,
                            "hora_pelicula":horaPelicula,
                            "num_entradas":numEntradas
                        }
                    }
                }
            };
            
        }
        else{
            estadoComprasRealizadas["compras"]["compra"+tamanio]={   
                "datos_usuario":{
                    "nombre":nombre,
                    "apellidos":apellidos,
                    "email":email,
                    "telefono":telefono
                },
                "datos_entrada":{
                    "id_sala_cine":idSalacine,
                    "nombre_pelicula":nombrePelicula,
                    "dia_pelicula":diaPelicula,
                    "hora_pelicula":horaPelicula,
                    "num_entradas":numEntradas
                }
            }
        }

        almacenarLocalStorage("key_datos_compras_json",estadoComprasRealizadas);
    }

    return realizarCompra;
}

function confirmacionCompra(){
    let mensaje="¿Deseas confirmar el pago de las entradas?"+
                "\n             Pulsa Aceptar para continuar";

    return confirm(mensaje) ? true : false;

}
