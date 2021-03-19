require(['jquery','carrito'],
	function($, c){

		const carrito = new c(1);

		let eventoComprado=null;

		let contador10 = localStorage.getItem("contadorRecital")|| 0;
		let contador20 = localStorage.getItem("contadorKaraoke")|| 0;
		let contador30 = localStorage.getItem("contadorCumple")|| 0;
		let contador40 = localStorage.getItem("contadorCasamiento")|| 0;
		let contador50 = localStorage.getItem("contadorEgresados")|| 0;
		let contador60 = localStorage.getItem("contadorFiesta15")|| 0;

		let totalCantidad = parseInt(contador10) + parseInt(contador20) + 
		                    parseInt(contador30) + parseInt(contador40) + 
		                    parseInt(contador50)+ parseInt(contador60);

	    localStorage.setItem("totalCantidadEventos", totalCantidad);
		

		console.log(totalCantidad)
		

		$(".comprar").on('click',function(eventoSeleccionado){

            $(".contador").text(totalCantidad);
			eventoComprado = eventoSeleccionado.target.id;
			carrito.comprarEvento(eventoComprado);
			//localStorage.setItem("totalCarrito", carrito.total);
		    //console.log(carrito.getTotal)

            let contadorEvento= eventoSeleccionado.target.classList[1];

			switch(contadorEvento){

				case "recital":
				contador10++
				carrito.agregarCantidadEvento(eventoComprado ,contador10);
				console.log("contador : "+contador10)
				localStorage.setItem("contadorRecital",contador10);
				console.log(localStorage.getItem("contadorRecital"))
				break;

				case "karaoke":
				contador20++
				carrito.agregarCantidadEvento(eventoComprado ,contador20);
				console.log("contador : "+ contador20)
				localStorage.setItem("contadorKaraoke",contador20);
				break;

				case "cumple":
				contador30++
				carrito.agregarCantidadEvento(eventoComprado ,contador30);
				console.log("contador : "+ contador30)
				localStorage.setItem("contadorCumple",contador30);
				break;

				case "casamiento":
				contador40++
				carrito.agregarCantidadEvento(eventoComprado ,contador40);
				console.log("contador : "+ contador40)
				localStorage.setItem("contadorCasamiento",contador40);

				break;

				case "egresados":
				contador50++
				carrito.agregarCantidadEvento(eventoComprado ,contador50);
				console.log("contador : "+ contador50)
				localStorage.setItem("contadorEgresados",contador50);

				break;

				case "fiesta15":
				contador60++
				carrito.agregarCantidadEvento(eventoComprado ,contador60);
				console.log("contador : "+ contador60)
				localStorage.setItem("contadorFiesta15",contador60);

				break;
			}

			console.log(carrito.calcularTotal())

			
		})

		/*$("#removeEvent").click(function(eventoSeleccionadoParaEliminar){

		 let eliminarEvento = eventoSeleccionadoParaEliminar.target.id;
            
           carrito.eliminarEvento(eliminarEvento);

        })*/
       

        
	})