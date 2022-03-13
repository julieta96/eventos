require(['jquery','clases/testCharacter'], ($,t)=>{

    const startValidation= ()=>{

        let input = $("input");
        let textarea = $("textarea");

        checkElement(input);
        checkElement(textarea);
       
    }


    const checkElement= (element)=>{

        $(element).each((i)=>{


              $(element[i]).keyup(validation);
              $(element[i]).blur(validation);

              $(element[i]).keyup(inputNull);
              $(element[i]).blur(inputNull);
           
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

        			if(size<$("#comentarios").attr("maxlength")){

        				$("#comentarios").css("background","#4CAF50");
                        $("#texto-alert").css("display","none");
                        console.log(size)
                        

        			}else{
        				$("#comentarios").css("background","#FF5252");
                        $("#texto-alert").css("display","block");
                        console.log(size)
                        

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

     const inputNull= ()=>{

        if($("input[type='text']").val().length!=0&&
          $("input[type='email']").val().length!=0
          && $("#comentarios").val()!=""){

            $("#b-enviar").attr("type","submit");

        }else{
            $("#b-enviar").attr("type","button");

        }
     }


    window.addEventListener("load" ,  startValidation);

})




