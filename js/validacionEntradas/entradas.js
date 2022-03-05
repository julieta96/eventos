require(['jquery','backIndex','clases/instancias/eventos','modal','personalizar-invitacion','redireccionarPagina','validacionEntradas/total-compra','clases/carrito','clases/instancias/validacionCarrito','events-search'], 
    function($,backIndex,eventos,modal,personalizarInvitacion,redireccionarPagina,totalCompra,carrito,validacionCarrito,search){

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

    $("#fecha-recital").text(`${eventos.recitalDatos.getFecha}`);
    $("#titulo-recital").text(`${eventos.recitalDatos.getNombre}`);
    $(".precio-r").text(`${eventos.recitalDatos.getPrecio}`);
    $(".cant-re").text(localStorage.getItem("contador-re"));

    $("#fecha-karaoke").text(`${eventos.karaokeDatos.getFecha}`);
    $("#titulo-karaoke").text(`${eventos.karaokeDatos.getNombre}`);
    $(".precio-k").text(`${eventos.karaokeDatos.getPrecio}`);
    $(".cant-kk").text(localStorage.getItem("contador-kk"));

    $("#fecha-cumple").text(`${eventos.cumpleDatos.getFecha}`);
    $("#titulo-cumple").text(`${eventos.cumpleDatos.getNombre}`);
    $(".precio-cum").text(`${eventos.cumpleDatos.getPrecio}`);
    $(".cant-cm").text(localStorage.getItem("contador-cm"));

    $("#fecha-casamiento").text(`${eventos.casamientoDatos.getFecha}`);
    $("#titulo-casamiento").text(`${eventos.casamientoDatos.getNombre}`);
    $(".precio-ca").text(`${eventos.casamientoDatos.getPrecio}`);
    $(".cant-ca").text(localStorage.getItem("contador-ca"));

    $("#fecha-egresado").text(`${eventos.egresadoDatos.getFecha}`);
    $("#titulo-egresado").text(`${eventos.egresadoDatos.getNombre}`);
    $(".precio-eg").text(`${eventos.egresadoDatos.getPrecio}`);
    $(".cant-eg").text(localStorage.getItem("contador-eg"));

    $("#fecha-fiesta15").text(`${eventos.fiesta15Datos.getFecha}`);
    $("#titulo-fiesta15").text(`${eventos.fiesta15Datos.getNombre}`);
    $(".precio-15").text(`${eventos.fiesta15Datos.getPrecio}`);
    $(".cant-15").text(localStorage.getItem("contador-15"));

    //$(".total").text($(".cantidad").text()*$(".precio").text());

   $(".t-r").text( $(".cant-re").text() * $(".precio-r").text());
   $(".t-k").text( $(".cant-kk").text() * $(".precio-k").text());
   $(".t-cum").text( $(".cant-cm").text() * $(".precio-cum").text());
   $(".t-ca").text( $(".cant-ca").text() * $(".precio-ca").text());
   $(".t-eg").text( $(".cant-eg").text() * $(".precio-eg").text());
   $(".t-15").text( $(".cant-15").text() * $(".precio-15").text());

    redireccionarPagina;
   

    	$(".b-scomprar").click(function(){

		$(location).attr("href","index.html");
	})

  search;



})