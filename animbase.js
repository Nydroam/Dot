
var animateDot = function(xchange,xtarget,ychange,ytarget,rxchange,rxtarget,rychange,rytarget, trigger){
	var done = true;
	if(dot.y != ytarget && (dot.y+ychange + dot.dotyrad) <= window.innerHeight && (dot.y+ychange - dot.dotyrad) >= 0){
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
	if(dot.LEyOffset != ytarget && ychange != 0){
		dot.LEyOffset = dot.LEyOffset + ychange;
		done = false;
	}
	if(dot.LExOffset != xtarget && xchange != 0){
		dot.LExOffset = dot.LExOffset + xchange;
		done = false;
	}
	if(dot.LEyradius != rytarget && rychange != 0){
		dot.LEyradius = dot.LEyradius + rychange;
		done = false;
	}
	if(dot.LExradius != rxtarget && rxchange != 0){
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
	if(dot.REyOffset != ytarget && ychange != 0){
		dot.REyOffset = dot.REyOffset + ychange;
		done = false;
	}
	if(dot.RExOffset != xtarget && xchange != 0){
		dot.RExOffset = dot.RExOffset + xchange;
		done = false;
	}
	if(dot.REyradius != rytarget && rychange != 0){
		dot.REyradius = dot.REyradius + rychange;
		done = false;
	}
	if(dot.RExradius != rxtarget && rxchange != 0){
		dot.RExradius = dot.RExradius + rxchange;
		done = false;
	}
	if(done){
		trigger.trigger = true;
	}
	dot.draw();
}