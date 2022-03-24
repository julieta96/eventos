require(['jquery','lib/jsPDF/jspdf.umd.min','logo','barCode'] , ($,pdf,logo,barCode) =>{

	const doc = new pdf.jsPDF();

    let img=`data:image/png;base64,${logo.logo}`;

    doc.addImage(img, 'png', 10, 10, 180, 22);
  
    doc.setFontSize(13).setFont(undefined, 'bold');
    doc.text('EVENTO', 10,40);
    doc.text('PRECIO UNITARIO', 50,40);
    doc.text('CANTIDAD', 110,40);
    doc.setFontSize(11).setFont(undefined, 'normal');

	$(".b-fcompra").click(()=>{

		let carritoCargado = localStorage.getItem("compra");
		let totalAPagar = 0;
		let carro=JSON.parse(carritoCargado);
		let eventoYPrecio=$(".detalle-compra>.evento-precio");

		for(let i = 0; i < carro.length; i++) {   

			  eventoYPrecio.append(`<span class='nombre-evento'>${carro[i].nombre}</span>
			  					    <span class='precio-evento'>$${carro[i].precio}</span>  `);

              let evento = carro[i].nombre;
              let texto=evento.substr(0,1)+evento.substr(1,evento.length).toLowerCase();
    
			  doc.text(`${texto}`, 10,50+i*6).setFontSize(11).setFont(undefined, 'normal');
              doc.text(`$${carro[i].precio}`, 50,50+i*6).setFontSize(11).setFont(undefined, 'normal');
              
		      totalAPagar+= carro[i].precio;
    	}

	    $(".total-pago").html(totalAPagar);
	    localStorage.setItem("totalAPagar",totalAPagar);

	});

	$(".imprimir-comprobante").click(()=>{
    	doc.setFontSize(13).setFont(undefined, 'bold');
    	doc.text( `TOTAL: $${$(".total-pago").html()}` ,10,90);
    	let barra=`${barCode.barcode}`;
    	doc.addImage(barra,'png', 55, 105, 100, 20);
    	doc.save("comprobante-de-pago.pdf");
    	
    });

    $(".pagar").click(()=>{

    	if(	$(".codigo-seguridad").val()=="" || $(".nro-tarjeta").val()=="" )
    		alert("Debe completar los datos de la tarjeta");
    	else
    		alert("Pago exitoso!");
    	
    });

})