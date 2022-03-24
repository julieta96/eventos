define(['jquery','lib/smtp/smtp','pass'],($, smtp,pass) =>{


		return class SendMail{

			constructor(){}

			sendUser(nombre, apellido, email, evento, pdf){


				  	Email.send({
				   	Host : "smtp.gmail.com",
				    Username : "nuestroseventoarg@gmail.com",
				    Password : atob(pass.eventos),
				    To :  `${email}`,
				    From : "nuestroseventoarg@gmail.com",
				    Subject : "Confirmacion Inscripcion a Evento",
				    Body : `Hola ${nombre} ${apellido}, se incribio para ${evento} con exito. <br>
				    Recuerde que tiene 24hs para realizar el pago, al pasar este tiempo estimado debera inscribirse nuevamente.<br>
				    <br>Team eventos.com`,
				    Attachments : [
				     {
				      name : 'inscripcion.pdf',
				      data : pdf 

				     }]
							  
					}).then(
					  message => alert("Enviado con éxito! Verifique su correo.")
					);
			    			
			}


			sendEventos(nombre, apellido, email, telefono, mensaje, emailEventoUOrganizador, pass){

					Email.send({
				   	Host : "smtp.gmail.com",
				    Username :emailEventoUOrganizador,
				    Password : pass,
				    To :  emailEventoUOrganizador,
				    From : `${email}`,
				    Subject : "Consulta",
				    Body : `${mensaje} <br> Tel: ${telefono} <br> Enviado por: ${nombre} ${apellido} (${email})`
				  
					}).then(
					  message => alert("Enviado con éxito!")
					);

				}
			


		}
			
   
})