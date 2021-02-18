$(document).ready(function(){

	function pageHref(){

		let rutaAbsoluta = self.location.href;   
		let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		let rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
		return rutaRelativa;  
	}   



	    //para pagina evento--------------------------------------------------------------------------------

    	switch(pageHref()){

		case "evento.html#recitales":

		//alert(pageHref());

		$("#recitales").css("display","block");
        $(".re").css("display","block");
        $("#recitales").siblings().css("display","none");
        $(".re").siblings().css("display","none");
		$(".titulo").text("RECITALES");
		$(".cambio-hora").text("28/01/2021 20hs");
		$(".cambio-organizador").text("Iure");
		$(".cambio-pagina").attr("href","formulario.html#recital");
		break;

		case "evento.html#karaoke":

		/*alert(pageHref());*/

		$("#karaoke").css("display","block");
        $(".ka").css("display","block");
        $(".ka").siblings().css("display","none");
        $("#karaoke").siblings().css("display","none");
		$(".titulo").text("KARAOKE");
		$(".cambio-hora").text("02/09/2021 23hs");
		$(".cambio-organizador").text("Organizador2");
		$(".cambio-pagina").attr("href","formulario.html#karaoke");
		
		break;

		case "evento.html#cumpleanos":

		//alert(pageHref());

		$("#cumpleanos").css("display","block");
        $(".cu").css("display","block");
        $(".cu").siblings().css("display","none");
        $("#cumpleanos").siblings().css("display","none");
		$(".titulo").text("CUMPLEAÑOS");
		$(".cambio-hora").text("10/07/2021 20hs");
		$(".cambio-organizador").text("Organizador3");
		$(".cambio-pagina").attr("href","formulario.html#cumple");
		
		break;

		case "evento.html#casamientos":
		//alert(pageHref());
		$("#casamientos").css("display","block");
        $(".ca").css("display","block");
        $(".ca").siblings().css("display","none");
        $("#casamientos").siblings().css("display","none");
		$(".titulo").text("CASAMIENTOS");
		$(".cambio-hora").text("20/09/2021 23hs");
		$(".cambio-organizador").text("Organizador4");
		$(".cambio-pagina").attr("href","formulario.html#casamiento");

		
		break;

		case "evento.html#egresados":
		//alert(pageHref());
		$("#egresados").css("display","block");
        $(".eg").css("display","block");
        $(".eg").siblings().css("display","none");
        $("#egresados").siblings().css("display","none");
		$(".titulo").text("EGRESADOS");
		$(".cambio-hora").text("12/12/2021 20hs");
		$(".cambio-organizador").text("Organizador5");
		$(".cambio-pagina").attr("href","formulario.html#egresado");
		
		break;

		case "evento.html#fiesta15":
		//alert(pageHref());
		$("#fiesta15").css("display","block");
        $(".fi").css("display","block");
        $(".fi").siblings().css("display","none");
        $("#fiesta15").siblings().css("display","none");
		$(".titulo").text("FIESTA DE 15");
		$(".cambio-hora").text("08/08/2021 21hs");
		$(".cambio-organizador").text("Organizador6");
		$(".cambio-pagina").attr("href","formulario.html#fiesta15");
		
		break;



	}


	//para pagina formulario--------------------------------------------------------------------------------

	const infoEvento=(evento , fechaHora) => {

		let inscriptos = Array.from($(".datos")).map(i => {
        console.log(i);
        let nombre = $(i).find("#nombre").val()
        let apellido = $(i).find("#apellido").val()
        let telefono = $(i).find("#telefono").val()
        return `<p class='nombre'>${nombre}&nbsp;</p><p class='Apellido'>${apellido}&nbsp;</p><p class='telefono'>(Telefono: ${telefono}),&nbsp;</p>`;
        
    })

    $(".inscriptos").html(inscriptos.join(""));
    $(".evento-inscripto").html(evento);
    $(".fecha-horario").html(fechaHora);

	}

	switch(pageHref()){


		case "formulario.html":
		$(".modal-content >h2").css("display" , "none");
        $(".modal-content >p").css("display" , "none");
        $(".inscriptos").html(`<h2>Para inscribirse debe seleccionar 1ero el evento</h2>`);
        window.load(function(){
        	$(".inscriptos>.nombre ,.inscriptos>.apellido , .inscriptos>.telefono ").remove();
        })
		break;

		case "formulario.html#recital":

		//alert(pageHref());
		$(".titulo-evento").attr("id","recital");
        $(location).attr("href","formulario.html#recital");
        $(".titulo-evento").text("RECITAL");
        $("#inscribirse").click(function(){
          infoEvento($(".titulo-evento").text() , "28/01/2021 20hs")
        })
       
		break;

		case "formulario.html#karaoke":

		/*alert(pageHref());*/

		$(".titulo-evento").attr("id","karaoke");
        $(location).attr("href","formulario.html#karaoke");
        $(".titulo-evento").text("KARAOKE");
        $("#inscribirse").click(function(){
         infoEvento($(".titulo-evento").text() , "02/09/2021 23hs");
        })

        
		break;

		case "formulario.html#cumple":

		//alert(pageHref());
		$(".titulo-evento").attr("id","cumple");
        $(location).attr("href","formulario.html#cumple");
        $(".titulo-evento").text("CUMPLEAÑOS");
        infoEvento($(".titulo-evento").text() , "10/07/2021 20hs");
		break;

		case "formulario.html#casamiento":
		//alert(pageHref());

		$(".titulo-evento").attr("id","casamiento");
        $(location).attr("href","formulario.html#casamiento");
        $(".titulo-evento").text("CASAMIENTOS");
        infoEvento($(".titulo-evento").text() , "20/09/2021 23hs");
		break;

		case "formulario.html#egresado":
		//alert(pageHref());

		$(".titulo-evento").attr("id","egresado");
        $(location).attr("href","formulario.html#egresado");
        $(".titulo-evento").text("EGRESADOS");
        infoEvento($(".titulo-evento").text() , "12/12/2021 20hs");
		break;

		case "formulario.html#fiesta15":
		//alert(pageHref());

		$(".titulo-evento").attr("id","fiesta15");
        $(location).attr("href","formulario.html#fiesta15");
        $(".titulo-evento").text("FIESTA DE 15");
        infoEvento($(".titulo-evento").text() , "08/08/2021 21hs");
		break;



	}
	
 

})