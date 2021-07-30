require(['jquery','redireccionarPagina','validacionInvitacion/tarjeta-personalizada','validacionInvitacion/tarjeta-personalizada2','personalizar-invitacion','clases/carrito','clases/instancias/validacionCarrito'],

	function($,r,t,t2,i,carro) {

		r;
		t;
		t2;
		i;
		carro;

	 $(".marca").click(function(){
     $(location).attr("href","index.html");
     })

     //let id = $(".tarjeta").attr("id");

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