require(['jquery'],

    function($){


   $(".formulario").on('click', '.remove' , function(){
       
       $(this).parent().remove();

   })


    $(".formulario").on('click', '.no-remove', function(){
       
         $('.borrar-dato').val('');
   })


    $(".add").click(function(){
         
         const formulario = $(".formulario");
         const div = $("<div>");
         const input1 = $("<input>");
         const input2 = $("<input>");
         const input3 = $("<input>");

         div.addClass("remove-container");
         div.addClass("datos");
         input1.addClass("inscripcion");
         input2.addClass("inscripcion");
         input3.addClass("inscripcion");

         input1.attr("type" , "text");
         input1.attr("id" , "nombre");
         input1.attr("placeholder" , "Nombre");

         input2.attr("type" , "text");
         input2.attr("id" , "apellido");
         input2.attr("placeholder" , "Apellido");


         input3.attr("type" , "text");
         input3.attr("id" , "telefono");
         input3.attr("placeholder" , "Telefono");


         formulario.append(div);
         div.append("<div class='icon-minus remove'></div>")
         div.append(input1);
         div.append(input2);
         div.append(input3);
    	
    })
    
    //Validacion de los campos 


   // $(".formulario").on('click', '#inscribirse' ,function(){

    /*let inputs=$(".inscripcion");
    let nombre = $("#nombre");
    let apellido = $("#apellido");
    let telefono = $("#telefono");
    let letras = /^[A-Za-z]+$/;
    let numeros = /[0-9]/;*/

    //e.preventDefault();

    /*if(!letras.test(nombre.val())){


        alert("El nombre debe tener solo letras");
    }


    if(!letras.test(apellido.val())){


        alert("El apellido debe tener solo letras");
    }


    if(!numeros.test(telefono.val())){


        alert("El telefono debe tener solo numeros");
    }


    if(inputs.length == ""){

        alert("Los campos no pueden estar vacios");
        inputs.attr("required","");
    }*/


    //})

    
   


})