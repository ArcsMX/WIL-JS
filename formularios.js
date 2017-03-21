function info(){
	var t1 = document.getElementById("nombre").value;
	var t2 = document.getElementById("edad").value;
	var t3 = document.getElementById("mail").value;
	var t4 = document.getElementById("telefono").value;

	alert(t1);


	if(t1 == null  || t2 != ' ' || t3 != '' || t4 != ''){
		alert("ta basio");
		var arresp = new Array();
		var i = 0;
		arresp[i] = text;
	
		var text = t1 +'<br>' + t2+'<br>'+t3+'<br>'+t4;
	}
	
	else
	{
		console.log("Un campo esta vacio.");
	}
	

	
	document.getElementById("imprime").innerHTML = text;

}