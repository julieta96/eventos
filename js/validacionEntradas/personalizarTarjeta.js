require(['jquery'] , ($) =>{

	let carritoCargado = localStorage.getItem("compra");
	let carro=JSON.parse(carritoCargado);

	let personalizar = $(".personalizar");
	let modificarPersonalizar = $(".m-personalizar");
	let array = [];

	$(personalizar).each((i)=>{

		let id=$(personalizar[i]).attr('id');

		let evento = id.substring(0, id.length);

		array.push({id: `${evento}`});
	})

	/*$(modificarPersonalizar).each((i)=>{

		$(modificarPersonalizar[i]).removeAttr('disabled').addClass('comprado');
	})*/

	let id="";

	$(carro).each((i)=>{

		$(personalizar).each((j)=>{

			let nombre = carro[i].nombre.toLowerCase();

			if(nombre.includes(array[j].id)){

				id = array[j].id;
				$(`#${id}`).removeAttr('disabled');
				$(`#${id}`).addClass('comprado');
			}

		})

	})

	

	


});