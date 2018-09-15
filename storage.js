function retrieve() {
	//retrieve local storage if it exists
	if (localStorage.rest !== "undefined" && 
		localStorage.time !== "undefined") {
		rest = Number(localStorage.rest);
		time = Number(localStorage.time);
		affe = Number(localStorage.affection);
		hour = Number(localStorage.hour);
		minutes = Number(localStorage.minutes);

		/*console.log(rest);
		console.log(time);
		console.log(affection);
		console.log(hour);
		console.log(minutes);*/
		updateStatus(rest,time,affe,
			hour,minutes);
	} else {
		if (typeof(Storage) !== "undefined") {
			date = new Date();
			rest = 960;
			time = date.getTime();
			hour = date.getHours();
			minutes = date.getMinutes();
			affection = 1000;

			localStorage.rest = rest;
		    localStorage.time = time;
		    localStorage.affection = affection;
		    localStorage.hour = hour;
		    localStorage.minutes = minutes;
		    console.log(localStorage.rest);
		}
	}
}

function updateStatus(o_rest,o_time,o_affection,o_hours,o_minutes) {
	//adjust rest and affection according to timelapse
	var date2 = new Date();
	var timelapse = Math.round((date2.getTime() - o_time)/60000) % 1440;
	var o_hours = o_hours;
	var o_minutes = o_minutes;
	date1_t = parseInt(o_hours * 60) + parseInt(o_minutes);
	date2_t = parseInt(date2.getHours() * 60) + parseInt(date2.getMinutes());
	var timeAsleep = 0;
	var timeAwake = 0;

	if (date1_t < wakeTime) {
		if (date2_t > wakeTime) {
			if (date2_t < sleepTime) {
				timeAwake = date2_t - wakeTime;
			} else { //date2_t > sleepTime
				timeAwake = sleepTime - wakeTime;
			}
		} else { //date2_t < wakeTime
			if (date2_t > date1_t) {
				//timeAwake = 0
			} else { //date2_t < date1_t
				timeAwake = sleepTime - wakeTime;
			}
		}
	} else { //date1_t > wakeTime
		if (date1_t < sleepTime) {
			if (date2_t > wakeTime) {
				if (date2_t > sleepTime) {
					timeAwake = sleepTime - date1_t;
				} else { //date2_t < sleepTime
					if (date2_t > date1_t) {
						timeAwake = date2_t - date1_t;
					} else { //date2_t < date1_t
						timeAwake = sleepTime - date1_t + date2_t - wakeTime;
					}
				}
			} else { //date2_t < wakeTime
				timeAwake = date1_t - wakeTime;
			} 
		}else { // date1_t > sleepTime
			if (date2_t > wakeTime) {
				if (date2_t > sleepTime) {
					if (date2_t > date1_t) {
						//timeAwake = 0
					} else { //date2_t < date1_t
						timeAwake = sleepTime - wakeTime;
					}
				} else { //date2_t < sleepTime
					timeAwake = date2_t - wakeTime;
				}
			} else { //date2_t < wakeTime;
				//timeAwake = 0;
			}
		}
	}
	timeAsleep = timelapse - timeAwake;
	//affection = affection - timeAwake;
	//rest = rest + 2 * timeAsleep - timeAwake;
}

window.onbeforeunload = function store() {
	//to be called when webpage is closed
	if (typeof(Storage) !== "undefined") {
	    // Code for localStorage/sessionStorage.
	    localStorage.rest = rest;
	    localStorage.time = time;
	    localStorage.affection = affection;
	    localStorage.hour = hour;
	    localStorage.minutes = minutes;
	} else {
	    // No Web Storage support
	}
}
console.log(localStorage.rest);
var date;
var rest;
var time;
var hour;
var minutes;
var affection;
var sleepTime = 1320; //22
var wakeTime = 360; //6
retrieve();
/*console.log(date);
console.log(rest);
console.log(time);
console.log(affection);*/
