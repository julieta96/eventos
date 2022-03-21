require(['jquery'] , ($) =>{

	let personalizar = $(".personalizar");

	$(personalizar).each((i)=>{

			let eventoComprado= $(personalizar[i]).attr('id');
			let buscarEventoComprado = localStorage.getItem(`${eventoComprado}Comprado`);

			if(buscarEventoComprado==eventoComprado){

				$(personalizar[i]).removeAttr('disabled');
			}

	})

});