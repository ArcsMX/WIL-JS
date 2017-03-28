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

	//alert ("Indice de LANGSELEC = "+ nameDiv);
	//alert ("Indice de SELECCIONADO = " + nameP);

	
	lang = document.getElementById("idiomas").value;
	//alert(document.getElementById("idiomas").value);

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

	//alert("Esta es la funcion nivel con valor: "+ niv);

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

	//alert(niv);
}

function aceptar(){
	res +=  lang +',' + niv+ ';' ;
	var aux = res + ",;";
	//alert(aux);
	//alert(res);

	if(res == ",;"){
		alert("No se ingreso un idioma ni un nivel.");
	}
	else{
		document.getElementById("total").innerHTML = res;
	}
	
}
function elimina(clicked_id){
	var arcs = clicked_id;
	var index = arcs.slice(8,arcs.length);

	//alert(index);

	var idiomaLocal = document.getElementById("seleccionado" + index).innerHTML;
	var nivelLocal = document.getElementById("niveles" + index).value ;

	var elemento = idiomaLocal +',' + nivelLocal + ';' ;

	//alert(idiomaLocal);
	//alert(nivelLocal)
	alert(elemento);

	var pos = res.replace(elemento,"");
	//alert(pos);
	res = pos;


	document.getElementById(document.getElementById(clicked_id).parentNode.id).remove();

		document.getElementById("total").innerHTML = res;
	
	//Buscar el value de idioma con id de (elimina+i).parentNode, con ese value buscarlo en el string, pegado a ese value estara el nivel.
	//Se puede usar replace :thinking:
	
}

