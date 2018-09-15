var vimg = document.getElementById("vimg");
var bg = document.getElementById("background");
function setEllipse(shape,cx,cy,rx,ry,fill){
	shape.setAttribute("cx",cx);
	shape.setAttribute("cy",cy);
	shape.setAttribute("rx",rx);
	shape.setAttribute("ry",ry);
	shape.setAttribute("fill",fill)
}

var dot = {
	x: window.innerWidth/2,
	y: window.innerHeight/2,
	LExOffset: -50,
	LExradius: 15,
	LEyradius: 30,
	LEyOffset: -70,
	RExOffset: 50,
	RExradius: 15,
	REyradius: 30,
	REyOffset: -70,
	shape: document.createElementNS("http://www.w3.org/2000/svg","ellipse"),
	leftEye: document.createElementNS("http://www.w3.org/2000/svg","ellipse"),
	rightEye: document.createElementNS("http://www.w3.org/2000/svg","ellipse"),
	draw: function(){
		setEllipse(this.shape,this.x,this.y,200,170,"blue");
		setEllipse(this.leftEye,this.x + this.LExOffset, this.y + this.LEyOffset,this.LExradius,this.LEyradius,"black");
		setEllipse(this.rightEye,this.x + this.RExOffset, this.y + this.REyOffset,this.RExradius,this.REyradius,"black");
	}

}
vimg.appendChild(dot.shape);
vimg.appendChild(dot.leftEye);
vimg.appendChild(dot.rightEye);
var animateLeftEye = function(xchange,xtarget,ychange,ytarget,rxchange,rxtarget,rychange,rytarget){
	if(dot.LEyOffset != ytarget){
		dot.LEyOffset = dot.LEyOffset + ychange;
	}
	if(dot.LExOffset != xtarget){
		dot.LExOffset = dot.LExOffset + xchange;
	}
	if(dot.LEyradius != rytarget){
		dot.LEyradius = dot.LEyradius + rychange;
	}
	if(dot.LExradius != rxtarget){
		dot.LExradius = dot.LExradius + rxchange;
	}
	dot.draw();
}
var animateRightEye = function(xchange,xtarget,ychange,ytarget,rxchange,rxtarget,rychange,rytarget){
	if(dot.REyOffset != ytarget){
		dot.REyOffset = dot.REyOffset + ychange;
	}
	if(dot.RExOffset != xtarget){
		dot.RExOffset = dot.RExOffset + xchange;
	}
	if(dot.REyradius != rytarget){
		dot.REyradius = dot.REyradius + rychange;
	}
	if(dot.RExradius != rxtarget){
		dot.RExradius = dot.RExradius + rxchange;
	}
	dot.draw();
}
var blink = function(){
	console.log("blingking");
	var currypos = dot.LEyOffset;
	var animlid = setInterval(function(){animateLeftEye(0,dot.LExOffset,1,currypos+29,0,dot.LExradius,-1,1)},25);
	var animrid = setInterval(function(){animateRightEye(0,dot.RExOffset,1,currypos+29,0,dot.RExradius,-1,1)},25);
	
	clearInterval(animlid);
	clearInterval(animrid);
	currypos = dot.LEyOffset;
	animlid = setInterval(function(){animateLeftEye(0,dot.LExOffset,-1,currypos-29,0,dot.LExradius,1,30)},25);
	animrid = setInterval(function(){animateRightEye(0,dot.RExOffset,-1,currypos-29,0,dot.RExradius,1,30)},25);
	while(dot.Leyradius < 30){
	}
	clearInterval(animlid);
	clearInterval(animrid);
}
function resize(){
	vimg.setAttribute("height","100%");
	vimg.setAttribute("width","100%");
	dot.draw();
}
dot.shape.addEventListener("click",blink);
resize();
window.addEventListener("resize", resize);