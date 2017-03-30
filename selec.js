var lang ="", niv="";
var res ="";
var i = 0;
var lambda;

var lengDinamico;

var auxBasico, auxIntermedio, auxAvanzado;

function idioma(){
	
	var nameDiv = "langSelec" + i;
	
	var nameP = "seleccionado" + i;
	var nameSel = "niveles" + i;
	var nameElim = "eliminar" + i;

	var nameNivB = "nivBasico"+ i;
	var nameNivI = "nivInt" + i;
	var nameNivA = "nivAvan" + i;
	
	lang = document.getElementById("idiomas").value;

	var cuadroNiveles =   '<div id="langSelec">' 
	 					+ '<hr>'
						+ '<p id="seleccionado"> </p>'
						+ '<select id="niveles" onchange="nivel(this.id); "  data-placeholder="Selecciona un nivel...">' 
							+ '<option value = "basico" id = "nivBasico" >Basico</option>'
	                		+ '<option value = "intermedio" id = "nivInt" >Intermedio</option>'
	                		+ '<option value = "avanzado" id = "nivAvan" >Avanzado</option>'
	               		+ '</select>' 
	               	    + '<button id = "eliminar" style="color:red" style="font-style: bold" onclick="elimina(this.id);">X</button>'
	               	    + '</div>' ;

	document.getElementById("board").innerHTML = document.getElementById("board").innerHTML + cuadroNiveles ;
	
	document.getElementById("langSelec").id= nameDiv;

	document.getElementById("seleccionado").id = nameP;
		document.getElementById(nameP).innerHTML = lang;
	
	document.getElementById("niveles").id = nameSel;
	document.getElementById("eliminar").id = nameElim;

	document.getElementById("nivBasico").id = nameNivB;
	document.getElementById("nivInt").id = nameNivI;
	document.getElementById("nivAvan").id = nameNivA;

	auxBasico = nameNivB;
	auxIntermedio = nameNivI;
	auxAvanzado = nameNivA;

	i++;
}

function nivel(clicked_id){
	niv = document.getElementById(clicked_id).value;

	switch(niv){

		case "basico":
			document.getElementById(auxBasico).setAttribute('selected', true);
		break; 

		case "intermedio":
			document.getElementById(auxIntermedio).setAttribute('selected', true);
		break;

		case "avanzado":
			document.getElementById(auxAvanzado).setAttribute('selected', true);
		break;

		default: 
		
	}
}

function aceptar(){
	var j;

	for (j=0; j < i; j++){

	var resLocal;
	var indexSelec = "seleccionado" + j;
	var indexNivel = "niveles" + j;
	
	lang = document.getElementById(indexSelec).innerHTML;
	niv = document.getElementById(indexNivel).value;

	resLocal =  lang +',' + niv+ ';' ;

	res.concat(resLocal.toString());

    }

    document.getElementById("total").innerHTML = res;
}

function elimina(clicked_id){
	var arcs = clicked_id;
	var index = arcs.slice(8,arcs.length);

	var idiomaLocal = document.getElementById("seleccionado" + index).innerHTML;
	var nivelLocal = document.getElementById("niveles" + index).value ;

	var elemento = idiomaLocal +',' + nivelLocal + ';' ;

	var pos = res.replace(elemento,"");
	res = pos;

	document.getElementById(document.getElementById(clicked_id).parentNode.id).remove();

		document.getElementById("total").innerHTML = res;
}

