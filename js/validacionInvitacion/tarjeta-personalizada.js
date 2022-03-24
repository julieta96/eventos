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

  $(document).click((e)=>{

      switch(e.target.name){

        case 'colores-t':
        let idInputColorTitle= e.target.id;
        let colorTitle = idInputColorTitle.substr(2, 3);
        $('.titulo').css("color",`#${colorTitle}`);
        break;

        case 'size-title':
        let idInputSizeTitle= e.target.id;
        let sizeTitle = idInputSizeTitle.substr(4, 2);
        $('.titulo').css("font-size",`${sizeTitle}px`);
        break;

        case 'ubicacion-title':
        let idInputUbicacionTitle= e.target.id;
        let positionUbicacion = idInputUbicacionTitle.replace('ub-','');
        $('.titulo').css("text-align" , positionUbicacion);
        break;

        case 'colores-fh':
        let idInputColorFechaHora= e.target.id;
        let colorFechaHora = idInputColorFechaHora.substr(2,3);
        $('#fecha-hora').css("color",`#${colorFechaHora}`);
        break;

        case 'size-fh':
        let idInputSizeFechaHora= e.target.id;
        let sizeFechaHora = idInputSizeFechaHora.substr(4, 2);
        $('#fecha-hora').css("font-size",`${sizeFechaHora}px`);
        break;

        case 'ubicacion-fh':
        let idInputUbicacionFechaHora= e.target.id;
        let positionUbicacionFechaHora = idInputUbicacionFechaHora.replace('ub-','');
        $('#fecha-hora').css("text-align" , positionUbicacionFechaHora);
        break;

        case 'fondo':
        let idInputFondo= e.target.id;
        let backgroundColor = idInputFondo.replace('bg-','');
        $('.tarjeta').css("background",`#${backgroundColor}`);
        break;

      }

  })


})