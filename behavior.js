

var updateBehavior = function(){
	if(affection > 20){

	}

}

setInterval(function(){randMove()},5000);
setInterval(function(){blink()},3000);
dot.shape.addEventListener("click",blinkOrWink);
//vimg.addEventListener("mousemove",followMouse);
vimg.addEventListener("mousemove",eyeFollowMouse);