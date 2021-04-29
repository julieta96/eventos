requirejs.config({

    baseUrl: 'js',
     waitSeconds: 200,
    paths:{
          'eventoV':'validacionEvento/eventos',
          'eventoC':'clases/evento',
          'eventos':'clases/instancias/eventos',
          'eventosD':'validacionEvento/eventos-detalle',
          'jquery':'jquery',
          'pasos':'validacionIndex/validacion_js',
          'index':'validacionIndex/index',
          'slider':'validacionIndex/slider',
          'sliderautomatico':'validacionIndex/slider-automatico',
          'modal':'modal',
          'invitacion':'personalizar-invitacion',
          'entradas':'entradas.js',
          'redireccion-pagina':'redireccionarPagina',
          'tarjeta':'tarjeta-personalizada',
          'tarjeta2':'tarjeta-personalizada2',
          'personalizar-invitacion':'personalizar-invitacion',
          'formulario':'formulario',
          'carritoC':'clases/carrito',
          'carrito':'clases/instancias/validacionCarrito',
          'organizador':'clases/organizador',
          'organizadores':'clases/instancias/organizadores',
          'validacionFormularioContacto':'validacionFormularioContacto'

      },
      
    shim : {
       jquery : {
        exports : '$'
       }

    }
});


