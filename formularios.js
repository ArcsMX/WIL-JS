function info(){
	var t1 = document.getElementById("nombre").value;
	var t2 = document.getElementById("edad").value;
	var t3 = document.getElementById("mail").value;
	var t4 = document.getElementById("telefono").value;

	
	var arresp = new Array();
	var i = 0;
	var error = "No se recibio suficiente informacion en el formulario.";

	if(t1 != null  && t2 != null && t3 != null && t4 != null){
		alert("Un campo esta vacio.");
		document.getElementById("imprime").innerHTML = error;
	}
	
	else
	{
		alert(t1);
		alert(t2);
		alert(t3);
		alert(t4);
		
		arresp[i] = text;
	
		var text = t1 +'<br>' + t2+'<br>'+t3+'<br>'+t4;
		document.getElementById("imprime").innerHTML = text;
	}
	

	
	

}