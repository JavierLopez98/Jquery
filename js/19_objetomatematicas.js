//creamos el objeto
var Matematicas = function(num){
    //propiedad para almacenar el valor que nos han pasado en el constructor
    this.numero=num;
    //propiedad para almacenar el doble del numero
    this.doble=0;
    //tendremos un metodo para generar el doble
    //ese metodo lo hace con funcion anonima
    //por lo que almacenamos el objeto this
    //en una variable intermedia
    var obj=this;
    this.generarDoble=function(){
        //cambiamos algo del objeto
        obj.doble=obj.numero*2;
        //devolvermos el valor doble directamente
        //return obj.numero*2;
    }
}