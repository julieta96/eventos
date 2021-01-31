$(document).ready(function(){
    


    $(".dot1").on('click',function(){
       
          $(this).siblings().removeClass("active");
          $(this).addClass("active");
          $(".cambiarImg").attr('src',"img/slider/e1.jpg"); 
     })

     $(".dot2").click(function(){

    	$(this).siblings().removeClass("active");
        $(this).addClass("active");
    	$(".cambiarImg").attr('src',"img/slider/e2.jpg");
    })


    $(".dot3").click(function(){

        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    	$(".cambiarImg").attr('src',"img/slider/e3.jpg");
    })



  $(".dot4").click(function(){

         $(this).siblings().removeClass("active");
         $(this).addClass("active");
    	$(".cambiarImg").attr('src',"img/slider/e4.jpg");
    })




})