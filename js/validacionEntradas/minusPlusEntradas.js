require(['jquery'], ($)=>{

  $(".fas").click((e)=>{

       let cantidadEvento = e.target.classList[2];

       let cantidad = cantidadEvento.substring(0, 7);//cant-re
       let evento = cantidad.substring(5,7);//re 

      let valorPlus = localStorage.getItem(`contador-${evento}`);
      let valorMinus = localStorage.getItem(`contador-${evento}`);

       //PLUS-------------
       
       if(cantidadEvento.includes('p')){

        localStorage.setItem(`contador-${evento}`,valorPlus);
        valorPlus++;

        $(`.${cantidad}`).text(  localStorage.getItem(`contador-${evento}`))

       }

       //----------------------

       //MINUS------------------

       if(cantidadEvento.includes('m')){

         valorMinus--;

         if(valorMinus<0){

          valorMinus=0;
          
         }

         localStorage.setItem(`contador-${evento}`,valorMinus);

        $(`.${cantidad}`).text( localStorage.getItem(`contador-${evento}`))
        $(".contador").text(localStorage.getItem("cantidadEventos"));


       }
    
  })

});




