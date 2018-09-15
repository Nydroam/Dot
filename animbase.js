var animLocks = {
	eyesAnimating:false,
	bodyAnimating:false
}
var animateLeftEye = function(xchange,xtarget,ychange,ytarget,rxchange,rxtarget,rychange,rytarget, trigger){
	var done = true;
	if(dot.LEyOffset != ytarget){
		dot.LEyOffset = dot.LEyOffset + ychange;
		done = false;
	}
	if(dot.LExOffset != xtarget){
		dot.LExOffset = dot.LExOffset + xchange;
		done = false;
	}
	if(dot.LEyradius != rytarget){
		dot.LEyradius = dot.LEyradius + rychange;
		done = false;
	}
	if(dot.LExradius != rxtarget){
		dot.LExradius = dot.LExradius + rxchange;
		done = false;
	}
	if(done){
		trigger.trigger = true;
	}
	dot.draw();
}
var animateRightEye = function(xchange,xtarget,ychange,ytarget,rxchange,rxtarget,rychange,rytarget, trigger){
	var done = true;
	if(dot.REyOffset != ytarget){
		dot.REyOffset = dot.REyOffset + ychange;
		done = false;
	}
	if(dot.RExOffset != xtarget){
		dot.RExOffset = dot.RExOffset + xchange;
		done = false;
	}
	if(dot.REyradius != rytarget){
		dot.REyradius = dot.REyradius + rychange;
		done = false;
	}
	if(dot.RExradius != rxtarget){
		dot.RExradius = dot.RExradius + rxchange;
		done = false;
	}
	if(done){
		console.log("done");
		trigger.trigger = true;
	}
	dot.draw();
}