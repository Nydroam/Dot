
var OLExOffset = dot.LExOffset;
var OLEyOffset = dot.LEyOffset;
var ORExOffset = dot.RExOffset;
var OREyOffset = dot.REyOffset;
var moving1 = false;


var eyeDart = function(x1,y1,x2,y2){
	if(animLocks.eyesAnimating){
		return;
	}
	animLocks.eyesAnimating = true;
	var LExDiff = x1 - OLExOffset;
	var LEyDiff = y1 - OLEyOffset;

	var LEdist = Math.sqrt(LExDiff * LExDiff + LEyDiff * LEyDiff);
	if(LEdist == 0){
		LExDiff = 0;
		LEyDiff = 0;
	}
	else{
	LExDiff = Math.round(LExDiff/LEdist)*5;
	LEyDiff = Math.round(LEyDiff/LEdist)*5;
}

	var RExDiff = x2 - ORExOffset;
	var REyDiff = y2 - OREyOffset;
	var REdist = Math.sqrt(RExDiff * RExDiff + REyDiff * REyDiff);

	if(REdist == 0){
	RExDiff = 0;
	REyDiff = 0;
	}
	else{
	RExDiff = Math.round(RExDiff/REdist)*5;
	REyDiff = Math.round(REyDiff/REdist)*5;
	var i;

	var leftTrigger = {
		trigger:false
	};
	var rightTrigger = {
		trigger:false
	};
	var animlid = setInterval(function(){animateLeftEye(Math.round(LExDiff/5),OLExOffset + LExDiff,Math.round(LEyDiff/5),OLEyOffset + LEyDiff,0,dot.LExradius,0,dot.LEyradius, leftTrigger)},8);
	var animrid = setInterval(function(){animateRightEye(Math.round(RExDiff/5),ORExOffset + RExDiff,Math.round(REyDiff/5),OREyOffset + REyDiff,0,dot.RExradius,0,dot.REyradius, rightTrigger)},8);
	var triggerl = setInterval(function(){
		if(leftTrigger.trigger && rightTrigger.trigger){
			clearInterval(triggerl);
			clearInterval(animlid);
			clearInterval(animrid);
			animLocks.eyesAnimating = false;
		}
	},20);
	}
}

var closeEyes= function( wink ){
	var rand = Math.random()*2;
	if(!animLocks.eyesAnimating){
		animLocks.eyesAnimating = true;
	var leftTrigger = {
		trigger:false
	};
	var rightTrigger = {
		trigger:false
	};
	var currypos = dot.LEyOffset;
	if(!wink || rand <1){
	var animlid = setInterval(function(){animateLeftEye(0,dot.LExOffset,1,currypos+29,0,dot.LExradius,-1,1, leftTrigger)},8);
	var triggerl = setInterval(function(){
		if(leftTrigger.trigger){
			clearInterval(triggerl);
			clearInterval(animlid);
			leftTrigger.trigger = false;
			animlid = setInterval(function(){if(wink){
				setTimeout(function(){animateLeftEye(0,dot.LExOffset,-1,currypos,0,dot.LExradius,1,30,leftTrigger)},100)
			}
			else{
				animateLeftEye(0,dot.LExOffset,-1,currypos,0,dot.LExradius,1,30,leftTrigger)
			}},8);
			triggerl = setInterval(function(){
		if(leftTrigger.trigger){
			
			clearInterval(triggerl);
			clearInterval(animlid);
			animLocks.eyesAnimating = false;
		}
	},25);
		}
	},25);
	}
	if(!wink || rand >= 1){
	var animrid = setInterval(function(){animateRightEye(0,dot.RExOffset,1,currypos+29,0,dot.RExradius,-1,1, rightTrigger)},8);
	var triggerr = setInterval(function(){
		if(rightTrigger.trigger){
			clearInterval(triggerr);
			clearInterval(animrid);
			leftTrigger.trigger = false;
			rightTrigger.trigger = false;
			animrid = setInterval(function(){if(wink){
				setTimeout(function(){animateRightEye(0,dot.RExOffset,-1,currypos,0,dot.RExradius,1,30,rightTrigger)},200)
			}
			else{
				animateRightEye(0,dot.RExOffset,-1,currypos,0,dot.RExradius,1,30,rightTrigger)
			}},8);
			triggerr = setInterval(function(){
		if(rightTrigger.trigger){
			clearInterval(triggerr);
			clearInterval(animrid);
			animLocks.eyesAnimating = false;
		}
	},25);
		}
	},25);
	}
	
	
	
	}
	
}
var mouseX;
var mouseY;
function setMousePosition(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function blink(){
	closeEyes(false);
}
function wink(){
	closeEyes(true);
}

var eyeFollowMouse = function(e){
	setMousePosition(e);
	eyeDart(mouseX-(dot.x +OLExOffset),mouseY-(dot.y + OLEyOffset),mouseX-(dot.x + ORExOffset),mouseY-(dot.y + OREyOffset));
}

var blinkOrWink = function(){
	if(animLocks.eyesAnimating){
		return;
	}
	if (Math.random()<0.8){
		blink();
	}
	else{
		wink();
	}
}