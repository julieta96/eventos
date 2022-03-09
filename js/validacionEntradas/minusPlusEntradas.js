require(['jquery'], ($)=>{

  let valorPlus = 0;
  let valorMinus = 0;
  let evento ="";

  $(".fas").click((e)=>{

       let cantidadEvento = e.target.classList[2];

       let cantidad = cantidadEvento.substring(0, 7);//cant-re
       evento = cantidad.substring(5,7);//re 
       
       //PLUS-------------
       
       if(cantidadEvento.includes('p')){

        valorPlus+=1;

        if(valorPlus<0){

           valorPlus=0;
         }
         
        localStorage.setItem(`contador-${evento}`,valorPlus);
        
        $(`.${cantidad}`).text(  localStorage.getItem(`contador-${evento}`))

       }

       //----------------------

       //MINUS------------------

       if(cantidadEvento.includes('m')){

         valorPlus-=1;

         valorMinus=valorPlus;

         if(valorMinus<0){

           valorMinus=0;
         }

         localStorage.setItem(`contador-${evento}`,valorMinus);

         $(`.${cantidad}`).text( localStorage.getItem(`contador-${evento}`))
         $(".contador").text(localStorage.getItem("cantidadEventos"));

       }

      $(`.t-${evento}`).text( $(`.cant-${evento}`).text() * $(`.precio-${evento}`).text());
    
  })

});




