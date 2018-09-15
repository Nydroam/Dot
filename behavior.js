
var moveId;
var blinkId;
var winkId;
var BehaviorChart = [
	['R','R','C','C'],
	['TR','ER','EWR','WC'],
	['TR','ER','EWR','WC'],
	['T','ER','EWR','WR'],
	['S','S','S','S']
]
var cleanBehavior = function(){
	console.log("clean");
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
		console.log("S?");
		sleeping = true;
		dotSleep();
	}
	else{
		//TBD
	}
}
var updateBehavior = function(){
	console.log(affection);
	console.log(energy);
	cleanBehavior();
	var Yind = Math.floor(affection/25);
	var Xind = Math.round(energy/24);
	console.log(Xind);
	console.log(Yind);
	var thingstoDo = BehaviorChart[4-Xind][Yind];
	var i = 0;
	for(i=0;i < thingstoDo.length;i++) {
		var c = thingstoDo.charAt(i);
		applyBehavior(c);
	}
	//Change Color based on Affection
	if (Yind <= 0){
		changeColor(dot.shape,255,0,0);
	}
	else if (Yind == 1 || Yind == 2){
		changeColor(dot.shape,0,0,255);
	}
	else{
		changeColor(dot.shape,0,255,0);
	}
}

updateBehavior();
blinkId = setInterval(function(){blink();},3000);
dot.shape.addEventListener("mouseover",function(){if (affection < 100){affection+=1}});
setInterval(function(){if(energy >0){energy -= 1;}; if(affection >0){affection -= 1};updateBehavior()},1000);
setInterval(function(){if(energy <96 && sleeping){energy += 1}},200);