var mouseX = 0;
var mouseY = 0;
var followid;
var followidVert;
function setMousePosition(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}

var dotFollow = function(){
	clearInterval(followid);
	var xchange;
	var ychange;
	if (mouseX > dot.x){
		xchange = 1;
	}
	else if (mouseX < dot.x){
		xchange = -1;
	}
	else{
		xchange = 0;
	}
	/*if (mouseY > dot.y){
		ychange = 1;
	}
	else if (mouseY < dot.y){
		ychange = -1;
	}
	else{
		ychange = 0;
	}*/
	followid = setInterval(function(){animateDot(xchange,mouseX,0,dot.y,0,dot.dotxrad,0,dot.dotyrad,false)},10);
}
var followMouse = function(e){
	setMousePosition(e);
	dotFollow();
}
vimg.addEventListener("mousemove",followMouse,false);
