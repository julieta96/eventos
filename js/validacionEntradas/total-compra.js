require(['jquery', 'js/lib/jsPDF/jspdf.js'] , ($,pdf) =>{



	$(".b-fcompra").click(()=>{


		let carritoCargado = localStorage.getItem("compra");
		let totalAPagar = 0;

		for(let i = 0; i < carritoCargado.length; i++) {   

		      let id = $(carritoCargado).key(i);
		      console.log("hola algo no funciona");
		      let eventosCargados = $.parseJSON(carritoCargado.getItem(id));

		      totalAPagar+= eventosCargados[i].precio;
      
    	}

	    $(".total-pago").html(totalAPagar);
	    localStorage.setItem("totalAPagar",totalAPagar);

	});


    $(".imprimir-comprobante").click(()=>{

    	const doc = new jsPDF();

    	doc.text("Probando PDF", 10,10);
    	doc.saveAs("comprobante-de-pago.pdf");

    });

})