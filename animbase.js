var animLocks = {
	eyesAnimating:false,
	bodyAnimating:false
}
var animateDot = function(xchange,xtarget,ychange,ytarget,rxchange,rxtarget,rychange,rytarget, trigger){
	var done = true;
	ifif(dot.y != ytarget && (dot.y+ychange + dot.dotyrad) <= window.innerHeight && (dot.y+ychange - dot.dotyrad) >= 0){
		dot.y = dot.y + ychange;
		done = false;
	}
	if(dot.x != xtarget && (dot.x+xchange + dot.dotxrad) <= window.innerWidth && (dot.x+xchange - dot.dotxrad) >= 0){
		dot.x = dot.x + xchange;
		done = false;
	}
	if(dot.dotyrad != rytarget && (dot.y + dot.dotyrad+rychange) <= window.innerHeight && (dot.y - (dot.dotyrad+rychange)) >= 0){
		dot.dotyrad = dot.dotyrad + rychange;
		done = false;
	}
	if(dot.dotxrad != rxtarget && (dot.y + dot.dotxrad+rxchange) <= window.innerWidth && (dot.x - (dot.dotxrad+rxchange)) >= 0){
		dot.dotxrad = dot.dotxrad + rxchange;
		done = false;
	}
	if(done){
		trigger.trigger = true;
	}
	dot.draw();
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
		trigger.trigger = true;
	}
	dot.draw();
}