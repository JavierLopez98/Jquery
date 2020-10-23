//queremos crear un objeto que herede de array
var MiArray= function(){
    this.longitud="Longitud: "+this.length;
    this.descripcion="hoy es viernes";
    this.contarElementos=function(){
        return this.length;
    }
    this.sumarElementos=function(){
        var suma=0;
        for (var i=0;i<this.length;i++){
            suma+=this[i];
        }
        return suma;
    }
}
MiArray.prototype=new Array();

//añadir metodos a la clase array
//utilizamos el concepto de extends
Array.prototype.contarElementos=function(){
    return this.length;
}

Array.prototype.sumarElementos=function(){
    var suma=0;
    for(var i=0;i<this.length;i++){
        suma+=this[i];
    }
    return suma;
}