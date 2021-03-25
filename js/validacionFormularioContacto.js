require(['jquery'], function(){

let apellido = $("#apellido");
let telefono = $("#telefono");
let email = $("#email1");
//let comentario = $("#comentario").val();
 

function validarNombre(nombre){

	let letras = /[a-z]/;

	if(letras.test(nombre)){
		nombre.css("background","green");
		console.log(nombre)
	}else{
		nombre.css("background","red");
		console.log("ingresar letras en nombre")
	}

}

//-------------------------

function validarApellido(apellido){

	let letras = /^[a-zA-Z]+$/;

	if(apellido.match(letras)){
		//apellido.css("background","green");
		console.log(apellido)
	}else{
		//apellido.css("background","red");
		console.log("ingresar letras en apellido")
	}
	
}

//--------------------------------

function validarTelefono(tel){

	let numeros = /[0-9]/;

	if(tel.match(numeros)){
		//tel.css("background","green");
		console.log(tel)
	}else{
		//tel.css("background","red");
		console.log("ingresar numeros en tel")
	}
}

//-----------------

function validarEmail(email){

 let caracteresEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

 if(email.match(caracteresEmail)){
		//email.css("background","green");
		console.log(email)
	}else{
		//email.css("background","red");
		console.log("email invalido")
	}

	
}

//-------------------------

function validarComentario(comentario){

	if(comentario.length<10){
		comentario.css("background","green");
	}else{
		comentario.css("background","red");
	}
	
}

//----------------------


	$("#b-enviar").click(function() {

		/*alert($("#nombre").val());
		alert($("#apellido").val());
		alert($("#telefono").val());
		alert($("#email1").val());*/
		//alert($("#comentario").val()); 
         
        let nombre = $("#nombre"); 
		validarNombre(nombre.val());
		//validarApellido(apellido);
		//validarTelefono(telefono);
		//validarEmail(email);
		//validarComentario(comentario);

    })

})




