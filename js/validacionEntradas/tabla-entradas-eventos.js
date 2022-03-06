  require(['jquery','clases/instancias/eventos'], ($,eventos)=>{

    $("#fecha-recital").text(`${eventos.recitalDatos.getFecha}`);
    $("#titulo-recital").text(`${eventos.recitalDatos.getNombre}`);
    $(".precio-re").text(`${eventos.recitalDatos.getPrecio}`);
    $(".cant-re").text(localStorage.getItem("contador-re"));

    $("#fecha-karaoke").text(`${eventos.karaokeDatos.getFecha}`);
    $("#titulo-karaoke").text(`${eventos.karaokeDatos.getNombre}`);
    $(".precio-kk").text(`${eventos.karaokeDatos.getPrecio}`);
    $(".cant-kk").text(localStorage.getItem("contador-kk"));

    $("#fecha-cumple").text(`${eventos.cumpleDatos.getFecha}`);
    $("#titulo-cumple").text(`${eventos.cumpleDatos.getNombre}`);
    $(".precio-cm").text(`${eventos.cumpleDatos.getPrecio}`);
    $(".cant-cm").text(localStorage.getItem("contador-cm"));

    $("#fecha-casamiento").text(`${eventos.casamientoDatos.getFecha}`);
    $("#titulo-casamiento").text(`${eventos.casamientoDatos.getNombre}`);
    $(".precio-ca").text(`${eventos.casamientoDatos.getPrecio}`);
    $(".cant-ca").text(localStorage.getItem("contador-ca"));

    $("#fecha-egresado").text(`${eventos.egresadoDatos.getFecha}`);
    $("#titulo-egresado").text(`${eventos.egresadoDatos.getNombre}`);
    $(".precio-eg").text(`${eventos.egresadoDatos.getPrecio}`);
    $(".cant-eg").text(localStorage.getItem("contador-eg"));

    $("#fecha-fiesta15").text(`${eventos.fiesta15Datos.getFecha}`);
    $("#titulo-fiesta15").text(`${eventos.fiesta15Datos.getNombre}`);
    $(".precio-15").text(`${eventos.fiesta15Datos.getPrecio}`);
    $(".cant-15").text(localStorage.getItem("contador-15"));

  });  
    