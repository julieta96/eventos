define([] , function(){

return class Organizador{

	constructor(id , nombre , apellido){

		this.id =id;
		this.nombre=nombre;
		this.apellido=apellido;     
	}


	set setId(nuevoValor){

		this.id=nuevoValor;

	}

	get getId(){

		return this.id;
		
	}

	set setNombre(nuevoValor){

		this.nombre=nuevoValor;

	}

	get getNombre(){

		return this.nombre;
		
	}

	set setApellido(nuevoValor){

		this.apellido=nuevoValor;

	}

	get getApellido(){

		return this.apellido;
		
	}


	}


})