var lang ="", niv="";
var res ="";
var i = 0;

var lengDinamico;

function idioma(){
	
	i++;

	var nameDiv = "langSelec" + i;
	var nameP = "seleccionado" + i;
	var nameSel = "niveles" + i;
	var nameElim = "eliminar" + i;
	//alert ("Indice de LANGSELEC = "+ nameDiv);
	//alert ("Indice de SELECCIONADO = " + nameP);
	
	lang = document.getElementById("idiomas").value;
	//alert(document.getElementById("idiomas").value);

	var cuadroNiveles =   '<div id="langSelec">' 
	 					+ '<hr>'
						+ '<p id="seleccionado"> </p>'
						+ '<select id="niveles" onchange="nivel(this.id);"  data-placeholder="Selecciona un nivel...">' 
							+ '<option value = "basico">Basico</option>'
	                		+ '<option value = "intermedio">Intermedio</option>'
	                		+ '<option value = "avanzado">Avanzado</option>'
	               		+ '</select>' 
	               	    + '<button id = "eliminar" style="color:red" style="font-style: bold" onclick="elimina(this.id);">X</button>'
	               	    + '</div>' ;

	               	    //var caca = document.getElementById("board").innerHTML;
	               	    //alert(caca);

	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML + cuadroNiveles ;
	
	document.getElementById("langSelec").id= nameDiv;
	document.getElementById("seleccionado").id = nameP;
	document.getElementById("niveles").id = nameSel;
	document.getElementById("eliminar").id = nameElim;

	document.getElementById(nameP).innerHTML = lang;
	


	

}

function nivel(clicked_id){
	niv = document.getElementById(clicked_id).value;
	//alert(niv);
}

function aceptar(){
	res +=  lang +',' + niv+ ';' ;
	//alert(res);

	if(res == ",;" || res == res+ ){
		alert("No se ingreso un idioma ni un nivel.");
	}
	else{
		document.getElementById("total").innerHTML = res;
	}
	
}
function elimina(clicked_id){
	document.getElementById(document.getElementById(clicked_id).parentNode.id).remove();

}
}
