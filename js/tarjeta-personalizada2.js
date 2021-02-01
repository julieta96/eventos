$(document).ready(function(){


    //INPUT TITULO----------------------------------------

    let inputNegroT = document.querySelector("#c-negro-t");
    let inputBlancoT = document.querySelector("#c-blanco-t");
    let inputRojoT = document.querySelector("#c-rojo-t");
    let inputAzulT = document.querySelector("#c-azul-t");
    let inputVerdeT = document.querySelector("#c-verde-t");

       inputNegroT.addEventListener("click",function(){


          $('.titulo').css("color","#000");
 
      })

   
  inputBlancoT.addEventListener("click",function(){


          $('.titulo').css("color","#fff");
 
      })


  inputRojoT.addEventListener("click",function(){


          $('.titulo').css("color","#f00");
 
      })


  inputAzulT.addEventListener("click",function(){


          $('.titulo').css("color","#00f");
 
      })


  inputVerdeT.addEventListener("click",function(){


          $('.titulo').css("color","#0f0");
 
      })


//-------------------------------------------------


//INPUT FH-----------------------------------------

    let inputNegroFH = document.querySelector("#c-negro-fh");
    let inputBlancoFH = document.querySelector("#c-blanco-fh");
    let inputRojoFH = document.querySelector("#c-rojo-fh");
    let inputAzulFH = document.querySelector("#c-azul-fh");
    let inputVerdeFH = document.querySelector("#c-verde-fh");

    inputNegroFH.addEventListener("click",function(){


          $('#fh').css("color","#000");
 
      })

   
   inputBlancoFH.addEventListener("click",function(){


          $('#fecha-hora').css("color","#fff");
 
      })


   inputRojoFH.addEventListener("click",function(){


          $('#fecha-hora').css("color","#f00");
 
      })


   inputAzulFH.addEventListener("click",function(){


          $('#fecha-hora').css("color","#00f");
 
      })


   inputVerdeFH.addEventListener("click",function(){


          $('#fecha-hora').css("color","#0f0");
 
      })

   //---------------------------------------------------

   //FONTSIZE TITULO------------------------------------

    let fontSize20T= document.querySelector("#size20-t");
    let fontSize28T= document.querySelector("#size28-t");
    let fontSize32T= document.querySelector("#size32-t");
    let fontSize48T= document.querySelector("#size48-t");
    let fontSize60T= document.querySelector("#size60-t");


    fontSize20T.addEventListener("click",function(){


    $('.titulo').css("font-size","20px");


  })


  fontSize28T.addEventListener("click",function(){


    $('.titulo').css("font-size","28px");


  })


  fontSize32T.addEventListener("click",function(){


    $('.titulo').css("font-size","32px");


  })

   fontSize48T.addEventListener("click",function(){


    $('.titulo').css("font-size","48px");


  })

  fontSize60T.addEventListener("click",function(){


    $('.titulo').css("font-size","60px");


  })

//---------------------------------------------------------

//FONT SIZE FH--------------------------------------------


    let fontSize20FH= document.querySelector("#size20-fh");
    let fontSize28FH= document.querySelector("#size28-fh");
    let fontSize32FH= document.querySelector("#size32-fh");
    let fontSize48FH= document.querySelector("#size48-fh");
    let fontSize60FH= document.querySelector("#size60-fh");

     fontSize20FH.addEventListener("click",function(){


    $('#fecha-hora').css("font-size","20px");


  })


  fontSize28FH.addEventListener("click",function(){


    $('#fecha-hora').css("font-size","28px");


  })


  fontSize32FH.addEventListener("click",function(){


    $('#fecha-hora').css("font-size","32px");


  })

   fontSize48FH.addEventListener("click",function(){


    $('#fecha-hora').css("font-size","48px");


  })


  //-------------------------------------------------

  //UBICACION TITULO---------------------------------

   let ubTLeft = document.querySelector("#ub-1T");
   let ubTCenter = document.querySelector("#ub-2T");
   let ubTRight =document.querySelector("#ub-3T");

  ubTLeft.addEventListener("click", function(){

    $('.titulo').css("text-align" , "left");
  })

   ubTCenter.addEventListener("click", function(){

    $('.titulo').css("text-align" , "center");
  })

  ubTRight.addEventListener("click", function(){

    $('.titulo').css("text-align" ,"right");
  })


  //-------------------------------------------------

  //UBICACION FH------------------------------------

    let ubFHLeft = document.querySelector("#ub-1FH");
    let ubFHCenter = document.querySelector("#ub-2FH");
    let ubFHRight =document.querySelector("#ub-3FH");

   ubFHLeft.addEventListener("click", function(){

    $('#fecha-hora').css("text-align" , "left");
    })

   ubFHCenter.addEventListener("click", function(){

    $('#fecha-hora').css("text-align" , "center");
   })

  ubFHRight.addEventListener("click", function(){

    $('#fecha-hora').css("text-align" ,"right");
   })


  //-----------------------------------------------

  //BACKGROUND TITULO+FH

    let bNegroT = document.querySelector("#b-negro");
    let bBlancoT = document.querySelector("#b-blanco");
    let bRojoT = document.querySelector("#b-rojo");
    let bAzulT = document.querySelector("#b-azul");
    let bVerdeT = document.querySelector("#b-verde");

    

   bNegroT.addEventListener("click" , function(){


      $('.tarjeta').css("background","#000");
      $('.titulo').css("background","#000");
      $('#fecha-hora').css("background","#000");


   })


   bBlancoT.addEventListener("click" , function(){


      $('.tarjeta').css("background","#fff");
      $('.titulo').css("background","#fff");
      $('#fecha-hora').css("background","#fff");


   })


    bRojoT.addEventListener("click" , function(){


      $('.tarjeta').css("background","#f00");
      $('.titulo').css("background","#f00");
      $('#fecha-hora').css("background","#f00");


   }) 

    bAzulT.addEventListener("click" , function(){


      $('.tarjeta').css("background","blue");
      $('.titulo').css("background","blue");
      $('#fecha-hora').css("background","blue");


   })  


    bVerdeT.addEventListener("click" , function(){


      $('.tarjeta').css("background","green");
      $('.titulo').css("background","green");
      $('#fecha-hora').css("background","green");


   }) 
 


  })


  