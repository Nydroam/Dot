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



function resize(){
	vimg.setAttribute("height","100%");
	vimg.setAttribute("width","100%");
	dot.draw();
}

resize();
window.addEventListener("resize", resize);