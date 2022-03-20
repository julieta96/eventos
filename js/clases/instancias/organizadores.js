define(['jquery','pass','clases/organizador'] , ($,pass,organizador)=>{

	let luz = new organizador(1, "Luz", "Rodriguez","lrodriguezeventosarg@gmail.com",atob(pass.recital));
	let janet = new organizador(2, "Janet", "Ruiz","jruizeventosarg@gmail.com",atob(pass.karaoke));
	let camilo = new organizador(3, "Camilo", "Gomez","cgomezeventosarg@gmail.com",atob(pass.cumple));
	let carlos = new organizador(4, "Carlos", "Vazquez","cvazquezeventosarg@gmail.com",atob(pass.casamiento));
	let luis = new organizador(5, "Luis", "Garcia","lgarciaeventosarg@gmail.com",atob(pass.egresado));
	let paola = new organizador(6, "Paola", "Ortiz","portizeventosarg@gmail.com",atob(pass.fiesta15));

	let organizadores = [luz, janet , camilo , carlos , luis , paola];

    return{

    	listaOrganizadores : organizadores,
    	luz:luz,
    	janet : janet,
    	camilo: camilo,
    	carlos:carlos,
    	luis:luis,
    	paola:paola
    }    


})