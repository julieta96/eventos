require(['jquery'], function($){

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


 const validation=(e)=>{

    switch(e.target.id){

    	case "nombre":
    	checkInput(e.target, ($("#nombre").val()).length, letters( $("#nombre").val() ), 3, 20,"#nombre-alert");
    	break;

    	case "apellido":
    	checkInput(e.target, ($("#apellido").val()).length, letters( $("#apellido").val() ), 4, 30 , "#apellido-alert");
    	break;

    	case "email1":
    	checkInput(e.target, ($("#email1").val()).length, lettersNumbersCharacters( $("#email1").val() ), 8, 40,"#email1-alert");
    	break;

    	case "telefono":
    	checkInput(e.target, ($("#telefono").val()).length, numbers( $("#telefono").val() ), 8, 10, "#telefono-alert");
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






function letters(string){

    let lowerUpperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];         
    let array = string.split("");
    let test = false;

    for (let i=0; i <string.length ; i++) { 
        
        if(!(lowerUpperCaseLetters.includes(array[i]) )){

            test = false;
            break;

        }else{

            test = true;
        }

        
    }

    return test;

 }


 function numbers(nums){

    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    let array = nums.split("");
    let test = false;

    for (let i=0; i <nums.length ; i++) { 

        
        if(!(numbers.includes(array[i]) )){

            test = false;
            break;

        }else{
             test = true;
        }

        
    }

    return  test;

 } 

 function lettersAndNumbers(string){

    let lowerUpperCaseLettersAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    let array = string.split(" ").join("");
    let test = false;

    for (let i=0; i <array.length ; i++) { 

        if( !( lowerUpperCaseLettersAndNumbers.includes(array[i]) )){

            test = false;
            break;

        }else{
             test = true;
        }

        
    }

    return  test;

 } 

 function lettersNumbersCharacters(string){

    let lowerCaseLettersNumbersAndOthersCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","_","@","."];
    let array = string.split("");
    let test = false;
    let at = 0;
    let dot = 0;
    let underscore = 0;

    for (let i=0; i <array.length ; i++) { 

        if( !( lowerCaseLettersNumbersAndOthersCharacters.includes(array[i]) )){

            test = false;
            break;

        }else{
              
              if(string.charAt(i) =='@'){

                at++;

              }

              if(string.charAt(i) =='.'){

                dot++;

              }

              if(string.charAt(i) =='_'){

                underscore++;

              }

                 
        }

        
    }

    if(at==1 && dot == 1 && underscore<=2){

                test = true;
     }

    return  test;

 } 

window.addEventListener("load" ,  startValidation);


})




