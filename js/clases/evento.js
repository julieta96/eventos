define([], ()=>{


return class Evento{


constructor (id , nombre , descripcion, fecha , hora , precio , stock , foto, organizador){
   
      this.id=id;
      this.nombre=nombre;
      this.descripcion=descripcion;
      this.fecha = fecha;
      this.hora = hora;
      this.precio=precio;
      this.stock = stock;
      this.foto = foto;
      this.cantidadAComprar = 0;
      this.organizador = organizador;

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


set setDescripcion(nuevoValor){

      this.descripcion=nuevoValor;

   }


   get getDescripcion(){

      return this.descripcion;
}

set setFecha(nuevoValor){

      this.fecha=nuevoValor;

   }


get getFecha(){

      return this.fecha;
}

set setHora(nuevoValor){

      this.hora=nuevoValor;

   }


get getHora(){

      return this.hora;
}


set setPrecio(nuevoValor){

      this.precio=nuevoValor;

   }

   get getPrecio(){

      return this.precio;
}

set setStock(nuevoValor){

      this.stock=nuevoValor;

   }


   get getStock(){

      return this.stock;
}

  set setFoto(nuevoValor){

      this.foto=nuevoValor;

   }


   get getFoto(){

      return this.foto;
}


set setCantidad(nuevoValor){

      this.cantidadAComprar=nuevoValor;

   }


   get getCantidad(){

      return this.cantidadAComprar;
}


 set setOrganizador(organizador){

      this.id=organizador;

   }


   get getOrganizador(){

      return this.organizador;
}

} 


} )




   
