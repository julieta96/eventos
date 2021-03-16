define(['eventos-creados'] , function(objetoEvento){

return class Carrito{

	constructor(id){

		this.id = id;
		this.vacio = true;
		this.contador = 0;
		this.total = 0.0;
		this.listaEventos = new Array();
	}


	set setId(nuevoValor){

		this.id=nuevoValor;

	}

	get getId(){

		return this.id;
		
	}


	set setContador(nuevoValor){

		this.contador=nuevoValor;

	}

	get getContador(){

		return this.contador;
		
	}


	set setTotal(nuevoValor){

		this.total=nuevoValor;

	}

	get getTotal(){

		return this.total;
		
	}

	set setVacio(nuevoValor){

		this.vacio=nuevoValor;

	}

	get getVacio(){

		return this.vacio;
		
	}

	set setListaEventos(nuevoValor){

		this.listaEventos=nuevoValor;

	}

	get getListaEventos(){

		return this.listaEventos;
		
	}

	obtenerEvento(id){//funciona

	let eventoEncontrado = null;

     objetoEvento.eventos.filter(function (obj) {
     let encontrarEvento = obj;
     if(encontrarEvento.getId==id){

        eventoEncontrado=obj;

     }
 

     })
			
	return eventoEncontrado;

	}

	agregarCantidadEvento(id, cantidad){//funciona
        
        let cantidadEvento = 0;
        cantidadEvento+=cantidad;
		this.buscarEventoId(id).setCantidad=cantidadEvento;
		console.log(this.buscarEventoId(id).setCantidad=cantidadEvento)
		console.log(this.buscarEventoId(id).getCantidad)
	}

	comprarEvento(evento){//funciona - retorna objetoEvento agregado actualmente

		let guardarEvento = this.obtenerEvento(evento);
		let eventoActual = null;
        
        if(!this.listaEventos.includes(guardarEvento)){
		this.listaEventos.push(guardarEvento);
		eventoActual = guardarEvento;}

	    return eventoActual;   
	}

	buscarEventoId(id){//funciona

	let eventoEncontrado = null;

     this.listaEventos.filter(function (obj) {
     let encontrarEvento = obj;
     if(encontrarEvento.getId==id){

        eventoEncontrado=obj;

     }
 

     })
			
	return eventoEncontrado;

	}

	calcularTotal(){ //obtener el objeto y llamar al precio + multiplicar por la cantidad

		let precio = 0;
		let cantidad = 0;

		for(let lista in this.listaEventos){

            precio = lista.getPrecio;
            cantidad = lista.cantidad;

		}
         console.log(this.lista)
         localStorage.setItem("totalCarrito", this.total);
         this.total+=precio*cantidad;
         this.setTotal= localStorage.getItem("totalCarrito", this.total);
         console.log(this.getTotal);
		 return this.getTotal;       
	}


	eliminarEvento(eventoId){
      //let lista = this.lista;
      let index = this.lista.findIndex(e=>e.getId==eventoId);
      let eliminar = this.lista.splice(index, 1);

	}

	vaciarCarrito(){

		if(this.estaVacio()==false){
          
        this.setContador=0;
        this.setTotal=0;

		}

	}

	estaVacio(){
         

		if(this.listaEventos.length==0){

			this.setVacio=true;

		}else{
			this.setVacio=false;
		}

		return this.getVacio;
	}
}

})