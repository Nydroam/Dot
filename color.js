var fps				= 30;
var duration		= 3;
var transHandler = null;
var currentColor;
var targetColor;
var randColor = false;
function calculateDistance(colorArray1, colorArray2) {
	var distance = [];
	for (var i = 0; i < colorArray1.length; i++) {
		distance.push(Math.abs(colorArray1[i] - colorArray2[i]));
	}
	return distance;
}
function calculateIncrement(distanceArray, fps, duration) {
	var fps			= fps || 30;
	var duration	= duration || 1;
	var increment	= [];
	for (var i = 0; i < distanceArray.length; i++) {
		var incr = Math.abs(Math.floor(distanceArray[i] / (fps * duration)));
		//if (incr == 0) {
		//	incr = 1;
		//}
		increment.push(incr);
	}
	return increment;
}
function rgb2hex(colorArray) {
	var color = [];
	for (var i = 0; i < colorArray.length; i++) {
		var hex = colorArray[i].toString(16);
		if (hex.length < 2) { hex = "0" + hex; }
		color.push(hex);
	}
	return "#" + color.join("");
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function transition(shape) {
	// checking R
	if (currentColor[0] > targetColor[0]) {
		currentColor[0] -= increment[0];
		if (currentColor[0] <= targetColor[0]) {
			increment[0] = 0;
		}
	} else {
		currentColor[0] += increment[0];
		if (currentColor[0] >= targetColor[0]) {
			increment[0] = 0;
		}
	}
	
	// checking G
	if (currentColor[1] > targetColor[1]) {
		currentColor[1] -= increment[1];
		if (currentColor[1] <= targetColor[1]) {
			increment[1] = 0;
		}
	} else {
		currentColor[1] += increment[1];
		if (currentColor[1] >= targetColor[1]) {
			increment[1] = 0;
		}
	}
	
	// checking B
	if (currentColor[2] > targetColor[2]) {
		currentColor[2] -= increment[2];
		if (currentColor[2] <= targetColor[2]) {
			increment[2] = 0;
		}
	} else {
		currentColor[2] += increment[2];
		if (currentColor[2] >= targetColor[2]) {
			increment[2] = 0;
		}
	}
	
	// applying the new modified color
	shape.style.fill = rgb2hex(currentColor);
	if (increment[0] == 0 && increment[1] == 0 && increment[2] == 0) {
		if(randColor){
			changeColor(shape,Math.floor(Math.random() * (255)),Math.floor(Math.random() * (255)),Math.floor(Math.random() * (255)));
		}
		else{
		clearInterval(transHandler);
	}
	}
}
var changeColor = function(shape,r,g,b){
	targetColor = [r,g,b];
	currentColor = window.getComputedStyle(shape).fill;
	currentColor = currentColor.replace(/[^\d,]/g, '').split(',')
	clearInterval(transHandler);
	currentColor[0] = parseInt(currentColor[0]);
	currentColor[1] = parseInt(currentColor[1]);
	currentColor[2] = parseInt(currentColor[2]);
	
	distance	= calculateDistance(currentColor, targetColor);
	increment	= calculateIncrement(distance, fps, duration);
	transHandler = setInterval(function() {
		transition(shape);
	}, 1000/fps);
}
changeColor(dot.shape,255,0,255);