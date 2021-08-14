require(['jquery','clases/instancias/eventos' ,'validacionIndex/slider','validacionIndex/slider-automatico','validacionIndex/validacion_js','clases/carrito','clases/instancias/validacionCarrito'],

 function($,objetos ,slider,sliderA,pasos,c,carro){

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

     const listaEventos = [//array de objetos
     { nombreEvento:`${objetos.recitalDatos.getNombre}`, link:"evento.html#recitales"},
     { nombreEvento:`${objetos.karaokeDatos.getNombre}` , link:"evento.html#karaoke"},
     { nombreEvento:`${objetos.cumpleDatos.getNombre}`, link:"evento.html#cumpleanos"},
     { nombreEvento:`${objetos.casamientoDatos.getNombre}`, link:"evento.html#casamientos"},
     { nombreEvento:`${objetos.egresadoDatos.getNombre}` , link:"evento.html#egresados"},
     { nombreEvento:`${objetos.fiesta15Datos.getNombre}`, link:"evento.html#fiesta15"}
     ];

     const buscador = document.querySelector("#buscador");
     const lupa = document.querySelector("#lupa");
     const resultado = document.querySelector("#resultado");

     //$("#resultado").css("display","none");
     
     const filtrar = ()=>{

          console.log($("#buscador").val().toLowerCase());

          resultado.innerHTML='';

          const textoBuscado = buscador.value.toLowerCase();

          for(let evento of listaEventos){

               let nombre = evento.nombreEvento.toLowerCase();

               console.log(nombre);

               if(nombre.indexOf(textoBuscado)!== -1){//retorna elemento si existe, sino retorna -1

                   resultado.innerHTML+=`<li><a href="${evento.link}">${evento.nombreEvento.toLowerCase()}<a/></li>`;


               }

          }

            if( resultado.innerHTML=== ''){

                   resultado.innerHTML=`<li>Evento no encontrado</li>`;


               }
     } 

     $("#lupa").click(filtrar());

     $("#buscador").keyup(()=>{

           filtrar();
           $("#resultado").css("display","block");

     });

      $(".header1").click(()=>{

           $("#resultado").css("display","none");

     });

   // filtrar();


})




 