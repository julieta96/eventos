$(document).ready(function(){

     let contador = 0;

	 function calcularTotal(cantidad , precio){

   	 return cantidad*precio;


   }


	$(".carrito").click(function(){

        
		$(location).attr("href","entradas.html");


	})


   $(".b-detalle-c").on('click',function(){

      $(".icon-basket").css("color","#cddc39");

         
          contador++;

           $(".contador").text(contador);
     
  

   })



	


	
})