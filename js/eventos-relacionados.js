
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

        /*$(".e-img").attr("src" ,"img/eventos/1.png");*/
        $("#recitales").css("display","block");
        $(".re").css("display","block");
        $("#recitales").siblings().css("display","none");
        $(".re").siblings().css("display","none");
		$(".titulo").text("RECITALES");
		$(".cambio-hora").text("28/01/2021 20hs");
		$(".cambio-organizador").text("Iure");

	})

	$(".a_eventos2").click(function(){

        /*$(".e-img").attr("src" ,"img/eventos/2.jpg");*/
        $("#karaoke").css("display","block");
        $(".ka").css("display","block");
        $(".ka").siblings().css("display","none");
        $("#karaoke").siblings().css("display","none");
		$(".titulo").text("KARAOKE");
		$(".cambio-hora").text("02/09/2021 23hs");
		$(".cambio-organizador").text("Organizador2");

		
	})

	$(".a_eventos3").click(function(){

        /*$(".e-img").attr("src" ,"img/eventos/3.jpg");*/
        $("#cumpleanos").css("display","block");
        $(".cu").css("display","block");
        $(".cu").siblings().css("display","none");
        $("#cumpleanos").siblings().css("display","none");
		$(".titulo").text("CUMPLEAÑOS");
		$(".cambio-hora").text("10/07/2021 20hs");
		$(".cambio-organizador").text("Organizador3");

		
	})

	$(".a_eventos4").click(function(){

        //$(".e-img").attr("src" ,"img/eventos/4.jpg");
        $("#casamientos").css("display","block");
        $(".ca").css("display","block");
        $(".ca").siblings().css("display","none");
        $("#casamientos").siblings().css("display","none");
		$(".titulo").text("CASAMIENTOS");
		$(".cambio-hora").text("20/09/2021 23hs");
		$(".cambio-organizador").text("Organizador4");

		
	})

	$(".a_eventos5").click(function(){

        //$(".e-img").attr("src" ,"img/eventos/5.jpg");
        $("#egresados").css("display","block");
        $(".eg").css("display","block");
        $(".eg").siblings().css("display","none");
        $("#egresados").siblings().css("display","none");
		$(".titulo").text("EGRESADOS");
		$(".cambio-hora").text("12/12/2021 20hs");
		$(".cambio-organizador").text("Organizador5");

		
	})

	$(".a_eventos6").click(function(){

        //$(".e-img").attr("src" ,"img/eventos/6.jpg");
        $("#fiesta15").css("display","block");
        $(".fi").css("display","block");
        $(".fi").siblings().css("display","none");
        $("#fiesta15").siblings().css("display","none");
		$(".titulo").text("FIESTA DE 15");
		$(".cambio-hora").text("08/08/2021 21hs");
		$(".cambio-organizador").text("Organizador6");

		
	})



})
