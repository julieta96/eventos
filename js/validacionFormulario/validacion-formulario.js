require(['jquery','clases/testCharacter'],

    ($,t)=>{

        let input = $("input");

        $("input").each((i)=>{


      $(input[i]).keyup(validation);
      $(input[i]).blur(validation);
        
    
    });
        
        const test = new t();
       
        function validation(e){

            switch(e.target.id){
                
                case "nombre":
                 let nombre =$("#nombre");
                $("#nombre").each((i)=>{
                    validarCampos(test.letters($(nombre[i]).val()), e.target);
                 });
                break;

                case "apellido":
                 let apellido = $("#apellido");
                 $("#apellido").each((i)=>{
                    validarCampos(test.letters($(apellido[i]).val()), e.target);
                });
                break;

                case "email":
                 let email = $("#email");
                 $("#email").each((i)=>{
                   
                   validarCampos(test.lettersNumbersCharacters($(email[i]).val()), e.target);
                 });
                break;
            }




        }



    const validarCampos=(test,input)=>{

      if(test){

       $(input).css("background","#4CAF50");

       //$(input).removeClass("bg-red");
       //$(input).addClass("bg-green");
      }else{

       $(input).css("background","#FF5252");
       //$(input).removeClass("bg-green");
       //$(input).addClass("bg-red");
      }
        
    }



   $(".formulario").on('click', '.remove' , ()=>{
       
       $(this).parent().remove();

   })


    $(".formulario").on('click', '.no-remove', ()=>{
       
         $('.borrar-dato').val('');
   })


    $(".add").click(()=>{
         
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
         input1.attr("autocomplete","off");

         input2.attr("type" , "text");
         input2.attr("id" , "apellido");
         input2.attr("placeholder" , "Apellido");
         input2.attr("autocomplete","off");


         input3.attr("type" , "email");
         input3.attr("id" , "email");
         input3.attr("placeholder" , "Email");
         input3.attr("autocomplete","off");


         formulario.append(div);
         div.append("<div class='icon-minus remove'></div>")
         div.append(input1);
         div.append(input2);
         div.append(input3);
    	
    })
    

})