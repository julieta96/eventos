
$(document).ready(function(){

	$("#f-izq").click(function(){

		let slider= $(".div-contenedor-img");

		$(slider[0]).css("display","none");
		$(slider[1]).css("display","block");

	})


	$("#f-der").click(function(){

		let slider= $(".div-contenedor-img");

		$(slider[1]).css("display","none");
		$(slider[0]).css("display","block");

	})

	$(".a_eventos1").click(function(){

        $(".e-img").attr("src" ,"img/eventos/1.png");
		$(".titulo").text("RECITALES");
		$(".cambio-hora").text("28/01/2021 20hs");
		$(".cambio-organizador").text("Iure");

	})

	$(".a_eventos2").click(function(){

        $(".e-img").attr("src" ,"img/eventos/2.jpg");
		$(".titulo").text("KARAOKE");
		$(".cambio-hora").text("02/09/2021 23hs");
		$(".cambio-organizador").text("Organizador2");

		
	})

	$(".a_eventos3").click(function(){

        $(".e-img").attr("src" ,"img/eventos/3.jpg");
		$(".titulo").text("CUMPLEAÑOS");
		$(".cambio-hora").text("10/07/2021 20hs");
		$(".cambio-organizador").text("Organizador3");

		
	})

	$(".a_eventos4").click(function(){

        $(".e-img").attr("src" ,"img/eventos/4.jpg");
		$(".titulo").text("CASAMIENTOS");
		$(".cambio-hora").text("20/09/2021 23hs");
		$(".cambio-organizador").text("Organizador4");

		
	})

	$(".a_eventos5").click(function(){

        $(".e-img").attr("src" ,"img/eventos/5.jpg");
		$(".titulo").text("EGRESADOS");
		$(".cambio-hora").text("12/12/2021 20hs");
		$(".cambio-organizador").text("Organizador5");

		
	})

	$(".a_eventos6").click(function(){

        $(".e-img").attr("src" ,"img/eventos/6.jpg");
		$(".titulo").text("FIESTA DE 15");
		$(".cambio-hora").text("08/08/2021 21hs");
		$(".cambio-organizador").text("Organizador6");

		
	})



})
