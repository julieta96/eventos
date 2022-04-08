require(['jquery','clases/sendEmail','lib/jsPDF/jspdf.umd.min','logo','barCode'],($, sendEmail,pdf,logo,barCode) =>{

		let nombre="";
		let apellido="";
		let email="";
		let datos = $('.datos');
		let nombreEvento="";
		let evento="";
		let valor="";
		const actualidad = Date.now();
		const fecha =  new Date(actualidad);
		const anoActual= fecha.getFullYear();
		const mesActual=fecha.getMonth();
		const proximoDia=fecha.getDate()+1;

		const send = new sendEmail();
		const doc = new pdf.jsPDF();

    	let img=`data:image/png;base64,${logo.logo}`;
    	doc.addImage(img, 'png', 10, 10, 180, 22);
        doc.setFontSize(13).setFont(undefined, 'normal');

        const getDataToPdf= (nombre, apellido, valor, evento, dia, mes, ano, codigoDeBarras)=>{


			     doc.text(`Inscripcion realizada por: ${nombre} ${apellido}`, 10,40);
				 doc.text(`Valor: $${valor}.0`,10,55);
				 doc.text(`Talon de pago inscripcion para evento: ${evento}`, 10,65);
				 doc.setFontSize(13).setFont(undefined, 'bold');
				 doc.text(`VENCIMIENTO: ${proximoDia}/${mesActual}/${anoActual}`, 10,75);
		    	 doc.addImage(codigoDeBarras,'png', 55, 105, 100, 20);
		    	 let pdfInscripcion = doc.output('datauristring'); 


		    	 return pdfInscripcion;

		}

		$("#inscribirse").click(()=>{

			for(let i=0;i<$(datos).length;i++){

				 nombreEvento=$(".a-titulo >h2").attr('id');
              	 evento=nombreEvento.substr(0,1).toUpperCase()+nombreEvento.substr(1,nombreEvento.length);
              	 valor= localStorage.getItem(`precio${evento}`);
				 nombre=$(datos[i]).find("#nombre").val();
				 apellido=$(datos[i]).find("#apellido").val();
				 email=$(datos[i]).find("#email").val();
				 
				 let barra=`${barCode.barcode}`;
		    	 let pdfInscripcion = getDataToPdf(nombre, apellido, valor, evento, proximoDia, mesActual, anoActual, barra); 
		
				 send.sendUser(nombre, apellido, email, evento,pdfInscripcion);

			}      		
      })
	
   
})