function info(){
	var t1 = document.getElementById("nombre").value;
	var t2 = parseInt(document.getElementById("edad").value);
	var t3 = document.getElementById("mail").value;
	var t4 = parseInt(document.getElementById("telefono").value);
	
	var error = '<hr>'+"No se recibio suficiente informacion en el formulario.";

	if(t1 && t2 && t3 && t4){
		var text = '<hr>'+t1 +'<br>' + t2+'<br>'+t3+'<br>'+t4;
		document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML +text ;
	}
	else
	{
		alert("Un campo esta vacio.");
		document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML +error ;
	}

}

