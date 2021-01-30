$(document).ready(function(){

	let remove = $(".remove");
	let add = $(".add");


    remove.click(function(){

       $(this).css("display","none");
          

    })


    add.click(function(){
         
         const formulario = $(".formulario");
         const div = $("<div>");
         const input1 = $("<input>");
         const input2 = $("<input>");
         const input3 = $("<input>");

         div.addClass("icon-minus new-remove");
         input1.addClass("inscripcion");
         input2.addClass("inscripcion");
         input3.addClass("inscripcion");

         input1.attr("type" , "text");
         input1.attr("name" , "");
         input1.attr("placeholder" , "Nombre");

         input2.attr("type" , "text");
         input2.attr("name" , "");
         input2.attr("placeholder" , "Apellido");


         input3.attr("type" , "text");
         input3.attr("name" , "");
         input3.attr("placeholder" , "Telefono");


         formulario.append(div);
         div.append(input1);
         div.append(input2);
         div.append(input3);

    	
    })
     

     let newRemove = $(".new-remove");

     newRemove.click(function(){

       $(this).css("display","none");
          

    })


})