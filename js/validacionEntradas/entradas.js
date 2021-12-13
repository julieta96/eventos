require(['jquery','backIndex','clases/instancias/eventos','modal','personalizar-invitacion','redireccionarPagina','validacionEntradas/entradas','clases/carrito','clases/instancias/validacionCarrito','events-search'], 
    function($,b,e,m,p,r,entradas, search){

     /* $(".marca").click(function(){
     $(location).attr("href","index.html");
     })*/

   $(".fas").click(function(e){

       let cantidadEvento = e.target.classList[2];

       let cantidad = cantidadEvento.substring(0, 7);//cant-re
       let evento = cantidad.substring(5,7);//re 

      let valorPlus = localStorage.getItem(`contador-${evento}`);
      let valorMinus = localStorage.getItem(`contador-${evento}`);

       //PLUS-------------
       
       if(cantidadEvento.includes('p')){

        localStorage.setItem(`contador-${evento}`,valorPlus);
        valorPlus++;

        $(`.${cantidad}`).text(  localStorage.getItem(`contador-${evento}`))

       }

       //----------------------

       //MINUS------------------

       if(cantidadEvento.includes('m')){

         valorMinus--;

         if(valorMinus<0){

          valorMinus=0;
          
         }

         localStorage.setItem(`contador-${evento}`,valorMinus);

        $(`.${cantidad}`).text( localStorage.getItem(`contador-${evento}`))
        $(".contador").text(localStorage.getItem("cantidadEventos"));


       }
    
  })

    $("#fecha-recital").text(`${e.recitalDatos.getFecha}`);
    $("#titulo-recital").text(`${e.recitalDatos.getNombre}`);
    $(".precio-r").text(`${e.recitalDatos.getPrecio}`);
    $(".cant-re").text(localStorage.getItem("contador-re"));

    $("#fecha-karaoke").text(`${e.karaokeDatos.getFecha}`);
    $("#titulo-karaoke").text(`${e.karaokeDatos.getNombre}`);
    $(".precio-k").text(`${e.karaokeDatos.getPrecio}`);
    $(".cant-kk").text(localStorage.getItem("contador-kk"));

    $("#fecha-cumple").text(`${e.cumpleDatos.getFecha}`);
    $("#titulo-cumple").text(`${e.cumpleDatos.getNombre}`);
    $(".precio-cum").text(`${e.cumpleDatos.getPrecio}`);
    $(".cant-cm").text(localStorage.getItem("contador-cm"));

    $("#fecha-casamiento").text(`${e.casamientoDatos.getFecha}`);
    $("#titulo-casamiento").text(`${e.casamientoDatos.getNombre}`);
    $(".precio-ca").text(`${e.casamientoDatos.getPrecio}`);
    $(".cant-ca").text(localStorage.getItem("contador-ca"));

    $("#fecha-egresado").text(`${e.egresadoDatos.getFecha}`);
    $("#titulo-egresado").text(`${e.egresadoDatos.getNombre}`);
    $(".precio-eg").text(`${e.egresadoDatos.getPrecio}`);
    $(".cant-eg").text(localStorage.getItem("contador-eg"));

    $("#fecha-fiesta15").text(`${e.fiesta15Datos.getFecha}`);
    $("#titulo-fiesta15").text(`${e.fiesta15Datos.getNombre}`);
    $(".precio-15").text(`${e.fiesta15Datos.getPrecio}`);
    $(".cant-15").text(localStorage.getItem("contador-15"));

    //$(".total").text($(".cantidad").text()*$(".precio").text());

   $(".t-r").text( $(".cant-re").text() * $(".precio-r").text());
   $(".t-k").text( $(".cant-kk").text() * $(".precio-k").text());
   $(".t-cum").text( $(".cant-cm").text() * $(".precio-cum").text());
   $(".t-ca").text( $(".cant-ca").text() * $(".precio-ca").text());
   $(".t-eg").text( $(".cant-eg").text() * $(".precio-eg").text());
   $(".t-15").text( $(".cant-15").text() * $(".precio-15").text());

    r;
    entradas;
    //carro;

    	$(".b-scomprar").click(function(){

		$(location).attr("href","index.html");
	})

  search;



})