function draw (){
	var base = parseInt(document.getElementById("base").value);
	var res='';
	var arresp = new Array();
	for(var i = 0; i < base; i++ ){
		
	    var lambda = res;
	    arresp.push(lambda);
	    res += '∆';
	    for (var j = base - 1; j > base + 1; j--) {
			var epsi = lambda;
			llambda = epsi - '∆';
			arresp.push( epsi);
		}
	}
	document.getElementById("board").innerHTML = arresp.join(' <center> ');
}
