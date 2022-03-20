define([] , ()=>{

return class Organizador{

	constructor(id , nombre , apellido, email,pass){

		this.id =id;
		this.nombre=nombre;
		this.apellido=apellido;  
		this.email=email;
		this.pass=pass;   
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


	set setEmail(nuevoValor){

		this.email=nuevoValor;

	}

	get getEmail(){

		return this.email;
		
	}

	set setPass(nuevoValor){

		this.pass=nuevoValor;

	}

	get getPass(){

		return this.pass;
		
	}


	}


})