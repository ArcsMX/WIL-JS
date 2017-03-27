var lang ="", niv="";
var res ="";
var i = 0;

var lengDinamico;

function idioma(){
	
	i++;

	var name = "langSelec" + i;
	//alert (name);

	lang = document.getElementById("idiomas").value;
	//alert(document.getElementById("idiomas").value);

	var cuadroNiveles =   '<div id="langSelec">' 
	 					+ '<hr>'
						+ '<p id="seleccionado"> </p>'
						+ '<select id="niveles" onclick="nivel();"  data-placeholder="Selecciona un nivel...">' 
							+ '<option value = "basico">Basico</option>'
	                		+ '<option value = "intermedio">Intermedio</option>'
	                		+ '<option value = "avanzado">Avanzado</option>'
	               		+ '</select>' 
	               	    + '<button id = "eliminar" style="color:red" style="font-style: bold" onclick="elimina();">X</button>'
	               	    + '</div>' ;

	               	    var caca = document.getElementById("board").innerHTML;
	               	    alert(caca);

	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML + cuadroNiveles ;

	document.getElementById("seleccionado").innerHTML = lang;
	document.getElementById("langSelec").id= name;


	

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
function elimina(){

}
