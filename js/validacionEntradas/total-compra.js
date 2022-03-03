require(['jquery', 'lib/jsPDF/jspdf'] , ($,pdf) =>{



	$(".b-fcompra").click(()=>{


		let carritoCargado = localStorage.getItem("compra");
		let totalAPagar = 0;
		let carro=JSON.parse(carritoCargado);

		for(let i = 0; i < carro.length; i++) {   

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