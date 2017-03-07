function draw (){
	var base = parseInt(document.getElementById("base").value);
	var res = '∆';
	for(var i = 0; i < base; i++ ){
		
		var lambda = res;
	document.getElementById("board").innerHTML = lambda+"<br>";
		res = res + '∆';
		
		for (var j = base - 1; j > 0; j--) {
			document.getElementById("board").innerHTML = lambda+"<br>";
		}

	
	}
}