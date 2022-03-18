require(['jquery'],($) =>{

		const usuariosInscriptos = [];
		let nombre="";
		let apellido="";
		let email="";

		$("#inscribirse").click(()=>{


			$('.datos').each(()=>{

				 nombre=$(this).find("#nombre").val();
				 apellido=$(this).find("#apellido").val();
				 email=$(this).find("#email").val();

       		})

       		 /*usuariosInscriptos.push({
       				nombre: `${nombre}`,
					apellido:`${apellido}`,
					email:`${email}`
			});*/

			
      })
   		
	//console.log(usuariosInscriptos)

	console.log($("#nombre").val())
    
})


/*$.each($('.datos'),()=>{*/

				 /*nombre=$(this).find("#nombre").val();
				 apellido=$(this).find("#apellido").val();
				 email=$(this).find("#email").val();*/

				 /*console.log($(this).find("#nombre").val())
       		})*/

       		 /*usuariosInscriptos.push({
       				nombre: `${nombre}`,
					apellido:`${apellido}`,
					email:`${email}`
			});*/



			/*(response)=>{

				if(response=="OK!"){
					alert("Se envio confirmacion de la inscripcion. Verifique su email!")
				}else{
					alert("Error")
				}*/