require(['jquery'],($)=>{

     $(document).on("keyup", "#formulario input[name='titulo-e'], #formulario input[name='fecha-hora']", 

     (event)=>{


     let titulo=''
     let fechaHora=''

    if(event.target.name=="titulo-e")
    {

        titulo = event.target.value   
       $("#titulo-e").text(titulo)

    }else if(event.target.name=="fecha-hora")
    {
       fechaHora = event.target.value
       $("#fecha-hora").text(fechaHora)
    }

   })

  //Titulo ----------------------------------

  $("input[name='colores-t']").click((e)=>{

    let idInput= e.target.id;
    let color = idInput.substr(2, 3);

    $('.titulo').css("color",`#${color}`);

  })

  $("input[name='size-title']").click((e)=>{

    let idInput= e.target.id;
    let sizeTitle = idInput.substr(4, 2);

    $('.titulo').css("font-size",`${sizeTitle}px`);

  })


  $("input[name='ubicacion-title']").click((e)=>{

    let idInput= e.target.id;
    let position = idInput.replace('ub-','');
   
    $('.titulo').css("text-align" , position);

  })


  //Fecha y Hora-------------------------------


  $("input[name='colores-fh']").click((e)=>{

    let idInput= e.target.id;
    let color = idInput.substr(2,3);

    $('#fecha-hora').css("color",`#${color}`);

  })


  $("input[name='size-fh']").click((e)=>{

    let idInput= e.target.id;
    let sizeFechaHora = idInput.substr(4, 2);

    $('#fecha-hora').css("font-size",`${sizeFechaHora}px`);
   
  })

  $("input[name='ubicacion-fh']").click((e)=>{

    let idInput= e.target.id;
    let position = idInput.replace('ub-','');

    $('#fecha-hora').css("text-align" , position);

  })

  //Fondo-------------------------------------
  
  $("input[name='fondo']").click((e)=>{

    let idInput= e.target.id;
    let backgroundColor = idInput.replace('bg-','');

    $('.tarjeta').css("background",`#${backgroundColor}`);

  })



})