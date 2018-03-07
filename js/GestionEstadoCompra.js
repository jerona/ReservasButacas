
var estadoCompraJSON;//JSON dinámico almacena datos de compras y usuario.

$(function(){
    cargarDatosEstadoCompra();
    rellenarFormularioUltimaCompra();
    lanzarAvisoEstadoCompra();
});


function cargarDatosEstadoCompra(){
    estadoCompraJSON=recogerLocalStorage('key_datos_compras_json');
    
    if(estadoCompraJSON==undefined || estadoCompraJSON==null){
        alert('No se han realizado ninguna compra anteriormente...\nse cargará la pagina principal');
        window.location.href='index.html';
    }
}

function rellenarFormularioUltimaCompra(){
    let tamanio=tamanioJSON(estadoCompraJSON['compras']);
    let datosEntrada=estadoCompraJSON['compras']['compra'+(tamanio-1)]['datos_entrada'];
    let datosUsuario=estadoCompraJSON['compras']['compra'+(tamanio-1)['datos_usuario']];

    $('#span_nombre_pelicula').text(datosEntrada['nombre_pelicula']);
    $('#span_nombre_sala_cine').text(datosEntrada['id_sala_cine']);
    $('#span_entradas_totales').text(datosEntrada['num_entradas']);
    $('#span_precio_total').text(datosEntrada['num_entradas']*4.50+"€");
    $('#span_dia_semana').text(datosEntrada['dia_pelicula']+" - "+datosEntrada['hora_pelicula']);

}

function lanzarAvisoEstadoCompra(){
    generarToast("<p><b><i>Compra agregada correctamente</i></b>"+
    "</p><i>Mostrando la última compra</i></b>",
    "success","toast-top-right",200,2000);
}