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

	comprarEvento(evento){

		this.listaEventos[this.contador]=this.obtenerEvento(evento);
		this.contador++;

		let lista = this.listaEventos;
        let size = lista.length;
        let ultimoEvento = lista[size-1];
         console.log(this.listaEventos)
		let total=0;
		let precioEvento= ultimoEvento.getPrecio;
		let cantidadEvento= ultimoEvento.getCantidad;

		total+=precioEvento*cantidadEvento;

        localStorage.setItem("totalCarrito", total);
        this.setTotal=localStorage.getItem("totalCarrito");
        console.log(this.getTotal)
        return this.getTotal;
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


	

	agregarCantidadEvento(id, cantidad){

		this.buscarEventoId(id).setCantidad=cantidad;
	}

	eliminarEvento(eventoId){
      //let lista = this.lista;
      let index = this.lista.findIndex(e=>e.getId==eventoId);
      let eliminar = this.lista.splice(index, 1);

	}

	vaciarCarrito(){

		if(this.estaVacio()==false){
          
        setContador=0;
        setTotal=0;

		}

	}

	estaVacio(){
         

		if(this.contador==0){

			setVacio=true;

		}else{
			setVacio=false;
		}

		return getVacio;
	}
}

})