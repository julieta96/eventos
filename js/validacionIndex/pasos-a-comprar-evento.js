const verDescripcionPasos=()=>{

  setInterval(esconderTitulo(),3);
  setInterval(agregarDescripcion(),3);
  setInterval(borrarDescripcion(),3);
  setInterval(mostrarTitulo(),3);

    }
  

const esconderTitulo = () =>{

    let  t1=document.getElementsByClassName("paso1");
    let  t2=document.getElementsByClassName("paso2");
    let  t3=document.getElementsByClassName("paso3");

	t1[0].addEventListener("mouseover",()=>{
   let  titulo1=document.getElementById("titulo1").innerHTML=" "; } );

   t2[0].addEventListener("mouseover",()=>{
   let  titulo2=document.getElementById("titulo2").innerHTML=" ";});

   t3[0].addEventListener("mouseover",()=>{
   let  titulo3=document.getElementById("titulo3").innerHTML=" ";});


}


const agregarDescripcion = ()=>{

	let descripcion="Lorem ipsum dolor sit amet consectetur,<br>"+ 
                     "adipisicing elit.Iure, veniam fuga?<br>"+
                     "Illo adipisci maiores commodi soluta, rerum<br>"+
                     "dolorum quas tempore veritatis, atque voluptatem<br>"+
                      "natus impeditipsam, dicta in magnam architecto.";

	let  d1= document.getElementsByClassName("paso1");
	let  d2= document.getElementsByClassName("paso2");
	let  d3= document.getElementsByClassName("paso3");
    
    d1[0].addEventListener("mouseover",()=>{
   let  descripcion2= document.getElementsByClassName("descripcion1")[0].innerHTML=descripcion;


    } ,false);

	

	d2[0].addEventListener("mouseover",()=>{
   let  descripcion2= document.getElementsByClassName("descripcion2")[0].innerHTML=descripcion;


    } ,false);


   d3[0].addEventListener("mouseover",()=>{
   let  descripcion3= document.getElementsByClassName("descripcion3")[0].innerHTML=descripcion; } ,false);



}

const mostrarTitulo = () => {

	  let  t1=document.getElementsByClassName("paso1");
    let  t2=document.getElementsByClassName("paso2");
    let  t3=document.getElementsByClassName("paso3");

   t1[0].addEventListener("mouseout",()=>{

   let  titulo1=document.getElementById("titulo1").innerHTML="PASO 1"; } ,false);

   t2[0].addEventListener("mouseout",()=>{
   let  titulo2=document.getElementById("titulo2").innerHTML="PASO 2"; } ,false);

   t3[0].addEventListener("mouseout",()=>{
   let  titulo3=document.getElementById("titulo3").innerHTML="PASO 3";} ,false);



	
}

const borrarDescripcion = () =>{
	
	let d1=document.getElementsByClassName("paso1");
	let d2=document.getElementsByClassName("paso2");
	let d3=document.getElementsByClassName("paso3");

	d1[0].addEventListener("mouseout",()=>{
   let  descripcion1=document.getElementsByClassName("descripcion1")[0].innerHTML="";

    } ,false);

   d2[0].addEventListener("mouseout",()=>{
   let  descripcion2=document.getElementsByClassName("descripcion2")[0].innerHTML=""; 

  } ,false);

   d3[0].addEventListener("mouseout",()=>{
   let  descripcion3=document.getElementsByClassName("descripcion3")[0].innerHTML="";

    } ,false);
    
    
}

 
verDescripcionPasos();

