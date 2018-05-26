var a = 5;
var b = 4;
var c = 5;



function canBeTriangle(a, c, b) {

	if (a<b+c && c<a+b && b<a+c) {
		return true;
	}
	else{
		return false;
	}
}


console.log( canBeTriangle(a,b,c));