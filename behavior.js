
var moveId;
var blinkId;
var currBehaviorE = 5;
var currBehaviorA = 5;
var resetterA;
var resetterE = {
	0:function(){
	},
	1: function(){
		vimg.removeEventListener("mousemove",followMouse);
	},
	5: function(){
		clearInterval(moveId);
		clearInterval(blinkId);
		dot.shape.removeEventListener("click",blinkOrWink);
		vimg.removeEventListener("mousemove",eyeFollowMouse);
	}
}
var resetterA = {
	0:function(){
		clearInterval(transHandler);
		randColor = false;
	},
	1:function(){},
	5: function(){}
}
var updateBehavior = function(){
	//Clear intervals
	if( energy <= 0){
	resetterE[currBehaviorE]();
		currBehaviorE = 0;
		//Sleep 0
	}
	else if (energy > 30){
	resetterE[currBehaviorE]();
		currBehaviorE = 1;
		vimg.addEventListener("mousemove",followMouse);
		//Energetic Behavior 1
	}
	if(affection > 20){
		resetterA[currBehaviorA]();
		currBehaviorA=0;
		randColor = true;
		changeColor(dot.shape,0,255,0);
		//Happy Behavior 0
	}
	else if (affection < 0){
			resetterA[currBehaviorA]();
		currBehaviorA = 1;
		changeColor(dot.shape,255,0,0);
		//Angry Behavior 1
	}
	if(currBehaviorA == 5 && currBehaviorE == 5){
		resetterA[currBehaviorA]();
		resetterE[currBehaviorE]();
		currBehaviorE = 5;
		currBehaviorA = 5;
		basicBehavior();
	}
}
var basicBehavior  = function(){
	moveId = setInterval(function(){randMove()},5000);
	blinkId = setInterval(function(){blink()},3000);
	dot.shape.addEventListener("click",blinkOrWink);
	vimg.addEventListener("mousemove",eyeFollowMouse);
}
updateBehavior();
setInterval(function(){affection=affection-1;energy=energy-1;updateBehavior()},600);