var  i = 0;
var aux;
function info(){
	var t1 = document.getElementById("nombre").value;
	var t2 = document.getElementById("edad").value;
	var t3 = document.getElementById("mail").value;
	var t4 = document.getElementById("telefono").value;
	
	var error = '<div id = "texto" >'+'<hr>'+"No se recibio suficiente informacion en el formulario."+'</div>';
	
	if(t1 && t2 && t3 && t4){
		i++;
		var name = "texto" + i;
		aux = name;
		//alert(name);
		
		var text = '<div id = "texto">'+ '<hr>' + "Nombre: " + t1 + '.' + '<br>' + "Edad: " + t2 + " anios." + '<br>' + "Mail: " + t3 + '<br>' + "Telefono: " + t4 + '.' + '<br>' + '<button id="Eliminar" onclick="elimina();" >Eliminar</button>' + '</div>';
		document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML +text ;
		document.getElementById("texto").id= name;
		
	}
	else
	{
		i++;
		var name = "texto" + i;
		aux = name;
		alert("Un campo esta vacio.");
		//alert(name);
       document.getElementById("imprime").innerHTML = document.getElementById("imprime").innerHTML +error ;
        document.getElementById("texto").id= name;
		
	}

}


function elimina(){
	var bot = document.getElementById("Eliminar");
	var div = bot.parentNode.id;
	var res = div.substring(5,div.length);

alert(div);
alert(res);
//div.remove();

//document.getElementById("Eliminar").parentNode.remove();
}

/*var pDoc = document.getElementById("myParagraph");
var parentDiv = ??????????   

<div id="test>
    <p id="myParagraph">Testing</p>
</div>

parentDiv = pDoc.parentNode;*/