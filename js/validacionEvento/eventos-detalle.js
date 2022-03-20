require(['jquery','clases/instancias/eventos'],($,evento)=>{


	let listadoEventos = evento.eventos;


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


	const getEvento =(lista, num)=>{


	     let eventoEncontrado =null;
	     lista.filter((obj)=> {
	     let encontrarEvento = obj;

	     let id = (encontrarEvento.getId).toString();

		     if((id).substring(0, 1)==num){

		        eventoEncontrado=obj;
		     }
	     })

	     return eventoEncontrado;

    }


	$(".detalle").click((e)=>{


		  let eventoSeleccionado = e.target.classList[1];
	      let hrefEvento = $(`.${eventoSeleccionado}`).attr('href');
	      let claseEvento = hrefEvento.substring(1, 3);
	      let num = eventoSeleccionado.substring(9, 10);
	      let eventoEncontrado = getEvento(listadoEventos, num);

	      $(`${hrefEvento}`).css("display","block");
		  $(`.${claseEvento}`).css("display","block");
		  $(`${hrefEvento}`).siblings().css("display","none");
		  $(`.${claseEvento}`).siblings().css("display","none");
		  $(".titulo").text(eventoEncontrado.getNombre);
		  $(".cambio-hora").text(`${eventoEncontrado.getFecha} ${eventoEncontrado.getHora}`);
		  $(".cambio-organizador").text(`${eventoEncontrado.getOrganizador.getNombre} ${eventoEncontrado.getOrganizador.getApellido}`);
		  $(".cambio-pagina").attr("href",`formulario.html${hrefEvento}`);
		  $(".contactar-organizador").attr("href",`contacto.html${hrefEvento}`);


	})



})
