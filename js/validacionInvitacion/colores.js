 //INPUT TITULO----------------------------------------

      $("#c-negro-t").click(()=>{


              $('.titulo').css("color","#");
     
          })

       
     $("#c-blanco-t").click(()=>{


              $('.titulo').css("color","#fff");
     
          })


      $("#c-rojo-t").click(()=>{


              $('.titulo').css("color","#f00");
     
          })


      $("#c-azul-t").click(()=>{


              $('.titulo').css("color","#00f");
     
          })


      $("#c-verde-t").click(()=>{


              $('.titulo').css("color","#0f0");
     
          })


//-------------------------------------------------


//INPUT FH-----------------------------------------

      $("#c-negro-fh").click(()=>{


              $('#fecha-hora').css("color","#000");
     
          })

       
      $("#c-blanco-fh").click(()=>{


              $('#fecha-hora').css("color","#fff");
     
          })


      $("#c-rojo-fh").click(()=>{


              $('#fecha-hora').css("color","#f00");
     
          })


      $("#c-azul-fh").click(()=>{


              $('#fecha-hora').css("color","#00f");
     
          })


      $("#c-verde-fh").click(()=>{


              $('#fecha-hora').css("color","#0f0");
     
          })

   //---------------------------------------------------

   //FONTSIZE TITULO------------------------------------

      $("#size20-t").click(()=>{


        $('.titulo').css("font-size","20px");


      })


     $("#size28-t").click(()=>{


        $('.titulo').css("font-size","28px");


      })


     $("#size32-t").click(()=>{


        $('.titulo').css("font-size","32px");


      })

      $("#size48-t").click(()=>{


        $('.titulo').css("font-size","48px");


      })

      $("#size60-t").click(()=>{


        $('.titulo').css("font-size","60px");


      })

//---------------------------------------------------------

//FONT SIZE FH--------------------------------------------

    $("#size20-fh").click(()=>{


      $('#fecha-hora').css("font-size","20px");


    })


    $("#size28-fh").click(()=>{


      $('#fecha-hora').css("font-size","28px");


    })


    $("#size32-fh").click(()=>{


      $('#fecha-hora').css("font-size","32px");


    })

     $("#size48-fh").click(()=>{


      $('#fecha-hora').css("font-size","48px");


    })


  //-------------------------------------------------

  //UBICACION TIT$-click-
      $("#ub-1T").click(()=>{

        $('.titulo').css("text-align" , "left");
      })

       $("#ub-2T").click(()=>{

        $('.titulo').css("text-align" , "center");
      })

     $("#ub-3T").click(()=>{

        $('.titulo').css("text-align" ,"right");
      })


  //-------------------------------------------------

  //UBICACION FH------------------------------------

     $("#ub-1FH").click(()=>{

      $('#fecha-hora').css("text-align" , "left");
      })

     $("#ub-2FH").click(()=>{

      $('#fecha-hora').css("text-align" , "center");
     })

     $("#ub-3FH").click(()=>{

      $('#fecha-hora').css("text-align" ,"right");
     })


  //-----------------------------------------------

  //BACKGROUND TITULO+FH

    let bNegroT = document.querySelector("#b-negro");
    let bBlancoT = document.querySelector("#b-blanco");
    let bRojoT = document.querySelector("#b-rojo");
    let bAzulT = document.querySelector("#b-azul");
    let bVerdeT = document.querySelector("#b-verde");

    

   $("#b-negro").click(()=>{


      $('.tarjeta').css("background","#000");
      $('.titulo').css("background","#000");
      $('#fecha-hora').css("background","#000");


   })


   $("#b-blanco").click(()=>{


      $('.tarjeta').css("background","#fff");
      $('.titulo').css("background","#fff");
      $('#fecha-hora').css("background","#fff");


   })


   $("#b-rojo").click(()=>{


      $('.tarjeta').css("background","#f00");
      $('.titulo').css("background","#f00");
      $('#fecha-hora').css("background","#f00");


   }) 

   $("#b-azul").click(()=>{


      $('.tarjeta').css("background","blue");
      $('.titulo').css("background","blue");
      $('#fecha-hora').css("background","blue");


   })  


    $("#b-verde").click(()=>{


      $('.tarjeta').css("background","green");
      $('.titulo').css("background","green");
      $('#fecha-hora').css("background","green");


   }) 