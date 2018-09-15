function retrieve() {
	//retrieve local storage if it exists
	if (localStorage.rest && localStorage.time && 
		localStorage.affection) {
		var old_rest = localStorage.rest;
		var old_time = localStorage.time;
		var old_affe = localStorage.affection;
		var old_hour = localStorage.hour;
		var old_minute = localStorage.minutes;
		updateStatus(old_rest,old_time,old_affe,
			old_hour,old_minute);
	}
}

function updateStatus(o_rest,o_time,o_affection,o_hours,o_minutes) {
	//adjust rest and affection according to timelapse
	var date2 = new Date();
	console.log(date2);
	var timelapse = Math.round((date2.getTime() - o_time)/60000) % 1440;
	
	console.log(timelapse);
	
	var o_hours = o_hours;
	var o_minutes = o_minutes;
	date1_t = parseInt(o_hours * 60) + parseInt(o_minutes);
	date2_t = parseInt(date2.getUTCHours() * 60) + parseInt(date2.getUTCMinutes());
	console.log(date1_t);
	console.log(date2_t);
	var timeAsleep = 0;
	var timeAwake = 0;

	if (date2_t < date1_t) {
		date2_t += 1440;
		wakeTime += 1440;
	}

	if (date1_t < sleepTime) {
		if (date2_t > wakeTime) {
			timeAwake = sleepTime - date1_t + date2_t - wakeTime;
		} else { //date2_t < wakeTime
			timeAwake = wakeTime - date1_t;
		}
		timeAsleep = timelapse - timeAwake;
	} else { //date1_t > wakeTime
		if (date2_t > wakeTime) {
			timeAsleep = date2_t - wakeTime;
		} else { //date2_t < wakeTime
			timeAsleep = wakeTime - date2_t + date1_t - wakeTime
		}
		timeAwake = timelapse - timeAsleep;
	}
	console.log(timeAsleep);
	console.log(timeAwake);
}

function store() {
	//to be called when webpage is closed
	if (typeof(Storage) !== "undefined") {
	    // Code for localStorage/sessionStorage.
	    localStorage.setItem("rest",rest);
	    localStorage.setItem("time",time);
	    localStorage.setItem("affection",affection);
	    localStorage.setItem("hour",hour);
	    localStorage.setItem("minutes",minutes);
	} else {
	    // Sorry! No Web Storage support..
	}
}
var date = new Date();
date.setTime(date.getTime() - 64800000);
console.log(date);
var rest = 960;
var time = date.getTime();
var hour = date.getUTCHours();
var minutes = date.getUTCMinutes();
var affection = 100;
var sleepTime = 1320; //22
var wakeTime = 360; //6
store();
retrieve();