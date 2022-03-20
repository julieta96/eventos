define(['jquery','clases/evento','clases/instancias/organizadores'], ($,e,o)=>{

	let descripcion = `Lorem ipsum dolor sit amet consectetur,<br>
     adipisicing elit.Iure, veniam fuga?<br>
     Illo adipisci maiores commodi soluta, rerum<br>
     dolorum quas tempore veritatis, atque voluptatem<br>
     natus impeditipsam, dicta in magnam architecto.`;

     const recital = new e(10, "RECITAL", descripcion,'15/10/2021', '20hs', 3000.0, 10,'img/eventos/1.png',o.luz);
     const karaoke = new e(20, "KARAOKE", descripcion,'02/09/2021','23hs', 850.0, 10,'img/eventos/2.jpg',o.janet);
     const cumple = new e(30, "CUMPLEAÑOS", descripcion,'10/07/2021','20hs', 10000.0, 5,'img/eventos/3.jpg',o.camilo);
     const casamiento = new e(40, "CASAMIENTO", descripcion,'20/09/2021','23hs', 20000.0, 10,'img/eventos/4.jpg',o.carlos);
     const egresado = new e(50, "EGRESADOS", descripcion,'12/12/2021','20hs', 18000.0, 100,'img/eventos/5.jpg',o.luis);
     const fiesta15 = new e(60, "FIESTA DE 15", descripcion,'08/08/2021','21hs', 16000.0, 20,'img/eventos/6.jpg',o.paola);

     localStorage.setItem("idRecital",recital.getId);
     localStorage.setItem("precioRecital",recital.getPrecio);

     localStorage.setItem("idKaraoke", karaoke.getId);
     localStorage.setItem("precioKaraoke", karaoke.getPrecio);

     localStorage.setItem("idCumple", cumple.getId);
     localStorage.setItem("precioCumple", cumple.getPrecio);

     localStorage.setItem("idCasamiento", casamiento.getId);
     localStorage.setItem("precioCasamiento", casamiento.getPrecio);

     localStorage.setItem("idEgresado", egresado.getId);
     localStorage.setItem("precioEgresado", egresado.getPrecio);

     localStorage.setItem("idFiesta15", fiesta15.getId);
     localStorage.setItem("precioFiesta15", fiesta15.getPrecio);

     let eventos =[recital , karaoke , cumple ,casamiento , egresado , fiesta15];

     const eventosDatos = ()=>{

     $("#precio-recital").text(`$${recital.getPrecio}`);
     $("#t-recital").text(`${recital.getNombre}`);
     $("#fecha-recital").text(`Octubre ${recital.getFecha.substring(0,2)}, ${recital.getFecha.substring(6,10)}`);


     $("#precio-karaoke").text(`$${karaoke.getPrecio}`);
     $("#t-karaoke").text(`${karaoke.getNombre}`);
     $("#fecha-karaoke").text(`Septiembre ${karaoke.getFecha.substring(0,2)}, ${karaoke.getFecha.substring(6,10)}`);

     $("#precio-cumple").text(`$${cumple.getPrecio}`);
     $("#t-cumple").text(`${cumple.getNombre}`);
     $("#fecha-cumple").text(`Julio ${cumple.getFecha.substring(0,2)}, ${cumple.getFecha.substring(6,10)}`);

     $("#precio-casamiento").text(`$${casamiento.getPrecio}`);
     $("#t-casamiento").text(`${casamiento.getNombre}`);
     $("#fecha-casamiento").text(`Septiembre ${casamiento.getFecha.substring(0,2)}, ${casamiento.getFecha.substring(6,10)}`);

     $("#precio-egresado").text(`$${egresado.getPrecio}`);
     $("#t-egresado").text(`${egresado.getNombre}`);
     $("#fecha-egresado").text(`Diciembre ${egresado.getFecha.substring(0,2)}, ${egresado.getFecha.substring(6,10)}`);

     $("#precio-f15").text(`$${fiesta15.getPrecio}`);
     $("#t-fiesta15").text(`${fiesta15.getNombre}`);
     $("#fecha-fiesta15").text(`Agosto ${fiesta15.getFecha.substring(0,2)}, ${fiesta15.getFecha.substring(6,10)}`);

  }

          return{
           
           eventosDatos: eventosDatos(),
           recitalDatos : recital,
           karaokeDatos : karaoke,
           cumpleDatos : cumple,
           casamientoDatos : casamiento,
           egresadoDatos : egresado,
           fiesta15Datos : fiesta15,
           eventos:eventos

        }
     })  

