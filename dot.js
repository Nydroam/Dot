var vimg = document.getElementById("vimg");
var bg = document.getElementById("background");
/*var energy = rest/10;
localStorage.affection = 50;
console.log(localStorage.affection);
localStorage.rest = energy;
setInterval(function() {
	localStorage.affection = 50;
	localStorage.rest = energy;
},60000);

affection = localStorage.affection;*/

affection = 50;
energy = 20;
var animLocks = {
	eyesAnimating:false,
	bodyAnimating:false
}
function setEllipse(shape,cx,cy,rx,ry,fill){
	shape.setAttribute("cx",cx);
	shape.setAttribute("cy",cy);
	shape.setAttribute("rx",rx);
	shape.setAttribute("ry",ry);
	shape.setAttribute("fill",fill)
}

var dot = {
	x: window.innerWidth/2,
	y: window.innerHeight/4 * 3,
	dotxrad: 200,
	dotyrad: 170,
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
	leftShine : document.createElementNS("http://www.w3.org/2000/svg","ellipse"),
	rightShine : document.createElementNS("http://www.w3.org/2000/svg","ellipse"),
	draw: function(){
		
		setEllipse(this.shape,this.x,this.y,this.dotxrad,this.dotyrad,"blue");
		setEllipse(this.leftEye,this.x + this.LExOffset, this.y + this.LEyOffset,this.LExradius,this.LEyradius,"black");
		setEllipse(this.leftShine,this.x + this.LExOffset + this.LExradius/2, this.y + this.LEyOffset - this.LEyradius/4,this.LExradius/3,this.LEyradius/3,"white");
		setEllipse(this.rightEye,this.x + this.RExOffset, this.y + this.REyOffset,this.RExradius,this.REyradius,"black");
		setEllipse(this.rightShine,this.x + this.RExOffset + this.RExradius/2, this.y + this.REyOffset - this.REyradius/4,this.RExradius/3,this.REyradius/3,"white");
	}

}
vimg.appendChild(dot.shape);
vimg.appendChild(dot.leftEye);
vimg.appendChild(dot.rightEye);
vimg.appendChild(dot.leftShine);
vimg.appendChild(dot.rightShine);



function resize(){

	vimg.setAttribute("height","100%");
	vimg.setAttribute("width","100%");
	animLocks.bodyAnimating = false;
	dot.y = window.innerHeight - dot.dotyrad - 100;
	dot.draw();
	
	
}

resize();
window.addEventListener("resize", resize);
//affection = localStorage.affection;