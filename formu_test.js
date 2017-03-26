var  i = 0;

var divDinamico;
var buttonDinamico;

var arcs;

function info(){
	var t1 = document.getElementById("nombre").value;
	var t2 = document.getElementById("edad").value;
	var t3 = document.getElementById("mail").value;
	var t4 = document.getElementById("telefono").value;
	
	var error = '<div id = "texto" >'+'<hr>'+"No se recibio suficiente informacion en el formulario.";
	
	if(t1 && t2 && t3 && t4){
		i++;
		var name = "texto" + i;
		var riv = "elimina" + i;

		divDinamico = name;
		buttonDinamico = riv;
		
		//Alertas de variables name (texto id, elimina id)
		//alert("Caso de campos correctos con TEXTO = "+name);
		//alert("Caso de campos correctos con ELIMINA = "+riv);
		
		var text = '<div id = "texto">'+ '<hr>' + "Nombre: " + t1 + '.' + '<br>' + "Edad: " + t2 + " anios." + '<br>' + "Mail: " + t3 + '<br>' + "Telefono: " + t4 + '.' + '<br>' + '<button id="elimina" onClick="elimina(this.id); " >Eliminar</button>' + '</div>';
		document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML +text ;
		document.getElementById("texto").id= name;
		document.getElementById("elimina").id = riv;
		
	}
	else
	{
		i++;
		var name = "texto" + i;
		var riv = "elimina" + i;

		//Alertas de variables name (texto id, elimina id)
		//alert("Caso de campo vacio con TEXTO = "+name);
		//alert("Caso de campo vacio con ELIMINA = "+riv);
		
		divDinamico = name;
		buttonDinamico = riv;

		alert("Un campo esta vacio.");
		
       document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML + error + '<button id="elimina" onClick="elimina(this.id); " >Eliminar</button>' +'</div>';
       document.getElementById("texto").id= name;
	   document.getElementById("elimina").id = riv;
	}

}



function elimina(clicked_id){
	
	/*
	arcs = clicked_id;

	var boton = document.getElementById(arcs);
	var parentDiv = boton.parentNode.id;

	alert("ID del div padre = "+parentDiv);

	document.getElementById(parentDiv).remove();
	*/

	document.getElementById(document.getElementById(clicked_id).parentNode.id).remove();
}
