require(['jquery','clases/sendEmail', 'page-href','clases/instancias/eventos'],
	($, sendEmail, page,eventos) =>{

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
		$("textarea").text(`Hola ${eventos.recitalDatos.getOrganizador.getNombre} ${eventos.recitalDatos.getOrganizador.getApellido},
			quisiera contactarme con vos acerca del evento recital...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),eventos.recitalDatos.getOrganizador.getPass);		 

       		})

			
			     		
		break;

		case "contacto.html#karaoke":

		$("#email-organizador").attr("value","jruizeventosarg@gmail.com");
		$("textarea").text(`Hola ${eventos.karaokeDatos.getOrganizador.getNombre} ${eventos.karaokeDatos.getOrganizador.getApellido},
			quisiera contactarme con vos acerca del evento karaoke...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),eventos.karaokeDatos.getOrganizador.getPass);		 

       		})
		
		break;

		case "contacto.html#cumple":
		$("#email-organizador").attr("value","cgomezeventosarg@gmail.com");
		$("textarea").text(`Hola ${eventos.cumpleDatos.getOrganizador.getNombre} ${eventos.cumpleDatos.getOrganizador.getApellido},
			quisiera contactarme con vos acerca del evento cumpleaños...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),eventos.cumpleDatos.getOrganizador.getPass);		 

       		})
		
		break;

		case "contacto.html#casamiento":
		$("#email-organizador").attr("value","cvazquezeventosarg@gmail.com");
		$("textarea").text(`Hola ${eventos.casamientoDatos.getOrganizador.getNombre} ${eventos.casamientoDatos.getOrganizador.getApellido},
			quisiera contactarme con vos acerca del evento casamiento...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),eventos.casamientoDatos.getOrganizador.getPass);		 

       		})

		
		break;

		case "contacto.html#egresado":
		$("#email-organizador").attr("value","lgarciaeventosarg@gmail.com");
		$("textarea").text(`Hola ${eventos.egresadoDatos.getOrganizador.getNombre} ${eventos.egresadoDatos.getOrganizador.getApellido},
		quisiera contactarme con vos acerca del evento egresado...`);

		$("#b-enviar").click(()=>{


			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),eventos.egresadoDatos.getOrganizador.getPass);		 

       		})
		
		break;

		case "contacto.html#fiesta15":
		$("#email-organizador").attr("value","portizeventosarg@gmail.com");
		$("textarea").text(`Hola ${eventos.fiesta15Datos.getOrganizador.getNombre} ${eventos.fiesta15Datos.getOrganizador.getApellido},
		quisiera contactarme con vos acerca del evento Fiesta de 15...`);

		$("#b-enviar").click(()=>{

			send.sendEventos(nombre.val(),
								 apellido.val(),
								 emailUsuario.val(),
								 telefono.val(),
								 mensaje.val(),
								 emailOrganizador.val(),eventos.fiesta15Datos.getOrganizador.getPass);		 

       		})
		
		break;



	}

		
   
})

