require(['jquery'],($)=>{

	let valorId="";


	$(".personalizar").click(()=>{
		
		valorId= $(this).attr("id");
		$(location).attr("href",`invitacion.html#${valorId}`);

	})

	$(".a-titulo-principal").attr("href",`invitacion.html#${valorId}`);

})