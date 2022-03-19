require(['jquery','clases/sendEmail', 'page-href','clases/instancias/organizadores','pass'],
	($, sendEmail, page,org,pass) =>{

		const send = new sendEmail();

		let nombre=$("#nombre");
		let apellido=$("#apellido");
		let telefono=$("#telefono");
		let emailUsuario =$("#email1");
		let emailOrganizador = $("#email-organizador");
		let emailEmpresa=$("#email-empresa");
		let mensaje=$("#comentarios");

			 
		if(page.page=="contacto.html"){


			$("#b-enviar").click(()=>{

				send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailEmpresa.val(),atob(pass.eventos));	     		
       		})


		}


		switch(page.page){

		case "contacto.html#recital":

		$("#email-organizador").attr("value","lrodriguezeventosarg@gmail.com");
		$("textarea").text(`Hola ${org.luz.getNombre} ${org.luz.getApellido},
			quisiera contactarme con vos acerca del evento recital...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),atob(pass.recital));		 

       		})

			
			     		
		break;

		case "contacto.html#karaoke":

		$("textarea").text(`Hola ${org.janet.getNombre} ${org.janet.getApellido},
			quisiera contactarme con vos acerca del evento karaoke...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),atob(pass.karaoke));		 

       		})
		
		break;

		case "contacto.html#cumple":

		$("textarea").text(`Hola ${org.camilo.getNombre} ${org.camilo.getApellido},
			quisiera contactarme con vos acerca del evento cumpleaños...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),atob(pass.cumple));		 

       		})
		
		break;

		case "contacto.html#casamiento":
		
		$("textarea").text(`Hola ${org.carlos.getNombre} ${org.carlos.getApellido},
			quisiera contactarme con vos acerca del evento casamiento...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),atob(pass.casamiento));		 

       		})

		
		break;

		case "contacto.html#egresado":
		
		$("textarea").text(`Hola ${org.luis.getNombre} ${org.luis.getApellido},
		quisiera contactarme con vos acerca del evento egresado...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),atob(pass.egresado));		 

       		})
		
		break;

		case "contacto.html#fiesta15":
		
		$("textarea").text(`Hola ${org.paola.getNombre} ${org.paola.getApellido},
		quisiera contactarme con vos acerca del evento Fiesta de 15...`);

		$("#b-enviar").click(()=>{

			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),atob(pass.fiesta15));		 

       		})
		
		break;



	}

		
   
})

