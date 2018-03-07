"use strict";

function domSVG(){
    let cont=0;
    let xmlns="http://www.w3.org/2000/svg";
    let widthSVG=salaCineButacasJSONActual['dimensionCine']['width'];
    let heightSVG=salaCineButacasJSONActual['dimensionCine']['height'];
    let nodoSVG;
    let nodoSymbol;
    let nodoHijo;
   
    $('section').append('<article>');
    nodoSVG=crearNodoInsertBeforeNSHtml(window.document.getElementsByTagName("article")[2],"svg",xmlns,"",cont++);
    nodoSVG.setAttributeNS(null,"viewBox","0 0 300 100");
    nodoSymbol=crearNodoInsertBeforeNSHtml(nodoSVG,"symbol",xmlns,"",cont++);//creando symbol butaca
    nodoSymbol.setAttributeNS(null,"id","butaca");
    nodoSymbol.setAttributeNS(null,"fill","white");
    nodoSymbol.setAttributeNS(null,"stroke","black");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"rect",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"x",2.2);
    nodoHijo.setAttributeNS(null,"y",4);
    nodoHijo.setAttributeNS(null,"width",1);
    nodoHijo.setAttributeNS(null,"height",10);
    nodoHijo.setAttributeNS(null,"fill","black");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"rect",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"x",4.7);
    nodoHijo.setAttributeNS(null,"y",11);
    nodoHijo.setAttributeNS(null,"rx",1);
    nodoHijo.setAttributeNS(null,"ry",1);
    nodoHijo.setAttributeNS(null,"width",9.4);
    nodoHijo.setAttributeNS(null,"height",6);
    nodoHijo.setAttributeNS(null,"style","fill:var(--primary-color)");
    nodoHijo.setAttributeNS(null,"stroke","black");
    nodoHijo.setAttributeNS(null,"stroke-width","0.2");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"rect",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"x",3.8);
    nodoHijo.setAttributeNS(null,"y",2.2);
    nodoHijo.setAttributeNS(null,"width",11);
    nodoHijo.setAttributeNS(null,"height",10.8);
    nodoHijo.setAttributeNS(null,"style","fill:var(--primary-color)");
    nodoHijo.setAttributeNS(null,"stroke-width","0.2");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"rect",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"x",15.4);
    nodoHijo.setAttributeNS(null,"y",4);
    nodoHijo.setAttributeNS(null,"width",1);
    nodoHijo.setAttributeNS(null,"height",10);
    nodoHijo.setAttributeNS(null,"fill","black");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"ellipse",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"cx",9.3);
    nodoHijo.setAttributeNS(null,"cy",2.3);
    nodoHijo.setAttributeNS(null,"rx",3.5);
    nodoHijo.setAttributeNS(null,"ry",1);
    nodoHijo.setAttributeNS(null,"fill","black");
    nodoHijo.setAttributeNS(null,"stroke","black");
    nodoHijo.setAttributeNS(null,"stroke-width","2");

    nodoSymbol=crearNodoInsertBeforeNSHtml(nodoSVG,"symbol",xmlns,"",cont++);//creando symbol fila
    nodoSymbol.setAttributeNS(null,"id","fila");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"rect",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"x",200);
    nodoHijo.setAttributeNS(null,"y",50);
    nodoHijo.setAttributeNS(null,"width",200);
    nodoHijo.setAttributeNS(null,"height",200);
    nodoHijo.setAttributeNS(null,"stroke","black");
    nodoHijo.setAttributeNS(null,"stroke-width","2");
    nodoHijo.setAttributeNS(null,"fill","#48ACDA");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"text",xmlns,"F1 I",cont++);
    nodoHijo.setAttributeNS(null,"x",228);
    nodoHijo.setAttributeNS(null,"y",180);
    nodoHijo.setAttributeNS(null,"font-size","80px");
    nodoHijo.setAttributeNS(null,"height",200);
    nodoHijo.setAttributeNS(null,"stroke","black");
    nodoHijo.setAttributeNS(null,"stroke-width","2");
    nodoHijo.setAttributeNS(null,"fill","black");

    nodoSymbol=crearNodoInsertBeforeNSHtml(nodoSVG,"symbol",xmlns,"",cont++);//creando symbol pantalla
    nodoSymbol.setAttributeNS(null,"id","pantalla");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"rect",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"x",93);
    nodoHijo.setAttributeNS(null,"y",53);
    nodoHijo.setAttributeNS(null,"width",100);
    nodoHijo.setAttributeNS(null,"height",6);
    nodoHijo.setAttributeNS(null,"fill","#48ACDA");
    nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol,"rect",xmlns,"",cont++);
    nodoHijo.setAttributeNS(null,"x",95);
    nodoHijo.setAttributeNS(null,"y",53);
    nodoHijo.setAttributeNS(null,"width",96);
    nodoHijo.setAttributeNS(null,"height",4);
    nodoHijo.setAttributeNS(null,"fill","black");

    //butacas
    for(var i=0;;i++){
        if(salaCineButacasJSONActual['butacas']['butaca'+i]!=undefined){
            let id=salaCineButacasJSONActual['butacas']['butaca'+i]['id'];
            let x=salaCineButacasJSONActual['butacas']['butaca'+i]['coordenadas']['x'];
            let y=salaCineButacasJSONActual['butacas']['butaca'+i]['coordenadas']['y'];
            let estado=salaCineButacasJSONActual['butacas']['butaca'+i]['estado'];//libre ocupado
            let titulo=salaCineButacasJSONActual['butacas']['butaca'+i]['titulo'];

            nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol.parentNode,"use",xmlns,"",cont++);
            nodoHijo.setAttributeNS(null,"class",estado);
            nodoHijo.setAttributeNS(null,"href","#butaca");
            nodoHijo.setAttributeNS(null,"title",titulo);
            nodoHijo.setAttributeNS(null,"x",x);
            nodoHijo.setAttributeNS(null,"y",y);
            nodoHijo.setAttributeNS(null,"id",id);
        }
        else{

            break;
        }
    }
    //filas -> fila izquierda
    for(var i=0;;i++){
        if(salaCineButacasJSONActual['filas']['filaI']['fila'+i]!=undefined){
            let x=salaCineButacasJSONActual['filas']['filaI']['fila'+i]['coordenadas']['x'];
            let y=salaCineButacasJSONActual['filas']['filaI']['fila'+i]['coordenadas']['y'];
            let titulo=salaCineButacasJSONActual['filas']['filaI']['fila'+i]['titulo'];
            let nodoG;
            let strokeTexto=salaCineButacasJSONActual['filas']['filaI']['fila'+i]['textoFila']['stroke'];
            let tamanioLetra=salaCineButacasJSONActual['filas']['filaI']['fila'+i]['textoFila']['fontSize'];;
            let xTexto=salaCineButacasJSONActual['filas']['filaI']['fila'+i]['textoFila']['x'];
            let yTexto=salaCineButacasJSONActual['filas']['filaI']['fila'+i]['textoFila']['y'];

            nodoG=crearNodoInsertBeforeNSHtml(nodoSVG,"g",xmlns,"",cont++);
            nodoHijo=crearNodoInsertBeforeNSHtml(nodoG,"rect",xmlns,"",cont++);
            nodoHijo.setAttributeNS(null,"x",x);
            nodoHijo.setAttributeNS(null,"y",y);
            nodoHijo.setAttributeNS(null,"title",titulo);
            nodoHijo.setAttributeNS(null,"width",15);
            nodoHijo.setAttributeNS(null,"height",15);
            nodoHijo.setAttributeNS(null,"stroke","black");
            nodoHijo.setAttributeNS(null,"stroke-width",0.2);
            nodoHijo.setAttributeNS(null,"fill","#48ACDA");
            nodoHijo=crearNodoInsertBeforeNSHtml(nodoG,"text",xmlns,"F"+(i+1)+" I",cont++);
            nodoHijo.setAttributeNS(null,"x",xTexto);
            nodoHijo.setAttributeNS(null,"y",yTexto);
            nodoHijo.setAttributeNS(null,"font-size",tamanioLetra);
        }
        else{
       
            break;
        }
    }

    //filas -> fila derecha
    for(var i=0;;i++){
        if(salaCineButacasJSONActual['filas']['filaD']['fila'+i]!=undefined){
            let x=salaCineButacasJSONActual['filas']['filaD']['fila'+i]['coordenadas']['x'];
            let y=salaCineButacasJSONActual['filas']['filaD']['fila'+i]['coordenadas']['y'];
            let titulo=salaCineButacasJSONActual['filas']['filaD']['fila'+i]['titulo'];
            let nodoG;
            let strokeTexto=salaCineButacasJSONActual['filas']['filaD']['fila'+i]['textoFila']['stroke'];
            let tamanioLetra=salaCineButacasJSONActual['filas']['filaD']['fila'+i]['textoFila']['fontSize'];;
            let xTexto=salaCineButacasJSONActual['filas']['filaD']['fila'+i]['textoFila']['x'];
            let yTexto=salaCineButacasJSONActual['filas']['filaD']['fila'+i]['textoFila']['y'];

            nodoG=crearNodoInsertBeforeNSHtml(nodoSVG,"g",xmlns,"",cont++);
            nodoHijo=crearNodoInsertBeforeNSHtml(nodoG,"rect",xmlns,"",cont++);
            nodoHijo.setAttributeNS(null,"x",x);
            nodoHijo.setAttributeNS(null,"y",y);
            nodoHijo.setAttributeNS(null,"title","titulo");
            nodoHijo.setAttributeNS(null,"width",15);
            nodoHijo.setAttributeNS(null,"height",15);
            nodoHijo.setAttributeNS(null,"stroke","black");
            nodoHijo.setAttributeNS(null,"stroke-width",0.2);
            nodoHijo.setAttributeNS(null,"fill","#48ACDA");
            nodoHijo=crearNodoInsertBeforeNSHtml(nodoG,"text",xmlns,"F"+(i+1)+" D",cont++);
            nodoHijo.setAttributeNS(null,"x",xTexto);
            nodoHijo.setAttributeNS(null,"y",yTexto);
            nodoHijo.setAttributeNS(null,"font-size",tamanioLetra);
        }
        else{

            break;
        }
    }
       //pantalla cine -> solo hay una pantalla en cine
           let x=salaCineButacasJSONActual['pantalla']['coordenadas']['x'];
           let y=salaCineButacasJSONActual['pantalla']['coordenadas']['y'];
           let titulo=salaCineButacasJSONActual['pantalla']['titulo'];
   
           nodoHijo=crearNodoInsertBeforeNSHtml(nodoSymbol.parentNode,"use",xmlns,"",cont++);
           nodoHijo.setAttributeNS(null,"href","#pantalla");
           nodoHijo.setAttributeNS(null,"title",titulo);
           nodoHijo.setAttributeNS(null,"x",x);
           nodoHijo.setAttributeNS(null,"y",y);
           nodoHijo.setAttributeNS(null,"id","pantalla_cine");
      
        //cartel emergencia
        let cartel=salaCineButacasJSONActual['cartel_emergencia'];

        nodoHijo=crearNodoInsertBeforeNSHtml(nodoSVG,"g",xmlns,"",cont++);
        nodoHijo=crearNodoInsertBeforeNSHtml(nodoHijo,"rect",xmlns,"",cont++);
        nodoHijo.setAttributeNS(null,"fill",cartel['rect']['fill']);
        nodoHijo.setAttributeNS(null,"x",cartel['rect']['x']);
        nodoHijo.setAttributeNS(null,"y",cartel['rect']['y']);
        nodoHijo.setAttributeNS(null,"width",cartel['rect']['width']);
        nodoHijo.setAttributeNS(null,"height",cartel['rect']['height']);
        nodoHijo=crearNodoInsertBeforeNSHtml(nodoHijo.parentNode,"text",xmlns,cartel['text']['texto'],cont++);
        nodoHijo.setAttributeNS(null,"x",cartel['text']['x']);
        nodoHijo.setAttributeNS(null,"y",cartel['text']['y']);
        nodoHijo.setAttributeNS(null,"font-size",cartel['text']['font-size']);
        nodoHijo.setAttributeNS(null,"font-family",cartel['text']['font-family']);
        nodoHijo.setAttributeNS(null,"stroke-width",cartel['text']['stroke-width']);
        nodoHijo.setAttributeNS(null,"fill",cartel['text']['fill']);
        
}


function domDatosPelicula(){
    var nodoHijo, nodoleyenda, nodoEstadoCompra, nodoSection, nodoArticulo;
    var cont=0;

    nodoArticulo=window.document.getElementsByTagName("article")[0];
    nodoHijo=crearNodoInsertBeforeHtml(nodoArticulo,"h1","Realiza tu reserva",cont++);

    nodoArticulo=window.document.getElementsByTagName("article")[1];
    nodoleyenda=crearNodoInsertBeforeHtml(nodoArticulo,"div","",cont++);

    nodoleyenda.setAttribute("class","leyenda");
    nodoHijo=crearNodoInsertBeforeHtml(nodoleyenda,"div","",cont++);

    crearNodoInsertBeforeHtml(nodoHijo,"div","",cont++);
    crearNodoInsertBeforeHtml(nodoHijo,"label","Libre",cont++);
    
    nodoHijo=crearNodoInsertBeforeHtml(nodoleyenda,"div","",cont++);
    crearNodoInsertBeforeHtml(nodoHijo,"div","",cont++);
    crearNodoInsertBeforeHtml(nodoHijo,"label","Ocupado",cont++);
    
    nodoHijo=crearNodoInsertBeforeHtml(nodoleyenda,"div","",cont++);
    crearNodoInsertBeforeHtml(nodoHijo,"div","",cont++);
    crearNodoInsertBeforeHtml(nodoHijo,"label","Reservado",cont++);

    nodoHijo=crearNodoInsertBeforeHtml(nodoleyenda,"div","",cont++);

    nodoEstadoCompra=crearNodoInsertBeforeHtml(nodoArticulo,"div","",cont++);
    nodoEstadoCompra.setAttribute("class","estado_compra");
    nodoHijo=crearNodoInsertBeforeHtml(nodoEstadoCompra,"div","",cont++);
            crearNodoInsertBeforeHtml(nodoHijo,"span","Nº Entradas",cont++);
    nodoHijo=crearNodoInsertBeforeHtml(nodoHijo,"span","0",cont++);
    nodoHijo.setAttribute('id','entradasAReservar');
    nodoHijo=crearNodoInsertBeforeHtml(nodoEstadoCompra,"div","",cont++);
    crearNodoInsertBeforeHtml(nodoHijo,"span","Precio",cont++);
    nodoHijo=crearNodoInsertBeforeHtml(nodoHijo,"span","0",cont++);
    nodoHijo.setAttribute('id','precioTotal');

    nodoHijo=crearNodoInsertBeforeHtml(nodoHijo.parentNode.parentNode,"div","",cont++);
    nodoHijo=crearNodoInsertBeforeHtml(nodoHijo,"input","",cont++);
    nodoHijo.setAttribute("type","button");
    nodoHijo.setAttribute("value","Reservar Asientos");
    nodoHijo.setAttribute("id","boton_reservar");
}