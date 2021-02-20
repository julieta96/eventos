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

	//para pagina entradas---------------------------------------------------------------------------------

	const getData=(tituloE , tituloColorE, tituloSizeE ,ubicacionTituloE, fechaHoraE , fechaHoraColorE, fechaHoraSizeE, ubicacionFechaHoraE,fondoE)=>{

		$(".b-confirmar").click(function(){

		if($(".titulo-e").val()!="Titulo" && $(".fecha-hora").val()!="fecha, hora"){

            $(".personalizar").removeClass('personalizar').addClass('m-personalizar');
			$(".personalizar").text("MODIFICAR PERSONALIZACION");

			localStorage.setItem(tituloE,$(".titulo-e").val());
			localStorage.setItem(tituloColorE,$("#titulo-e").css("color"));
			localStorage.setItem(tituloSizeE,$("#titulo-e").css("font-size"));
			localStorage.setItem(ubicacionTituloE,$("#titulo-e").css("text-align"));

			localStorage.setItem(fechaHoraE,$(".fecha-hora").val());
			localStorage.setItem(fechaHoraColorE,$("#fecha-hora").css("color"));
			localStorage.setItem(fechaHoraSizeE,$("#fecha-hora").css("font-size"));
			localStorage.setItem(ubicacionFechaHoraE,$("#fecha-hora").css("text-align"));

			localStorage.setItem(fondoE,$(".tarjeta").css("background-color"));		
				
		}

	})

		//guardo valores

			$("#titulo-e").text(localStorage.getItem(tituloE));
			$("#titulo-e").css("color",localStorage.getItem(tituloColorE));
			$("#titulo-e").css("font-size" ,localStorage.getItem(tituloSizeE));
			$("#titulo-e").css("text-align" ,localStorage.getItem(ubicacionTituloE));


			$("#fecha-hora").text(localStorage.getItem(fechaHoraE));
			$("#fecha-hora").css("color",localStorage.getItem(fechaHoraColorE));
			$("#fecha-hora").css("font-size" ,localStorage.getItem(fechaHoraSizeE));
			$("#fecha-hora").css("text-align" ,localStorage.getItem(ubicacionFechaHoraE));

			$(".tarjeta").css("background-color",localStorage.getItem(fondoE));	



	}

	switch(pageHref()){

		case "invitacion.html#recital":
          
          getData(
          	"recital-titulo" ,
          	"recital-colorTitulo",
          	"recital-sizeTitulo",
          	"recital-ubicacionTitulo", 
          	"recital-fechaHora" , 
          	"recital-colorFechaHora" ,
          	"recital-sizeFechaHora",
          	"recital-ubicacionFechaHora",
          	"recital-fondo");

		break;

		case "invitacion.html#karaoke":

		 getData(
          	"karaoke-titulo" ,
          	"karaoke-colorTitulo",
          	"karaoke-sizeTitulo", 
          	"karaoke-ubicacionTitulo", 
          	"karaoke-fechaHora" , 
          	"karaoke-colorFechaHora" ,
          	"karaoke-sizeFechaHora",
          	"karaoke-ubicacionFechaHora",
          	"karaoke-fondo");
		break;

		case "invitacion.html#cumple":

		  getData(
          	"cumple-titulo" ,
          	"cumple-colorTitulo",
          	"cumple-sizeTitulo",
          	"cumple-ubicacionTitulo",
          	"cumple-fechaHora" , 
          	"cumple-colorFechaHora" ,
          	"cumple-sizeFechaHora",
          	"cumple-ubicacionFechaHora",
          	"cumple-fondo");
		
		break;

		case "invitacion.html#casamiento":

		  getData(
          	"casamiento-titulo" ,
          	"casamiento-colorTitulo",
          	"casamiento-sizeTitulo", 
          	"casamiento-ubicacionTitulo",
          	"casamiento-fechaHora" , 
          	"casamiento-colorFechaHora" ,
          	"casamiento-sizeFechaHora",
          	"casamiento-ubicacionFechaHora",
          	"casamiento-fondo");

		
		break;

		case "invitacion.html#egresados":

		  getData(
          	"egresados-titulo" ,
          	"egresados-colorTitulo",
          	"egresados-sizeTitulo", 
          	"egresados-ubicacionTitulo",
          	"egresados-fechaHora" , 
          	"egresados-colorFechaHora" ,
          	"egresados-sizeFechaHora",
          	"egresados-ubicacionFechaHora",
          	"egresados-fondo");
		
		break;

		case "invitacion.html#fiesta15":

	     getData(
          	"fiesta15-titulo" ,
          	"fiesta15-colorTitulo",
          	"fiesta15-sizeTitulo",
          	"fiesta15-ubicacionTitulo",
          	"fiesta15-fechaHora" , 
          	"fiesta15-colorFechaHora" ,
          	"fiesta15-sizeFechaHora",
          	"fiesta15-ubicacionFechaHora",
          	"fiesta15-fondo");
		
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

		$(".titulo-evento").attr("id","recital");
        $(location).attr("href","formulario.html#recital");
        $(".titulo-evento").text("RECITAL");
        $("#inscribirse").click(function(){
          infoEvento($(".titulo-evento").text() , "28/01/2021 20hs")
        })
       
		break;

		case "formulario.html#karaoke":

		$(".titulo-evento").attr("id","karaoke");
        $(location).attr("href","formulario.html#karaoke");
        $(".titulo-evento").text("KARAOKE");
        $("#inscribirse").click(function(){
         infoEvento($(".titulo-evento").text() , "02/09/2021 23hs");
        })

        
		break;

		case "formulario.html#cumple":

		$(".titulo-evento").attr("id","cumple");
        $(location).attr("href","formulario.html#cumple");
        $(".titulo-evento").text("CUMPLEAÑOS");
        infoEvento($(".titulo-evento").text() , "10/07/2021 20hs");
		break;

		case "formulario.html#casamiento":

		$(".titulo-evento").attr("id","casamiento");
        $(location).attr("href","formulario.html#casamiento");
        $(".titulo-evento").text("CASAMIENTOS");
        infoEvento($(".titulo-evento").text() , "20/09/2021 23hs");
		break;

		case "formulario.html#egresado":

		$(".titulo-evento").attr("id","egresado");
        $(location).attr("href","formulario.html#egresado");
        $(".titulo-evento").text("EGRESADOS");
        infoEvento($(".titulo-evento").text() , "12/12/2021 20hs");
		break;

		case "formulario.html#fiesta15":

		$(".titulo-evento").attr("id","fiesta15");
        $(location).attr("href","formulario.html#fiesta15");
        $(".titulo-evento").text("FIESTA DE 15");
        infoEvento($(".titulo-evento").text() , "08/08/2021 21hs");
		break;



	}
	
 

})