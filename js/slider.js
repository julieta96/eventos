$(document).ready(function(){
  

  $( ".dot" ).click(function( event ) {

   let eventoImg = event.target.classList[1] ;

   $(this).siblings().removeClass("active");
   $(this).addClass("active");

   switch(eventoImg){

    case('dot1'):
    $(".cambiarImg").attr('src',"img/slider/e1.jpg"); 
    break;

    case('dot2'):
    $(".cambiarImg").attr('src',"img/slider/e2.jpg"); 
    break;

    case('dot3'):
    $(".cambiarImg").attr('src',"img/slider/e3.jpg"); 
    break;

    case('dot4'):
    $(".cambiarImg").attr('src',"img/slider/e4.jpg"); 
    break;

   }


  })




})