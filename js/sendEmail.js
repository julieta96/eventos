define(['jquery','lib/smtp/smtp'],($, smtp) =>{


		return class SendMail{

			constructor(){}

			send(nombre, apellido, email, evento, mensaje){

			 if(mensaje==""){

				  	Email.send({
				   	Host : "smtp.gmail.com",
				    Username : "nuestroseventoarg@gmail.com",
				    Password : "458opyuuWDA",
				    To :  `${email}`,
				    From : "nuestroseventoarg@gmail.com",
				    Subject : "Confirmacion Inscripcion a Evento",
				    Body : `Hola ${nombre} ${apellido}, se incribio para ${evento} con exito. <br>
				    Recuerde que tiene 24hs para realizar el pago, al pasar este tiempo estimado debera inscribirse nuevamente.<br>
				    <br>Team eventos.com`
			  
					}).then(
					  message => alert("Enviado con éxito! Verifique su correo.")
					);
			    	
				}else{

					Email.send({
				   	Host : "smtp.gmail.com",
				    Username : "nuestroseventoarg@gmail.com",
				    Password : "458opyuuWDA",
				    To :  "nuestroseventoarg@gmail.com",
				    From : `${email}`,
				    Subject : "Consulta",
				    Body : `${mensaje}`
				  
					}).then(
					  message => alert("Enviado con éxito! Verifique su correo.")
					);

				}
			}


		}
			
   
})