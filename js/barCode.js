define(['jquery','lib/jsBarCode/JsBarcode.all.min'],($, barcode)=> {

	const getBarCode=() =>{


		let numAleatorio=Math.random() * (10 - 0) + 0;
		let valorAString = numAleatorio.toString();
		let eliminarPunto=valorAString.replace('.','');
		let codigoNumericoGenerado=eliminarPunto;

		JsBarcode("#barcode", `${codigoNumericoGenerado}`, {
		  format: "codabar",
		  lineColor: "#000",
		  width: 2,
		  height: 40,
		  displayValue: true
		});

		let img = $("#barcode").attr('src');
		let base64 = btoa(img);

		return img;
	}

	return{

		barcode:getBarCode()
	}

});