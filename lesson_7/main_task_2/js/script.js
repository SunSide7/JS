var date = new Date();


let hours = date.getHours();
let minutes = date.getMinutes();
let secounds = date.getSeconds();

let calendarDecore = document.querySelector(".calendar");
let timeDecore = document.querySelector(".time");
let dataDecore = document.querySelector(".data");


function addZeroSymbol() {
	for (i = 0; i < 10; i++) {
		if (secounds == i) {
			secounds = "0" + i;
		};
		if (minutes == i) {
			minutes = "0" + i;
		};
		if (hours == i) {
			hours = "0" + i;
		};
	};
};

addZeroSymbol();

let time = (hours + ":" + minutes + ":" + secounds);

timeDecore.textContent = time;


// let timeId = setTimeout(timer, 2000);

function seconds() {
	parseInt(secounds);
	// timeDecore.textContent = time;
	timeDecore.textContent = (hours + ":" + minutes + ":" + secounds);
	secounds++;
	addZeroSymbol();
	if (secounds == 60) {
		secounds = 1;
		minutes++;
		addZeroSymbol();
		if (minutes == 60) {
			minutes = 1;
			hours++;
			addZeroSymbol();
			if (hours == 24) {
				hours = 0;
				addZeroSymbol();
			};
		};
	};
};

function timer() {
	seconds();
	timeId = setTimeout(timer, 1000);
}


timer();


