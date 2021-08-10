require(['jquery','clases/testCharacter'], function($,t){

	function startValidation(){



$("#form-contacto").submit((e)=>{

		e.preventDefault();
});


let input = $("input");

$("input").each((i)=>{


      $(input[i]).keyup(validation);
      $(input[i]).blur(validation);
        
    
    });


}

 const test = new t();

 const validation=(e)=>{

    switch(e.target.id){

    	case "nombre":
    	checkInput(e.target, ($("#nombre").val()).length, test.letters( $("#nombre").val() ), 3, 20,"#nombre-alert");
    	break;

    	case "apellido":
    	checkInput(e.target, ($("#apellido").val()).length, test.letters( $("#apellido").val() ), 4, 30 , "#apellido-alert");
    	break;

    	case "email1":
    	checkInput(e.target, ($("#email1").val()).length, test.lettersNumbersCharacters( $("#email1").val() ), 8, 40,"#email1-alert");
    	break;

    	case "telefono":
    	checkInput(e.target, ($("#telefono").val()).length, test.numbers( $("#telefono").val() ), 8, 10, "#telefono-alert");
    	break;

    	case "comentarios":

    	if($("#comentarios").val()!==""){

    		let size = ($("#comentarios").val()).length;

    			if(size<=10){

    				$("#comentarios").css("background","#4CAF50");

    			}else{

    				$("#comentarios").css("background","#FF5252");

    			}


    	}

    	break;
    }

}


 const checkInput=(input,size, testCharacter , lessThan , greaterThan, alertMessage)=>{

 	let inputValue = $(input).val();

 	if(inputValue!=""){

 		if(testCharacter && (size>=lessThan && size<=greaterThan) ){
 			$(alertMessage).css("display","none");
 			$(input).css("background","#4CAF50");

 		}else{
 			$(input).css("background","#FF5252");
 			$(alertMessage).css("display","block");
 		}
 	}




 }


window.addEventListener("load" ,  startValidation);


})




