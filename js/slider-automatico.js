window.onload = function(){
     
     var imagenes=[];
     imagenes[0] = 'imagenes/slider/e1.jpg';
     imagenes[1] ='imagenes/slider/e2.jpg';
     imagenes[2]='imagenes/slider/e3.jpg';
     imagenes[3]='imagenes/slider/e4.jpg';
         
	  var i=0;
	
 
	  function cambiarImagenes(){
    
	  var ims = document.slider.src=imagenes[i];


	  	  if(i<3){
	  	 	i++;
	  	 }else{
	  	 	i=0;
	  	 }

	  }

	  setInterval(cambiarImagenes , 1000);
	  

}