$(document).ready( function(){
     
     let evento=[];
     evento[0] = 'img/slider/e1.jpg';
     evento[1] ='img/slider/e2.jpg';
     evento[2]='img/slider/e3.jpg';
     evento[3]='img/slider/e4.jpg';
         
	 let i=0;
	
 
	  function cambiarImagenes(){
    

	  $(".cambiarImg").attr('src',evento[i]);


	  	  if(i<3){
	  	 	i++;
	  	 }else{
	  	 	i=0;
	  	 }

	  }

	  setInterval(cambiarImagenes , 4000);
	  

})