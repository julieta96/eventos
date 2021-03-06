requirejs.config({

    baseUrl: 'js',

    paths:{
          'eventos':'eventos',
          'jquery':'jquery',
          'pasos':'validacion_js',
          'index':'index',
          'slider':'slider',
          'sliderautomatico':'slider-automatico',
          'objetos':'eventos-creados',
          'eventos-relacionados':'eventos-relacionados',
          'modal':'modal',
          'invitacion':'personalizar-invitacion',
          'entradas':'entradas.js',
          'redireccion-pagina':'redireccionarPagina',
          'tarjeta':'tarjeta-personalizada',
          'tarjeta2':'tarjeta-personalizada2',
          'personalizar-invitacion':'personalizar-invitacion',
          'formulario':'formulario'
      },
      
    shim : {
       jquery : {
        exports : '$'
       }

    }
});


