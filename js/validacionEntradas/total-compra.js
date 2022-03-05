require(['jquery', 'lib/jsPDF/jspdf'] , ($,pdf) =>{



	$(".b-fcompra").click(()=>{


		let carritoCargado = localStorage.getItem("compra");
		let totalAPagar = 0;
		let carro=JSON.parse(carritoCargado);
		let eventoYPrecio=$(".detalle-compra>.evento-precio");

		for(let i = 0; i < carro.length; i++) {   

			  eventoYPrecio.append(`<span class='nombre-evento'>${carro[i].nombre}</span> <span>$${carro[i].precio}</span>  `);
		      totalAPagar+= carro[i].precio;
    	}

	    $(".total-pago").html(totalAPagar);
	    localStorage.setItem("totalAPagar",totalAPagar);

	});


    $(".imprimir-comprobante").click(()=>{

    	const doc = new jsPDF();

    	doc.text("Probando PDF", 10,10);
    	doc.save("comprobante-de-pago.pdf");
    	
    });

})