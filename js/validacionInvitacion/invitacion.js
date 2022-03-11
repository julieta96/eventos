require(['jquery','backIndex','redireccionarPagina','validacionInvitacion/tarjeta-personalizada','clases/carrito','clases/instancias/validacionCarrito'],

	   ($,backIndex,redireccionarPagina,tarjetaPersonalizada,carroClase, carroObjeto)=> {

		backIndex;
		redireccionarPagina;
		tarjetaPersonalizada;
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