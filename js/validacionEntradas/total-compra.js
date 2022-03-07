require(['jquery','lib/jsPDF/jspdf.umd.min','logoBase64'] , ($,pdf,logoBase64) =>{

	const doc = new pdf.jsPDF();

    let img=`data:image/png;base64,${logoBase64.logo}`;
    doc.addImage(img, 'png', 10, 10, 180, 25);

	$(".b-fcompra").click(()=>{


		let carritoCargado = localStorage.getItem("compra");
		let totalAPagar = 0;
		let carro=JSON.parse(carritoCargado);
		let eventoYPrecio=$(".detalle-compra>.evento-precio");

		for(let i = 0; i < carro.length; i++) {   

			  eventoYPrecio.append(`<span class='nombre-evento'>${carro[i].nombre}</span>
			  					    <span class='precio-evento'>$${carro[i].precio}</span>  `);

			  doc.text(`${carro[i].nombre} $${carro[i].precio}`, 10,50+i*6);

		      totalAPagar+= carro[i].precio;
    	}

	    $(".total-pago").html(totalAPagar);
	    localStorage.setItem("totalAPagar",totalAPagar);

	});

	$(".imprimir-comprobante").click(()=>{
    	
    	doc.text( `Total: $${$(".total-pago").html()}` ,10,75);
    	//let barcode=barCode.barcode;
    	//doc.addImage(barcode, 'png', 10, 85, 180, 25);
    	doc.save("comprobante-de-pago.pdf");
    	
    });

    $(".pagar").click(()=>{

    	if(	$(".codigo-seguridad").val()=="" || $(".nro-tarjeta").val()=="" )
    		alert("Debe completar los datos de la tarjeta");
    	else
    		alert("Pago exitoso!");
    	
    });

})