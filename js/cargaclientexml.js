$(document).ready(function(){
        
    $.get("../Xml/ClientesXML.xml",function(data){
        
        var clientes=$(data).find("CLIENTE");
        clientes.each(function(){
            //console.log($(this).children().eq(0).text());
            var opnombre=$("<option>",{"text": $(this).children().eq(0).text(),
            "value":$(this).attr("IDCLIENTE")});
            //console.log($(this).attr("IDCLIENTE"))
            $("#selectcliente").append(opnombre);
        });
        
     
    });
    $("#selectcliente").change(function(){
        $("#resultado").empty();
        $.get("../Xml/ClientesXML.xml",function(data){
            var clientes=$(data).find("CLIENTE");
            clientes.each(function(){
                //if($("#selectcliente option:selected").text()==$(this).children().eq(0).text()){
                if($("#selectcliente option:selected").val()==$(this).attr("IDCLIENTE")){
                    var nombre=$(this).children().eq(0).text();
                    var direccion=$(this).children().eq(1).text();
                    var email=$(this).children().eq(2).text();
                    var codigopostal=$(this).children().eq(3).text();
                    var paginaweb=$(this).children().eq(4).text();
                    var imagencliente=$(this).children().eq(5).text();
                    console.log(nombre);
                    console.log(direccion);
                    console.log(email);
                    console.log(codigopostal);
                    console.log(paginaweb);
                    console.log(imagencliente);
                    

                    
                    var salto=$("<br>");
                    var cajanombre=$("<h2>",{
                        "text":nombre
                        });
                    var cajadireccion=$("<h3>",{
                        "text":direccion
                        });
                    var cajaemail=$("<h4>",{
                        "text":email
                    });
                    var cajaCP=$("<h4>",{
                        "text":codigopostal
                        });
                    var cajaweb=$("<a>",{
                        "text":paginaweb,
                        "href":paginaweb
                    });
                    var cajaimagen=$("<img>",{
                        "src":imagencliente,
                        "class":"img-circle"
                        });
                        $("#resultado").append(cajanombre)
                                  .append(salto)
                                  .append(cajadireccion)
                                  .append(salto)
                                  .append(cajaemail)
                                  .append(salto)
                                  .append(cajaCP)
                                  .append(salto)
                                  .append(cajaweb)
                                  .append(salto)
                                  .append(cajaimagen);
                }
                
            });
        });
    });

console.log("inicio");
});