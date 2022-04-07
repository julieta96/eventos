require(['jquery','clases/carrito'],
	   ($, c)=>{

		const carrito = new c(1);

		//localStorage.setItem("cantidadEventos",0);
		
        let contador = parseInt(localStorage.getItem("cantidadEventos"))||0 ; 
		let contador10 = parseInt(localStorage.getItem("contador-re"))|| 0;
		let contador20 = parseInt(localStorage.getItem("contador-kk"))|| 0;
		let contador30 = parseInt(localStorage.getItem("contador-cm"))|| 0;
		let contador40 = parseInt(localStorage.getItem("contador-ca"))|| 0;
		let contador50 = parseInt(localStorage.getItem("contador-eg"))|| 0;
		let contador60 = parseInt(localStorage.getItem("contador-15"))|| 0;

		$(".comprar").on('click',(eventoSeleccionado)=>{

			let eventoComprado = eventoSeleccionado.target.id;
			carrito.comprarEvento(eventoComprado);
			
            let contadorEvento= eventoSeleccionado.target.classList[1];

			switch(contadorEvento){

				case "recital":
				contador10++
				carrito.agregarCantidadEvento(eventoComprado ,contador10);
				localStorage.setItem("contador-re",contador10);
				localStorage.setItem(`${contadorEvento}Comprado`,contadorEvento);
				
				break;

				case "karaoke":
				contador20++
				carrito.agregarCantidadEvento(eventoComprado ,contador20);
				localStorage.setItem("contador-kk",contador20);
				localStorage.setItem(`${contadorEvento}Comprado`,contadorEvento);
				
				break;

				case "cumple":
				contador30++
				carrito.agregarCantidadEvento(eventoComprado ,contador30);
				localStorage.setItem("contador-cm",contador30);
				localStorage.setItem(`${contadorEvento}Comprado`,contadorEvento);
				
				break;

				case "casamiento":
				contador40++
				carrito.agregarCantidadEvento(eventoComprado ,contador40);
				localStorage.setItem("contador-ca",contador40);
				localStorage.setItem(`${contadorEvento}Comprado`,contadorEvento);
				
				break;

				case "egresados":
				contador50++
				carrito.agregarCantidadEvento(eventoComprado ,contador50);
				localStorage.setItem("contador-eg",contador50);
				localStorage.setItem(`${contadorEvento}Comprado`,contadorEvento);
				
				break;

				case "fiesta15":
				contador60++
				carrito.agregarCantidadEvento(eventoComprado ,contador60);
				localStorage.setItem("contador-15",contador60);
				localStorage.setItem(`${contadorEvento}Comprado`,contadorEvento);
				
				break;
			}

			let listaDeCompras = carrito.getListaEventos;

			localStorage.setItem('compra', JSON.stringify(listaDeCompras));
             console.log(listaDeCompras);

			contador= contador10+contador20+contador30+
			contador40+contador50+contador60;
		    $(".contador").text(contador);
            localStorage.setItem("cantidadEventos", contador);
  
		})

		if(!carrito.estaVacio()){

            	$(".icon-basket").css("color","#cddc39");

         } 

		$(".icon-basket").click(()=>{

			carrito.vaciarCarrito();
			$(".icon-basket").css("color","#fff"); alert("gunciona")
		})

	    $(".contador").text(localStorage.getItem("cantidadEventos"));
		$(".total-pago").text(localStorage.getItem("totalCarrito"));
   
	})