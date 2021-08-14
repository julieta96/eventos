 require(['jquery','clases/instancias/eventos'], function($,objetos){

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
     
     const filtrar = ()=>{

          resultado.innerHTML='';

          const textoBuscado = buscador.value.toLowerCase();

          for(let evento of listaEventos){

               let nombre = evento.nombreEvento.toLowerCase();



               if(nombre.indexOf(textoBuscado)!== -1){//retorna elemento si existe, sino retorna -1

                   resultado.innerHTML+=`<li class="link-evento"><a href="${evento.link}">${evento.nombreEvento.toLowerCase()}<a/></li>`;


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


    })