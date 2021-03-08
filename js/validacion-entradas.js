require(['jquery','eventos-creados','modal','personalizar-invitacion','redireccionarPagina','entradas'], 
    function($,e,m,p,r,entradas){

    $("#fecha-recital").text(`${e.recitalDatos.getFecha}`);
    $("#titulo-recital").text(`${e.recitalDatos.getNombre}`);
    $(".precio-r").text(`${e.recitalDatos.getPrecio}`);

    $("#fecha-karaoke").text(`${e.karaokeDatos.getFecha}`);
    $("#titulo-karaoke").text(`${e.karaokeDatos.getNombre}`);
    $(".precio-k").text(`${e.karaokeDatos.getPrecio}`);

    $("#fecha-cumple").text(`${e.cumpleDatos.getFecha}`);
    $("#titulo-cumple").text(`${e.cumpleDatos.getNombre}`);
     $(".precio-cum").text(`${e.cumpleDatos.getPrecio}`);

    $("#fecha-casamiento").text(`${e.casamientoDatos.getFecha}`);
    $("#titulo-casamiento").text(`${e.casamientoDatos.getNombre}`);
     $(".precio-ca").text(`${e.casamientoDatos.getPrecio}`);

    $("#fecha-egresado").text(`${e.egresadoDatos.getFecha}`);
    $("#titulo-egresado").text(`${e.egresadoDatos.getNombre}`);
    $(".precio-eg").text(`${e.egresadoDatos.getPrecio}`);


    $("#fecha-fiesta15").text(`${e.fiesta15Datos.getFecha}`);
    $("#titulo-fiesta15").text(`${e.fiesta15Datos.getNombre}`);
    $(".precio-15").text(`${e.fiesta15Datos.getPrecio}`);

    r;
    entradas;



})