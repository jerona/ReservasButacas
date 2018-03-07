
function almacenarLocalStorage(clave,obj){
    localStorage.setItem(clave,JSON.stringify(obj)); //->JSON.stringify(obj) crea cadena JSON desde un objeto JavaScript
}  

function recogerLocalStorage(clave){
  var obj=null;
  
  if (localStorage[clave] != undefined) {
      obj=JSON.parse(localStorage.getItem(clave));
  }
  return obj;
}

function eliminarLosLocalStorageDominio(){
    localStorage.clear();
}

function eliminarItemLocalStorage(clave){
    localStorage.removeItem(clave);
}

function localStorageSoportado(){
    var soportado=true, webStorageSoportado;
    
    webStorageSoportado = ('localStorage' in window) && window ['localStorage'] !== null;
    
    if(webStorageSoportado==null || webStorageSoportado==undefined){
        webStorageSoportado=false;
    }
    return soportado;
}