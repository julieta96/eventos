$(document).ready(function(){


    let inputNegro = document.querySelector("#c-negro");
    let inputBlanco = document.querySelector("#c-blanco");
    let inputRojo = document.querySelector("#c-rojo");
    let inputAzul = document.querySelector("#c-azul");
    let inputVerde = document.querySelector("#c-verde");

    let fontSize20= document.querySelector("#size20");
    let fontSize28= document.querySelector("#size28");
    let fontSize32= document.querySelector("#size32");
    let fontSize48= document.querySelector("#size48");
    let fontSize60= document.querySelector("#size60");

    let bNegro = document.querySelector("#b-negro");
    let bBlanco = document.querySelector("#b-blanco");
    let bRojo = document.querySelector("#b-rojo");
    let bAzul = document.querySelector("#b-azul");
    let bVerde = document.querySelector("#b-verde");
    

 //INPUT-COLOR

    inputNegro.addEventListener("click",function(){


          $('.titulo').css("color","#000");
 
      })

   
  inputBlanco.addEventListener("click",function(){


          $('.titulo').css("color","#fff");
 
      })


  inputRojo.addEventListener("click",function(){


          $('.titulo').css("color","#f00");
 
      })


  inputAzul.addEventListener("click",function(){


          $('.titulo').css("color","#00f");
 
      })


  inputVerde.addEventListener("click",function(){


          $('.titulo').css("color","#0f0");
 
      })


 //FONT-SIZE

  fontSize20.addEventListener("click",function(){


    $('.titulo').css("font-size","20px");


  })


  fontSize28.addEventListener("click",function(){


    $('.titulo').css("font-size","28px");


  })


  fontSize32.addEventListener("click",function(){


    $('.titulo').css("font-size","32px");


  })

   fontSize48.addEventListener("click",function(){


    $('.titulo').css("font-size","48px");


  })

  fontSize60.addEventListener("click",function(){


    $('.titulo').css("font-size","60px");


  })


  //UBICACION


  //BACKGROUND
    

   bNegro.addEventListener("click" , function(){


      $('.tarjeta').css("background","#000");
      $('.titulo').css("background","#000");
      $('#fecha-hora').css("background","#000");


   })


   bBlanco.addEventListener("click" , function(){


      $('.tarjeta').css("background","#fff");
      $('.titulo').css("background","#fff");
      $('#fecha-hora').css("background","#fff");


   })


    bRojo.addEventListener("click" , function(){


      $('.tarjeta').css("background","#f00");
      $('.titulo').css("background","#f00");
      $('#fecha-hora').css("background","#f00");


   }) 

    bAzul.addEventListener("click" , function(){


      $('.tarjeta').css("background","blue");
      $('.titulo').css("background","blue");
      $('#fecha-hora').css("background","blue");


   })  


    bVerde.addEventListener("click" , function(){


      $('.tarjeta').css("background","green");
      $('.titulo').css("background","green");
      $('#fecha-hora').css("background","green");


   }) 
 







   })


  