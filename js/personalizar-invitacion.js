$(document).ready(function(){

	let valorId="";


	$(".personalizar").click(function(){
		
		valorId= $(this).attr("id");
		$(location).attr("href",`invitacion.html#${valorId}`);

	})

	$(".a-titulo-principal").attr("href",`invitacion.html#${valorId}`);


	
})