require(['jquery'],($)=>{
    
  $(document).on("keyup", "#formulario input[name='titulo-e'], #formulario input[name='fecha-hora']", 

   (event)=>{


     let titulo='';
     let fechaHora='';

    if(event.target.name=="titulo-e"){
   
        titulo = this.value ;  
       $("#titulo-e").text(titulo);

    }else if(event.target.name=="fecha-hora"){
       fechaHora = this.value;
       $("#fecha-hora").text(fechaHora);
    }
    
 

   })


})