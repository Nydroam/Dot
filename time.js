

function timeDifference(date1,date2) {
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	var difference_ms = date2_ms - date1_ms;
	var one_minute = 1000 * 60;
	return Math.round(difference_ms/one_minute); //time passed in minutes
}



function WriteCookie() {
	var date = new Date();

	document.cookie = "mood="+mood+";energy="+energy;
}

