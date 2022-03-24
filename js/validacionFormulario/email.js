require(['jquery','clases/sendEmail','lib/jsPDF/jspdf.umd.min'],($, sendEmail,pdf) =>{

		let nombre="";
		let apellido="";
		let email="";
		let datos = $('.datos');
		let evento="";
		const send = new sendEmail();
		const doc = new pdf.jsPDF();

		$("#inscribirse").click(()=>{

			for(let i=0;i<$(datos).length;i++){

				 evento=$(".a-titulo >h2").attr('id');
				 nombre=$(datos[i]).find("#nombre").val();
				 apellido=$(datos[i]).find("#apellido").val();
				 email=$(datos[i]).find("#email").val();

				send.sendUser(nombre, apellido, email, evento); 

			}      		
      })

		
			
   
})