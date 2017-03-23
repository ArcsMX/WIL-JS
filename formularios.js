var  i = 0;


function info(){
	var t1 = document.getElementById("nombre").value;
	var t2 = document.getElementById("edad").value;
	var t3 = document.getElementById("mail").value;
	var t4 = document.getElementById("telefono").value;

	

	var error = '<div id = "texto" >'+'<hr>'+"No se recibio suficiente informacion en el formulario."+'</div>';
	
	if(t1 && t2 && t3 && t4){
		i++;
		var name = "texto" + i;
		//alert(name);
		
		var text = '<div id = "texto">'+'<hr>'+t1 +'<br>' + t2+'<br>'+t3+'<br>'+t4+'<br>'+'<button id="Eliminar" onclick="elimina();" >Eliminar</button>'+'</div>';
		document.getElementById("texto").id= name;
		document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML +text ;
	}
	else
	{
		i++;
		var name = "texto" + i;
		alert("Un campo esta vacio.");
		//alert(name);
        document.getElementById("texto").id= name;
		document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML +error ;
	}

}


function elimina(){
	document.getElementById(name).remove();
}

