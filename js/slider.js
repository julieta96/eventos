var n=-1;
var slider;
var bRight;
var bLeft;

function slider() {
    bRight=document.getElementById("f-der");
    bLeft=document.getElementById("f-izq");
	bRight.addEventListener("click" , right);
	bLeft.addEventListener("click" , left);
}

function mostrarImagenes(n){

	for (var i =0; i<slider.length; i++) {

		slider=document.getElementsByClassName("eventos");

		slider[i].style.display="none";
	}
  

  slider[n].style.display="block";


}



function right(){

	/*alert("que onda");*/

	slider=document.getElementsByClassName("eventos");

	/*alert(slider.length);*/

	/*alert(n);*/

	if(n<=slider.length-1){
       
		n++;

	}


	if(n>=slider.length){
		n=slider.length;
	}

	if(n==4){
		n=3;
	}

	/*alert(n);*/

	mostrarImagenes(n);

}

function left(){

	/*alert("hi");*/

	slider=document.getElementsByClassName("eventos");

	if(n>0){

		n--;

	}

	if(/*n==0 ||*/ n==(-1)){
		n=1;
	}

   /* return n;*/

    /*alert(n);*/

   mostrarImagenes(n);
}


window.addEventListener("load" , slider , false);


