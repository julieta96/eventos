require(['jquery','clases/instancias/eventos','page-href', 'validacionInvitacion/tarjeta-personalizada'],
		($,objeto, page ,tarjetaPersonalizada )=>{


	    //para pagina evento--------------------------------------------------------------------------------

    	switch(page.page){

		case "evento.html#recital":

		$("#recital").css("display","block");
        $(".re").css("display","block");
        $("#recital").siblings().css("display","none");
        $(".re").siblings().css("display","none");
		$(".titulo").text(`${objeto.recitalDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.recitalDatos.getFecha} ${objeto.recitalDatos.getHora}`);
		$(".cambio-organizador").text(`${objeto.recitalDatos.getOrganizador.getNombre} ${objeto.recitalDatos.getOrganizador.getApellido}`);
		$(".cambio-pagina").attr("href","formulario.html#recital");
		$(".contactar-organizador").attr("href","contacto.html#recital");
		break;

		case "evento.html#karaoke":

		$("#karaoke").css("display","block");
        $(".ka").css("display","block");
        $(".ka").siblings().css("display","none");
        $("#karaoke").siblings().css("display","none");
		$(".titulo").text(`${objeto.karaokeDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.karaokeDatos.getFecha} ${objeto.karaokeDatos.getHora}`);
		$(".cambio-organizador").text(`${objeto.karaokeDatos.getOrganizador.getNombre} ${objeto.karaokeDatos.getOrganizador.getApellido}`);
		$(".cambio-pagina").attr("href","formulario.html#karaoke");
		$(".contactar-organizador").attr("href","contacto.html#karaoke");
		
		break;

		case "evento.html#cumpleanos":

		$("#cumpleanos").css("display","block");
        $(".cu").css("display","block");
        $(".cu").siblings().css("display","none");
        $("#cumpleanos").siblings().css("display","none");
		$(".titulo").text(`${objeto.cumpleDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.cumpleDatos.getFecha} ${objeto.cumpleDatos.getHora}`);
		$(".cambio-organizador").text(`${objeto.cumpleDatos.getOrganizador.getNombre} ${objeto.cumpleDatos.getOrganizador.getApellido}`);
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#cumple");
		
		break;

		case "evento.html#casamiento":
		
		$("#casamientos").css("display","block");
        $(".ca").css("display","block");
        $(".ca").siblings().css("display","none");
        $("#casamientos").siblings().css("display","none");
		$(".titulo").text(`${objeto.casamientoDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.casamientoDatos.getFecha} ${objeto.casamientoDatos.getHora}`);
		$(".cambio-organizador").text(`${objeto.casamientoDatos.getOrganizador.getNombre} ${objeto.casamientoDatos.getOrganizador.getApellido}`);
		$(".cambio-pagina").attr("href","contacto.html#casamiento");
		$(".cambio-pagina >input").attr("value","CONTACTAR ORGANIZADOR");
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#casamiento");

		
		break;

		case "evento.html#egresados":
		
		$("#egresados").css("display","block");
        $(".eg").css("display","block");
        $(".eg").siblings().css("display","none");
        $("#egresados").siblings().css("display","none");
		$(".titulo").text(`${objeto.egresadoDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.egresadoDatos.getFecha} ${objeto.egresadoDatos.getHora}`);
		$(".cambio-organizador").text(`${objeto.egresadoDatos.getOrganizador.getNombre} ${objeto.egresadoDatos.getOrganizador.getApellido}`);
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#egresado");
		
		break;

		case "evento.html#fiesta15":
		
		$("#fiesta15").css("display","block");
        $(".fi").css("display","block");
        $(".fi").siblings().css("display","none");
        $("#fiesta15").siblings().css("display","none");
		$(".titulo").text(`${objeto.fiesta15Datos.getNombre}`);
		$(".cambio-hora").text(`${objeto.fiesta15Datos.getFecha} ${objeto.fiesta15Datos.getHora}`);
		$(".cambio-organizador").text(`${objeto.fiesta15Datos.getOrganizador.getNombre} ${objeto.fiesta15Datos.getOrganizador.getApellido}`);
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#fiesta15");

		break;



	}

	//para pagina entradas----------------------------------------------------------------------------------

	if(page.page=="entradas.html"){

		let botonesPersonalizar=  $(".personalizar");

		botonesPersonalizar.each((i)=>{

		 	let eventoPersonalizado = $(botonesPersonalizar[i]).attr('id');
		 	let buscarTarjetaPersonalizada = localStorage.getItem(`${eventoPersonalizado}Modificado`);

		 	 if( buscarTarjetaPersonalizada == eventoPersonalizado ){

			   $(botonesPersonalizar[i]).removeClass('personalizar').addClass('m-personalizar');
			   $(botonesPersonalizar[i]).attr("value","MODIFICAR PERSONALIZACION");  }
		 })


	}

		

	//para pagina invitacion---------------------------------------------------------------------------------

	const getData=(tituloE , tituloColorE, tituloSizeE ,ubicacionTituloE, fechaHoraE , fechaHoraColorE, fechaHoraSizeE, ubicacionFechaHoraE,fondoE)=>{
           
        let idBoton="";

		$(".b-confirmar").click((e)=>{

	
			localStorage.setItem(tituloE,$(".titulo-e").val());
			localStorage.setItem(tituloColorE,$("#titulo-e").css("color"));
			localStorage.setItem(tituloSizeE,$("#titulo-e").css("font-size"));
			localStorage.setItem(ubicacionTituloE,$("#titulo-e").css("text-align"));

			localStorage.setItem(fechaHoraE,$(".fecha-hora").val());
			localStorage.setItem(fechaHoraColorE,$("#fecha-hora").css("color"));
			localStorage.setItem(fechaHoraSizeE,$("#fecha-hora").css("font-size"));
			localStorage.setItem(ubicacionFechaHoraE,$("#fecha-hora").css("text-align"));

			localStorage.setItem(fondoE,$(".tarjeta").css("background-color"));	

			idBoton=e.target.id;

			localStorage.setItem(`${idBoton}Modificado`, idBoton);
				
	})

		//guardo valores

			$("#titulo-e").text(localStorage.getItem(tituloE));
			//$(".titulo-e").attr("value",$("#titulo-e").text());
			$("#titulo-e").css("color",localStorage.getItem(tituloColorE));
			$("#titulo-e").css("font-size" ,localStorage.getItem(tituloSizeE));
			$("#titulo-e").css("text-align" ,localStorage.getItem(ubicacionTituloE));

			$("#fecha-hora").text(localStorage.getItem(fechaHoraE));
			$("#fecha-hora").css("color",localStorage.getItem(fechaHoraColorE));
			$("#fecha-hora").css("font-size" ,localStorage.getItem(fechaHoraSizeE));
			$("#fecha-hora").css("text-align" ,localStorage.getItem(ubicacionFechaHoraE));

			$(".tarjeta").css("background-color",localStorage.getItem(fondoE));



	}

	switch(page.page){

		case "invitacion.html#recital":

		 $(".b-confirmar").attr("id", "recital");
          
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

		$(".b-confirmar").attr("id", "karaoke");

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

		$(".b-confirmar").attr("id", "cumple");

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

		$(".b-confirmar").attr("id", "casamiento");

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

		$(".b-confirmar").attr("id", "egresados");

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

		$(".b-confirmar").attr("id", "fiesta15");

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
        let nombre = $(i).find("#nombre").val()
        let apellido = $(i).find("#apellido").val()
        let email = $(i).find("#email").val()
        return `<p class='nombre'>${nombre}&nbsp;</p><p class='Apellido'>${apellido}&nbsp;</p><p class='e-mail'>(Email: ${email}),&nbsp;</p>`;
        
    })
	

    $(".inscriptos").html(inscriptos.join(""));
    $(".evento-inscripto").html(evento);
    $(".fecha-horario").html(fechaHora);

	}

	const total=(cantidadInscriptos , precioEvento)=>{

		return cantidadInscriptos*precioEvento;
	}

	switch(page.page){


		case "formulario.html":

		$(".modal-content >h2").css("display" , "none");
        $(".modal-content >p").css("display" , "none");
        $(".inscriptos").html(`<h2>Para inscribirse debe seleccionar 1ero el evento</h2>`);
       $(document).ready(()=>{
        	$(".inscriptos>.nombre ,.inscriptos>.apellido , .inscriptos>.telefono ").remove();
        })
		break;

		case "formulario.html#recital":

		$(".titulo-evento").attr("id","recital");
        $(location).attr("href","formulario.html#recital");
        $(".titulo-evento").text(`${objeto.recitalDatos.getNombre}`);
        $("#inscribirse").click(()=>{
          infoEvento($(".titulo-evento").text() , `${objeto.recitalDatos.getFecha} ${objeto.recitalDatos.getHora}`)
          $("#total").attr("value","$ "+total($(".datos").length ,objeto.recitalDatos.getPrecio));
        })
       
		break;

		case "formulario.html#karaoke":

		$(".titulo-evento").attr("id","karaoke");
        $(location).attr("href","formulario.html#karaoke");
        $(".titulo-evento").text(`${objeto.karaokeDatos.getNombre}`);
        $("#inscribirse").click(()=>{
         infoEvento($(".titulo-evento").text() ,`${objeto.karaokeDatos.getFecha} ${objeto.karaokeDatos.getHora}`);
         $("#total").attr("value","$ "+total($(".datos").length ,objeto.karaokeDatos.getPrecio));
        })

        
		break;

		case "formulario.html#cumple":
		$(".titulo-evento").attr("id","cumple");
        $(location).attr("href","formulario.html#cumple");
        $(".titulo-evento").text(`${objeto.cumpleDatos.getNombre}`);
        $("#inscribirse").click(()=>{
        infoEvento($(".titulo-evento").text() ,`${objeto.cumpleDatos.getFecha} ${objeto.cumpleDatos.getHora}`);
        $("#total").attr("value","$ "+total($(".datos").length ,objeto.cumpleDatos.getPrecio));
         })
		break;

		case "formulario.html#casamiento":

		$(".titulo-evento").attr("id","casamiento");
        $(location).attr("href","formulario.html#casamiento");
        $(".titulo-evento").text(`${objeto.casamientoDatos.getNombre}`);
        $("#inscribirse").click(()=>{
        infoEvento($(".titulo-evento").text() , `${objeto.casamientoDatos.getFecha} ${objeto.casamientoDatos.getHora}`);
        $("#total").attr("value","$ "+total($(".datos").length ,objeto.casamientoDatos.getPrecio));
        })
		break;

		case "formulario.html#egresado":

		$(".titulo-evento").attr("id","egresado");
        $(location).attr("href","formulario.html#egresado");
        $(".titulo-evento").text(`${objeto.egresadoDatos.getNombre}`);
        $("#inscribirse").click(()=>{
        infoEvento($(".titulo-evento").text() , `${objeto.egresadoDatos.getFecha} ${objeto.egresadoDatos.getHora}`);
        $("#total").attr("value","$ "+total($(".datos").length ,objeto.egresadoDatos.getPrecio));
        })
		break;

		case "formulario.html#fiesta15":

		$(".titulo-evento").attr("id","fiesta15");
        $(location).attr("href","formulario.html#fiesta15");
        $(".titulo-evento").text(`${objeto.fiesta15Datos.getNombre}`);
        $("#inscribirse").click(()=>{
        infoEvento($(".titulo-evento").text() , `${objeto.fiesta15Datos.getFecha} ${objeto.fiesta15Datos.getHora}`);
        $("#total").attr("value","$ "+total($(".datos").length ,objeto.fiesta15Datos.getPrecio));
        })
		break;



	}

})