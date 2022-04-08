define(['clases/instancias/eventos'] , (objetoEvento)=>{

return class Carrito{

	constructor(id){

		this.id = id;
		this.vacio = false;
		this.contador = 0;
		this.total = 0;
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
	}

	comprarEvento(evento){//funciona -  agrega el evento actual

		let guardarEvento = this.obtenerEvento(evento);
        
        if(!this.listaEventos.includes(guardarEvento)){
		this.listaEventos.push(guardarEvento);
	    }
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

	calcularTotal(){ //recorrer lista y llamar al precio + multiplicar por la cantidad

		let precio = 0;
		
		for(let lista in this.listaEventos){

            precio = this.listaEventos[lista].getPrecio;
		}

         this.total=  parseInt(this.getTotal) +  parseInt(precio);
         localStorage.setItem("totalCarrito", this.total);
         localStorage.getItem("totalCarrito");
		 return this.getTotal;       
	}


	eliminarEvento(eventoId){
      //let lista = this.lista;
      let index = this.listaEventos.findIndex(e=>e.getId==eventoId);
      let eliminar = this.listaEventos.splice(index, 1);

	}

	vaciarCarrito(){

		localStorage.setItem("cantidadEventos",0); 
		localStorage.setItem("contador-re",0);
		localStorage.setItem("contador-kk",0);
		localStorage.setItem("contador-cm",0);
		localStorage.setItem("contador-ca",0);
		localStorage.setItem("contador-eg",0);
		localStorage.setItem("contador-15",0);
		localStorage.getItem("totalCarrito",0);
        $(".contador").text(localStorage.getItem("cantidadEventos"));
	        this.setContador=localStorage.getItem("cantidadEventos");
	        this.setTotal=localStorage.getItem("totalCarrito");
	        for(let lista in this.listaEventos){

	            this.listaEventos[lista].setCantidad=0;
			}
			$(".icon-basket").css("color","#fff");
			this.setVacio=true;		

	}

	estaVacio(){

		if(this.getListaEventos.length==0){

			this.setVacio=true;
			localStorage.setItem("carritoVacio",true);

		}else{
			
			this.setVacio=false;	
			localStorage.setItem("carritoVacio",false);
		}

		return this.getVacio;
	}
}

})