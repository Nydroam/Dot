var mouseX = 0;
var mouseY = 0;
var followid;
var followidVert;
var currrad = dot.dotyrad;
var currypos = dot.y;
var currxrad = dot.dotxrad;
var sleeping = false;
var movingVert = false;
var randID;
function setMousePosition(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}
var dotSleep = function(){
	console.log("sleeeep");
	if(animLocks.bodyAnimating){
		return;
	}
	animLocks.bodyAnimating = true;
	closeEyes(false,true);
	sleeping = true;
	var trig = {
		trigger:false
	};
	
	sleepid = setInterval(function(){
		console.log(currrad-20);
		console.log(dot.dotyrad);
		animateDot(0,dot.x,1,currypos+40,-1,currxrad-30,-1,currrad-40,trig);},30);
	trigger = setInterval(function(){
		if(trig.trigger){
			clearInterval(sleepid);
			clearInterval(trigger);
			trig.trigger = false;
			sleepid = setInterval(function(){animateDot(0,dot.x,-1,currypos,1,currxrad,1,currrad,trig);},30);
			trigger = setInterval(function(){
				if(trig.trigger){
					clearInterval(sleepid);
					clearInterval(trigger);
					animLocks.bodyAnimating = false;
					dotSleep();
				}
			},20);

		}
	},20);
}
var dotFollow = function(){
	if(animLocks.bodyAnimating){
		return;
	}

	animLocks.bodyAnimating = true;
	clearInterval(randID);
	clearInterval(followid);
	var xchange;
	var ychange;
	if (mouseX > dot.x + 5){
		xchange = 2;
	}
	else if (mouseX < dot.x - 5 ){
		xchange = -2;
	}
	else{
		xchange = 0;
		animLocks.bodyAnimating = false;
		clearInterval(followid);
		return;
	}

	followid = setInterval(function(){
		if (mouseX > dot.x + 5){
		xchange = 2;
	}
	else if (mouseX < dot.x - 5){
		xchange = -2;
	}
	else{
		xchange = 0;
		animLocks.bodyAnimating = false;
		clearInterval(followid);
		return;
	}animateDot(xchange,mouseX,0,dot.y,0,dot.dotxrad,0,dot.dotyrad,false)},10);
	moveVert(true);
}

function moveVert(){
	if(animLocks.bodyAnimating){
		if(movingVert){
			return;
		}
		movingVert = true;
		var trig = {
			trigger:false
		}
	followidVert = setInterval(function(){animateDot(0,dot.x,1,currypos+10,0,dot.dotxrad,-1,currrad-10,trig)},30);
	var trigger = setInterval(function(){
			if(trig.trigger){
				clearInterval(followidVert);
				clearInterval(trigger);
				trig.trigger = false;
				followidVert = setInterval(function(){animateDot(0,dot.x,-1,currypos,0,dot.dotxrad,1,currrad,trig)},30);
				trigger = setInterval(function(){
					if(trig.trigger){
					clearInterval(trigger);
					clearInterval(followidVert);
					trig.trigger = false;
					movingVert = false;
				if(animLocks.bodyAnimating){
					moveVert();
				}
				}
				},30);
			};
		},30);

	
	}
}
function randMove(){
	if(animLocks.bodyAnimating){
		return;
	}
	animLocks.bodyAnimating = true;
	var randWidth = Math.round(Math.random()*(window.innerWidth - (4*dot.dotxrad)) + 2*dot.dotxrad);
	console.log(randWidth);
	var xchange;
	if (randWidth > dot.x + 5){
		xchange = 1;
	}
	else if (randWidth < dot.x - 5){
		xchange = -1;
	}
	else{
		animLocks.bodyAnimating = false;
		xchange = 0;
	}
	
	randID = setInterval(function(){animateDot(xchange,randWidth,0,dot.y,0,dot.dotxrad,0,dot.dotyrad,trigger)},10);

	trigger = {
		trigger:false
	}
	end = setInterval(function(){if (trigger.trigger){
		clearInterval(randID);
		animLocks.bodyAnimating = false;
	}
},10);
	moveVert();
}
var followMouse = function(e){
	setMousePosition(e);
	dotFollow();
}
