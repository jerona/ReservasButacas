var listaJSONPeliculas;
var idPeliculaElegida;
var tamanioJSONPeliculas;

$( function() {
    cargarPeliculas();
    tamanioJSONPeliculas=tamanioJSON(listaJSONPeliculas);
    domEntranteCatalogo();
    domPeliculas(listaJSONPeliculas,tamanioJSONPeliculas);

    $("#img_regresar").on('keydown',function (e){
        if (e.which == 13) {
            window.location.href='index.html';
        }
    }).on('click',function (e){
            window.location.href='index.html';
    });
    
} );

function cargarPeliculas(){
    listaJSONPeliculas=recogerLocalStorage('key_peliculas_cine');

    if(listaJSONPeliculas==undefined || listaJSONPeliculas==null){
        almacenarLocalStorage('key_peliculas_cine',peliculaJSON);
    }
    listaJSONPeliculas=recogerLocalStorage('key_peliculas_cine');      
}