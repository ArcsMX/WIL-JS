var lang ="", niv="";
var res ="";


function idioma(){
	document.getElementById("langSelec").style.visibility = "visible";
	lang = document.getElementById("idiomas").value;

	//alert(document.getElementById("idiomas").value);

}
function nivel(){
	niv = document.getElementById("niveles").value;
	//alert(document.getElementById("niveles").value);
}

function aceptar(){
	res +=  lang +',' + niv+ ';' ;
	//alert(res);
	document.getElementById("total").innerHTML = res;
}