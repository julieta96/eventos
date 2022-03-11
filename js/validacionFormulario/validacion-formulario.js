require(['jquery'],

    ($)=>{

   $(".formulario").on('click', '.remove' , (e)=>{
       
       $(e.target).parent().remove();

   })


    $(".formulario").on('click', '.no-remove', ()=>{
       
         $('.borrar-dato').val('');
   })


    $(".add").click(()=>{
         
         const formulario = $(".formulario");
         const div = $("<div>");
         const input1 = $("<input style='margin-right:4px;'>");
         const input2 = $("<input style='margin-right:4px;'>");
         const input3 = $("<input style='margin-right:4px;'>");

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
         div.append("<div class='icon-minus remove' style='margin-right:5px;'></div>")
         div.append(input1);
         div.append(input2);
         div.append(input3);
    	
    })
    

})