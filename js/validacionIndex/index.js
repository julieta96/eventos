require(['jquery','clases/instancias/eventos' ,'validacionIndex/slider','validacionIndex/slider-automatico','validacionIndex/validacion_js','clases/carrito','clases/instancias/validacionCarrito','events-search'],

 function($,objetos ,slider,sliderA,pasos,c,carro, search){

     $(".marca").click(function(){
     $(location).attr("href","index.html");
     })
     
     objetos.eventosDatos;
     slider;
     sliderA;
     pasos;

     $(".e1").attr("id",objetos.recitalDatos.getId);
     $(".e2").attr("id",objetos.karaokeDatos.getId);
     $(".e3").attr("id",objetos.cumpleDatos.getId);
     $(".e4").attr("id",objetos.casamientoDatos.getId);
     $(".e5").attr("id",objetos.egresadoDatos.getId);
     $(".e6").attr("id",objetos.fiesta15Datos.getId);

     $(".e1 > .recital ").attr("id",objetos.recitalDatos.getId);
     $(".e2 > .karaoke").attr("id",objetos.karaokeDatos.getId);
     $(".e3 > .cumple").attr("id",objetos.cumpleDatos.getId);
     $(".e4 > .casamiento").attr("id",objetos.casamientoDatos.getId);
     $(".e5 > .egresados").attr("id",objetos.egresadoDatos.getId);
     $(".e6 > .fiesta15").attr("id",objetos.fiesta15Datos.getId);
     c;
     carro;
     search;
})




 