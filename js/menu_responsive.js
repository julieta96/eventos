require(['jquery'], ($)=>{
 $(document).ready(()=>{
	let widthBrower= $(window).width();
			 
	    if(widthBrower>=50 && widthBrower<=900){

			let height = $(window).height();

		    let div = $("<div class='menu-responsive'>");

			$("body").append(div);
			div.css("height",$(height));
			div.addClass("mostrar-menu");

			$("nav").css("display","none");

			

			$(".button-menu-responsive").click( () =>{

				 $(".contenedorBuscador").append($("#lupa"));
				 $(".contenedorBuscador").append($("#buscador"));
				 $("#buscador").css("display","none");
				 $("#lupa").css("display","inline-block");
				 $(".contenedorBuscador").after($("#resultado"));
				 $(div).append($("nav"));
			   	 $("nav").attr("id","");
			   	 $("nav").addClass("nav-responsive");
			   	 $("nav").toggle("mostrar-menu");
			   	 $(".contenedorBuscador").css("display","block");   	 
			});

			$("#lupa").click(()=>{

				if($("#buscador").css("display")=='inline-block'){

					$("#buscador").css("display","none");

				}else{
					$("#buscador").css("display","inline-block");
					
				}

			});

			$("#buscador").css("display","none");

			$(div).click(()=>{

				$("#resultado").css("display","none");
			});

	    
		$("nav").attr("id","menu");

		

		}

		//$(window).on('resize', ()=>{

			if(widthBrower>=900){
			window.setTimeout('location.reload()', 3000);
		}else{
			window.setTimeout('location.reload()', 3000);
		}
	

		//}

		

  })


})