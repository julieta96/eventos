function verDescripcionPasos(){

  setInterval(esconderTitulo(),3);
  setInterval(agregarDescripcion(),3);
  setInterval(borrarDescripcion(),3);
  setInterval(mostrarTitulo(),3);

    }
  

function esconderTitulo(){

    var  t1=document.getElementsByClassName("paso1");
    var  t2=document.getElementsByClassName("paso2");
    var  t3=document.getElementsByClassName("paso3");

	t1[0].addEventListener("mouseover",function(){
   var  titulo1=document.getElementById("titulo1").innerHTML=" "; } );

   t2[0].addEventListener("mouseover",function(){
   var  titulo2=document.getElementById("titulo2").innerHTML=" ";});

   t3[0].addEventListener("mouseover",function(){
   var  titulo3=document.getElementById("titulo3").innerHTML=" ";});


}


function agregarDescripcion(){

	var descripcion="Lorem ipsum dolor sit amet consectetur,<br>"+ 
                     "adipisicing elit.Iure, veniam fuga?<br>"+
                     "Illo adipisci maiores commodi soluta, rerum<br>"+
                     "dolorum quas tempore veritatis, atque voluptatem<br>"+
                      "natus impeditipsam, dicta in magnam architecto.";

	var  d1= document.getElementsByClassName("paso1");
	var  d2= document.getElementsByClassName("paso2");
	var  d3= document.getElementsByClassName("paso3");
    
    d1[0].addEventListener("mouseover",function(){
   var  descripcion2= document.getElementsByClassName("descripcion1")[0].innerHTML=descripcion;


    } ,false);

	

	d2[0].addEventListener("mouseover",function(){
   var  descripcion2= document.getElementsByClassName("descripcion2")[0].innerHTML=descripcion;


    } ,false);


   d3[0].addEventListener("mouseover",function(){
   var  descripcion3= document.getElementsByClassName("descripcion3")[0].innerHTML=descripcion; } ,false);



}

function mostrarTitulo() {

	  var  t1=document.getElementsByClassName("paso1");
    var  t2=document.getElementsByClassName("paso2");
    var  t3=document.getElementsByClassName("paso3");

   t1[0].addEventListener("mouseout",function(){

   var  titulo1=document.getElementById("titulo1").innerHTML="PASO 1"; } ,false);

   t2[0].addEventListener("mouseout",function(){
   var  titulo2=document.getElementById("titulo2").innerHTML="PASO 2"; } ,false);

   t3[0].addEventListener("mouseout",function(){
   var  titulo3=document.getElementById("titulo3").innerHTML="PASO 3";} ,false);



	
}

function borrarDescripcion(){
	
	var d1=document.getElementsByClassName("paso1");
	var d2=document.getElementsByClassName("paso2");
	var d3=document.getElementsByClassName("paso3");

	d1[0].addEventListener("mouseout",function(){
   var  descripcion1=document.getElementsByClassName("descripcion1")[0].innerHTML="";

    } ,false);

   d2[0].addEventListener("mouseout",function(){
   var  descripcion2=document.getElementsByClassName("descripcion2")[0].innerHTML=""; 

  } ,false);

   d3[0].addEventListener("mouseout",function(){
   var  descripcion3=document.getElementsByClassName("descripcion3")[0].innerHTML="";

    } ,false);
    
    
}

 
verDescripcionPasos();

