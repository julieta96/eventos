define(['jquery','organizador'] , function($,o){

	let luz = new o(1, "Luz", "Rodriguez");
	let janet = new o(2, "Janet", "Ruiz");
	let camilo = new o(3, "Camilo", "Gomez");
	let carlos = new o(4, "Carlos", "Vazquez");
	let luis = new o(5, "Luis", "Garcia");
	let paola = new o(6, "Paola", "Ortiz");

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