define(['jquery'],function($){

	return class TestCharacter{


       constructor(){

       }

	   letters(string){

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


	  numbers(nums){

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

      lettersAndNumbers(string){

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

	 lettersNumbersCharacters(string){

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


	}

})