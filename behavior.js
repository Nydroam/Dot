
var moveId;
var blinkId;
var winkId;
var BehaviorChart = [
	['R','R','C','C'],
	['TR','ER','EW','WC'],
	['TR','ER','EW','WC'],
	['T','E','EW','W'],
	['S','S','S','S']
]
var cleanBehavior = function(){
	clearInterval(moveId);
	clearInterval(winkId);
	sleeping = false;
	vimg.removeEventListener("mousemove",followMouse);
	vimg.removeEventListener("mousemove",eyeFollowMouse);
}
var applyBehavior = function(c){
	if (c == 'R'){
		moveId = setInterval(function(){randMove()},5000);
	}
	else if (c == 'C'){
		vimg.addEventListener("mousemove",followMouse);
	}
	else if (c == 'E'){
		vimg.addEventListener("mousemove",eyeFollowMouse);
	}
	else if (c == 'W'){
		winkId = setInterval(function(){wink()},3000);
	}
	else if (c == 'S'){
		sleeping = true;
		dotSleep();
	}
	else{
		//TBD
	}
}
var updateBehavior = function(){
	console.log(affection);
	cleanBehavior();
	var Yind = Math.round(energy/19.5);
	var Xind = Math.round(affection/25);
	var thingstoDo = BehaviorChart[Xind][5-Yind];
	var i = 0;
	for(i=0;i < thingstoDo.length;i++) {
		var c = thingstoDo.charAt(i);
		applyBehavior(c);
	}
	//Change Color based on Affection
	if (Xind <= 1){
		changeColor(dot.shape,255,0,0);
	}
	else if (Xind == 3 || Xind == 12){
		changeColor(dot.shape,0,255,0);
	}
	else{
		changeColor(dot.shape,0,0,255);
	}
}

updateBehavior();
blinkId = setInterval(function(){blink();},6000);
dot.shape.addEventListener("mouseover",function(){affection+=1});
setInterval(function(){energy -= 1; if(affection >0){affection -= 1};updateBehavior()},600);