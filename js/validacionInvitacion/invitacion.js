require(['jquery','backIndex','redireccionarPagina','validacionInvitacion/tarjeta-personalizada','validacionInvitacion/tarjeta-personalizada2','personalizar-invitacion','clases/carrito','clases/instancias/validacionCarrito','events-search'],

	function($,backIndex,redireccionarPagina,tarjetaPersonalizada,tarjetaPersonalizada2,personalizarInvitacion,carroClase, carroObjeto, busquedaEvento) {

		backIndex;
		redireccionarPagina;
		tarjetaPersonalizada;
		tarjetaPersonalizada2;
		personalizarInvitacion;
		carroClase;
		carroObjeto;

    let idTarjeta = $(".tarjeta").attr("id");

      

     $(".imprimir").click(function(){
       
       console.log(idTarjeta);

     	let imprimirTarjeta = document.getElementById(idTarjeta).innerHTML;
     	let w = window.open();
     	w.document.write(imprimirTarjeta);
     	w.document.close();
     	w.focus(); 
		w.print();
		w.close()
		return true;

     	
     })

      busquedaEvento;

    
		
	})