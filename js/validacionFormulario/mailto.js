require(['jquery'],($) =>{

		const usuariosInscriptos = [];
		let nombre="";
		let apellido="";
		let email="";
		let datos = $('.datos');
		let evento=$(".a-titulo >h2").attr('id');

		console.log(evento)

		$("#inscribirse").click(()=>{

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

			

			for(let i=0;i<$(datos).length;i++){

				 nombre=$(datos[i]).find("#nombre").val();
				 apellido=$(datos[i]).find("#apellido").val();
				 email=$(datos[i]).find("#email").val();

				 usuariosInscriptos.push({
       				nombre: `${nombre}`,
					apellido:`${apellido}`,
					email:`${email}`,
					eventoInscripto:`${evento}`
				});

			}

			for(let i=0;i<usuariosInscriptos.length;i++){

				 if((usuariosInscriptos[i].nombre) =='' && (usuariosInscriptos[i].apellido) =='' && (usuariosInscriptos[i].email) ==''){

      				$(usuariosInscriptos[i]).slice(i);

				 }

			}

		console.log(usuariosInscriptos)
      })
   
})