require(['jquery','lib/smtp/smtp'],($, smtp) =>{

		let nombre="";
		let apellido="";
		let email="";
		let datos = $('.datos');
		let evento="";

	
		$("#inscribirse").click(()=>{

			for(let i=0;i<$(datos).length;i++){

				 evento=$(".a-titulo >h2").attr('id');
				 nombre=$(datos[i]).find("#nombre").val();
				 apellido=$(datos[i]).find("#apellido").val();
				 email=$(datos[i]).find("#email").val();

				sendMail(nombre, apellido, email, evento); 

			}      		
      })

		const sendMail = (nombre, apellido, email, evento)=>{

				Email.send({
			   	//SecureToken : "31655225-abb2-4d5c-92ee-3a936c371cdb"
			   	Host : "smtp.gmail.com",
			    Username : "nuestroseventoarg@gmail.com",
			    Password : "458opyuuWDA",
			    To :  `${email}`,
			    From : "nuestroseventoarg@gmail.com",
			    Subject : "Confirmacion Inscripcion a Evento",
			    Body : `Hola ${nombre} ${apellido}, se incribio para ${evento} con exito. <br>
			    Recuerde que tiene 24hs para realizar el pago, al pasar este tiempo estimado debera inscribirse nuevamente.<br>
			    Team eventos.com`
			}).then(
			  message => alert("Enviado con éxito! Verifique su correo.")
			);

		}
			
   
})