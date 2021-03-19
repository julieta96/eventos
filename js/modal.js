require(['jquery'],function($){

function modal(){

let boton= $(".boton2");
boton.click(function(){

	abrirModal();
});

let cerrar = $(".close");
cerrar.click(function(){

	cerrarModal();
});


}


function abrirModal(){

let modal=$("#modal");
let container = $(".modal-content");
    
   modal.css("display","block");
   container.css("transform","translateY(0%)");  

}


function cerrarModal(){

 let modal=$("#modal");

 modal.css("display","none");

    
}

modal();




   })


