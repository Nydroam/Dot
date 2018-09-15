var mouseX = 0;
var mouseY = 0;
var followid;
var followidVert;
var currrad = dot.dotyrad;
var currypos = dot.y;
var moving = false;
function setMousePosition(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}

var dotFollow = function(){
	clearInterval(followid);
	var xchange;
	var ychange;
	if (mouseX > dot.x + 50){
		xchange = 2;
	}
	else if (mouseX < dot.x - 50){
		xchange = -2;
	}
	else{
		xchange = 0;
		return;
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
	moveVert();
}

function moveVert(){
	if(!moving){
		moving = true;
		var trig = {
			trigger:false
		}
	followidVert = setInterval(function(){animateDot(0,dot.x,1,currypos+10,0,dot.dotxrad,-1,currrad-10,trig)},30);
	var trigger = setInterval(function(){
		console.log(trig.trigger);
			if(trig.trigger){
				clearInterval(followidVert);
				clearInterval(trigger);
				trig.trigger = false;
				followidVert = setInterval(function(){animateDot(0,dot.x,-1,currypos,0,dot.dotxrad,1,currrad,trig)},30);
				trigger = setInterval(function(){
					if(trig.trigger){
					clearInterval(trigger);
					clearInterval(followidVert);
					moving = false;
					trig.trigger = false;

					dotFollow();
				}
				},30);
			};
		},30);

	
	}
}

var followMouse = function(e){
	setMousePosition(e);
	dotFollow();
}
vimg.addEventListener("mousemove",followMouse,false);
