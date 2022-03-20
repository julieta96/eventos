require(['jquery','clases/carrito'],
	   ($, c)=>{

		const carrito = new c(1);

		//let eventoComprado=null;
        let contador = localStorage.getItem("cantidadEventos") || 0; 
		let contador10 = localStorage.getItem("contadorRecital")|| 0;
		let contador20 = localStorage.getItem("contadorKaraoke")|| 0;
		let contador30 = localStorage.getItem("contadorCumple")|| 0;
		let contador40 = localStorage.getItem("contadorCasamiento")|| 0;
		let contador50 = localStorage.getItem("contadorEgresados")|| 0;
		let contador60 = localStorage.getItem("contadorFiesta15")|| 0;

		$(".comprar").on('click',(eventoSeleccionado)=>{

			let eventoComprado = eventoSeleccionado.target.id;
			carrito.comprarEvento(eventoComprado);
			console.log(eventoComprado);

            let contadorEvento= eventoSeleccionado.target.classList[1];

			switch(contadorEvento){

				case "recital":
				contador10++
				carrito.agregarCantidadEvento(eventoComprado ,contador10);
				localStorage.setItem("contador-re",contador10);
				break;

				case "karaoke":
				contador20++
				carrito.agregarCantidadEvento(eventoComprado ,contador20);
				localStorage.setItem("contador-kk",contador20);
				break;

				case "cumple":
				contador30++
				carrito.agregarCantidadEvento(eventoComprado ,contador30);
				localStorage.setItem("contador-cm",contador30);
				break;

				case "casamiento":
				contador40++
				carrito.agregarCantidadEvento(eventoComprado ,contador40);
				localStorage.setItem("contador-ca",contador40);

				break;

				case "egresados":
				contador50++
				carrito.agregarCantidadEvento(eventoComprado ,contador50);
				localStorage.setItem("contador-eg",contador50);

				break;

				case "fiesta15":
				contador60++
				carrito.agregarCantidadEvento(eventoComprado ,contador60);
				localStorage.setItem("contador-15",contador60);

				break;
			}

			let listaDeCompras = carrito.getListaEventos;

			localStorage.setItem('compra', JSON.stringify(listaDeCompras));
             console.log(listaDeCompras);

			contador= parseInt(contador10)+parseInt(contador20)+parseInt(contador30)+
			parseInt(contador40)+parseInt(contador50)+parseInt(contador60);
		    $(".contador").text(contador);
            localStorage.setItem("cantidadEventos", contador);
            

	
	
		})

       
	    $(".contador").text(localStorage.getItem("cantidadEventos"));
		$(".total-pago").text(localStorage.getItem("totalCarrito"));
		carrito.estaVacio();

   
	})