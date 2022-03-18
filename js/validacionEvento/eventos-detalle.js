require(['jquery','clases/instancias/eventos','clases/instancias/organizadores'],($,objeto,org)=>{

	$("#f-izq").click(()=>{

		let slider= $(".div-contenedor-img");

		$(slider[0]).css("display","none");
		$(slider[1]).css("display","block");

	})


	$("#f-der").click(()=>{

		let slider= $(".div-contenedor-img");

		$(slider[1]).css("display","none");
		$(slider[0]).css("display","block");

	})

		$(".detalle").click((e)=>{



       let cambiarEvento = e.target.classList[1] ;

		switch(cambiarEvento){


		case('a_eventos1'):
		$("#recitales").css("display","block");
        $(".re").css("display","block");
        $("#recitales").siblings().css("display","none");
        $(".re").siblings().css("display","none");
		$(".titulo").text(`${objeto.recitalDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.recitalDatos.getFecha} ${objeto.recitalDatos.getHora}`);
		$(".cambio-organizador").text(`${org.luz.getNombre} ${org.luz.getApellido}`);
		$(".cambio-pagina").attr("href","formulario.html#recital");
		$(".contactar-organizador").attr("href","contacto.html#recital");
		
        break;

        case('a_eventos2'):
        $("#karaoke").css("display","block");
        $(".ka").css("display","block");
        $(".ka").siblings().css("display","none");
        $("#karaoke").siblings().css("display","none");
		$(".titulo").text(`${objeto.karaokeDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.karaokeDatos.getFecha} ${objeto.karaokeDatos.getHora}`);
		$(".cambio-organizador").text(`${org.janet.getNombre} ${org.janet.getApellido}`);
		$(".cambio-pagina").attr("href","formulario.html#karaoke");
		$(".contactar-organizador").attr("href","contacto.html#karaoke");
		
		break;

		case('a_eventos3'):
		$("#cumpleanos").css("display","block");
        $(".cu").css("display","block");
        $(".cu").siblings().css("display","none");
        $("#cumpleanos").siblings().css("display","none");
		$(".titulo").text(`${objeto.cumpleDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.cumpleDatos.getFecha} ${objeto.cumpleDatos.getHora}`);
		$(".cambio-organizador").text(`${org.camilo.getNombre} ${org.camilo.getApellido}`);
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#cumple");
		
		break;

		case('a_eventos4'):
		$("#casamientos").css("display","block");
        $(".ca").css("display","block");
        $(".ca").siblings().css("display","none");
        $("#casamientos").siblings().css("display","none");
		$(".titulo").text(`${objeto.casamientoDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.casamientoDatos.getFecha} ${objeto.casamientoDatos.getHora}`);
		$(".cambio-organizador").text(`${org.carlos.getNombre} ${org.carlos.getApellido}`);
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#casamiento");
		
		break;

		case('a_eventos5'):
		$("#egresados").css("display","block");
        $(".eg").css("display","block");
        $(".eg").siblings().css("display","none");
        $("#egresados").siblings().css("display","none");
		$(".titulo").text(`${objeto.egresadoDatos.getNombre}`);
		$(".cambio-hora").text(`${objeto.egresadoDatos.getFecha} ${objeto.egresadoDatos.getHora}`);
		$(".cambio-organizador").text(`${org.luis.getNombre} ${org.luis.getApellido}`);
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#egresado");
		
		break;

		case('a_eventos6'):
		$("#fiesta15").css("display","block");
        $(".fi").css("display","block");
        $(".fi").siblings().css("display","none");
        $("#fiesta15").siblings().css("display","none");
		$(".titulo").text(`${objeto.fiesta15Datos.getNombre}`);
		$(".cambio-hora").text(`${objeto.fiesta15Datos.getFecha} ${objeto.fiesta15Datos.getHora}`);
		$(".cambio-organizador").text(`${org.paola.getNombre} ${org.paola.getApellido}`);
		$(".cambio-pagina").css("display","none");
		$(".contactar-organizador").attr("href","contacto.html#fiesta15");
		
		break;



		}
	
	})



})
