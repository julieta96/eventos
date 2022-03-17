require(['jquery','lib/smtp/smtp'],($, smtp) =>{

		const usuariosInscriptos = [];
		let nombre="";
		let apellido="";
		let email="";
		let datos = $('.datos');
		let evento="";

	
		$("#inscribirse").click(()=>{

			/*$('.datos').each((e)=>{

				 evento=$(".a-titulo >h2").attr('id');
				 nombre=$(e).find("#nombre").val();
				 apellido=$(e).find("#apellido").val();
				 email=$(e).find("#email").val();
					console.log(evento)

				 usuariosInscriptos.push({
       				nombre: `${nombre}`,
					apellido:`${apellido}`,
					email:`${email}`,
					eventoInscripto:`${evento}`
				});

				 
       		})*/

			for(let i=0;i<$(datos).length;i++){

				 evento=$(".a-titulo >h2").attr('id');
				 nombre=$(datos[i]).find("#nombre").val();
				 apellido=$(datos[i]).find("#apellido").val();
				 email=$(datos[i]).find("#email").val();

				 usuariosInscriptos.push({
       				nombre: `${nombre}`,
					apellido:`${apellido}`,
					email:`${email}`,
					eventoInscripto:`${evento}`
				});

				sendMail(nombre, apellido, email, evento); 

			}

       		//console.log(usuariosInscriptos)

      })

		console.log(usuariosInscriptos)


		const sendMail = (nombre, apellido, email, evento)=>{

				Email.send({
			   	SecureToken : "5146c17e-3839-4eb9-ba2c-02e187d48df1",
			    To : "nuestroseventoarg@gmail.com",
			    From : `${email}`,
			    Subject : "Confirmacion Inscripcion a Evento",
			    Body : `Hola ${nombre} ${apellido}, se incribio para ${evento} con exito.
			    Recuerde que tiene 24hs para realizar el pago, al pasar este tiempo estimado
			    debera inscribirse nuevamente.
			    Saludos! Team eventos.com`
			}).then(
			  message => alert("Send")
			);

		}
			
   
})