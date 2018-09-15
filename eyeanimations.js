var blink = function(){
	if(!animLocks.eyesAnimating){
		animLocks.eyesAnimating = true;
	var leftTrigger = {
		trigger:false
	};
	var rightTrigger = {
		trigger:false
	};
	var currypos = dot.LEyOffset;
	var animlid = setInterval(function(){animateLeftEye(0,dot.LExOffset,1,currypos+29,0,dot.LExradius,-1,1, leftTrigger)},8);
	var animrid = setInterval(function(){animateRightEye(0,dot.RExOffset,1,currypos+29,0,dot.RExradius,-1,1, rightTrigger)},8);
	var triggerl = setInterval(function(){
		if(leftTrigger.trigger){
			clearInterval(triggerl);
			clearInterval(animlid);
			leftTrigger.trigger = false;
			animlid = setInterval(function(){animateLeftEye(0,dot.LExOffset,-1,currypos,0,dot.LExradius,1,30,leftTrigger)},8);
			triggerl = setInterval(function(){
		if(leftTrigger.trigger){
			
			clearInterval(triggerl);
			clearInterval(animlid);
			animLocks.eyesAnimating = false;
		}
	},25);
		}
	},25);
	var triggerr = setInterval(function(){
		if(rightTrigger.trigger){
			clearInterval(triggerr);
			clearInterval(animrid);
			rightTrigger.trigger = false;
			animrid = setInterval(function(){animateRightEye(0,dot.RExOffset,-1,currypos,0,dot.RExradius,1,30,rightTrigger)},8);
			triggerr = setInterval(function(){
		if(rightTrigger.trigger){
			clearInterval(triggerr);
			clearInterval(animrid);
		}
	},25);
		}
	},25);
	
	}
	
}

dot.shape.addEventListener("click",blink);