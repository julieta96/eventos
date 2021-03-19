require(['jquery'],function($) {
	
     let total = 0;

	$(".cantidad").click(function(){

	 //totalRecital
     $(".t-r").text( $(".cant-r").val()*$(".precio-r").text() );

     //totalKaraoke
	 $(".t-k").text($(".cant-k").val()*$(".precio-k").text());

	 //totalCumple
     $(".t-cum").text($(".cant-cum").val()*$(".precio-cum").text());

	//totalCasamiento  

	$(".t-ca").text($(".cant-ca").val()*$(".precio-ca").text());

	//totalEgresado 

	$(".t-eg").text($(".cant-eg").val()*$(".precio-eg").text());


	//total15 

	$(".t-15").text($(".cant-15").val()*$(".precio-15").text());

	total =  $(".t-r").text() + $(".t-k").text()+ $(".t-cum").text() + $(".t-ca").text() + $(".t-eg").text() + $(".t-15").text() ;

	})


	$(".b-scomprar").click(function(){

		$(location).attr("href","index.html");
	})




})