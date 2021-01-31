$(document).ready(function(){

	function pageHref(){

		let rutaAbsoluta = self.location.href;   
		let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		let rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
		return rutaRelativa;  
	}   

    	switch(pageHref()){

		case "evento.html#recitales":

		alert(pageHref());

		$("#recitales").css("display","block");
        $(".re").css("display","block");
        $("#recitales").siblings().css("display","none");
        $(".re").siblings().css("display","none");
		$(".titulo").text("RECITALES");
		$(".cambio-hora").text("28/01/2021 20hs");
		$(".cambio-organizador").text("Iure");
		
		break;

		case "evento.html#karaoke":


		alert(pageHref());

		$("#karaoke").css("display","block");
        $(".ka").css("display","block");
        $(".ka").siblings().css("display","none");
        $("#karaoke").siblings().css("display","none");
		$(".titulo").text("KARAOKE");
		$(".cambio-hora").text("02/09/2021 23hs");
		$(".cambio-organizador").text("Organizador2");
		
		break;

		case "evento.html#cumpleanos":

		alert(pageHref());

		$("#cumpleanos").css("display","block");
        $(".cu").css("display","block");
        $(".cu").siblings().css("display","none");
        $("#cumpleanos").siblings().css("display","none");
		$(".titulo").text("CUMPLEAÑOS");
		$(".cambio-hora").text("10/07/2021 20hs");
		$(".cambio-organizador").text("Organizador3");
		
		break;

		case "evento.html#casamientos":
		alert(pageHref());
		$("#casamientos").css("display","block");
        $(".ca").css("display","block");
        $(".ca").siblings().css("display","none");
        $("#casamientos").siblings().css("display","none");
		$(".titulo").text("CASAMIENTOS");
		$(".cambio-hora").text("20/09/2021 23hs");
		$(".cambio-organizador").text("Organizador4");

		
		break;

		case "evento.html#egresados":
		alert(pageHref());
		$("#egresados").css("display","block");
        $(".eg").css("display","block");
        $(".eg").siblings().css("display","none");
        $("#egresados").siblings().css("display","none");
		$(".titulo").text("EGRESADOS");
		$(".cambio-hora").text("12/12/2021 20hs");
		$(".cambio-organizador").text("Organizador5");
		
		break;

		case "evento.html#fiesta15":
		alert(pageHref());
		$("#fiesta15").css("display","block");
        $(".fi").css("display","block");
        $(".fi").siblings().css("display","none");
        $("#fiesta15").siblings().css("display","none");
		$(".titulo").text("FIESTA DE 15");
		$(".cambio-hora").text("08/08/2021 21hs");
		$(".cambio-organizador").text("Organizador6");
		
		break;



	}
	
 

})