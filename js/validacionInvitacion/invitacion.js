require(['jquery','redireccionarPagina','validacionInvitacion/tarjeta-personalizada','validacionInvitacion/tarjeta-personalizada2','personalizar-invitacion','clases/carrito','clases/instancias/validacionCarrito','events-search'],

	function($,r,t,t2,i,carro, search) {

		r;
		t;
		t2;
		i;
		carro;
        search;

	 $(".marca").click(function(){
     $(location).attr("href","index.html");
     })

     

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

    
		
	})