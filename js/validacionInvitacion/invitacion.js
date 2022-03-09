require(['jquery','backIndex','redireccionarPagina','validacionInvitacion/tarjeta-personalizada','validacionInvitacion/tarjeta-personalizada2','clases/carrito','clases/instancias/validacionCarrito','events-search'],

	   ($,backIndex,redireccionarPagina,tarjetaPersonalizada,tarjetaPersonalizada2,carroClase, carroObjeto, busquedaEvento)=> {

		backIndex;
		redireccionarPagina;
		tarjetaPersonalizada;
		tarjetaPersonalizada2;
		carroClase;
		carroObjeto;

    let idTarjeta = $(".tarjeta").attr("id");

     $(".imprimir").click(()=>{
       
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