const counterOutput = document.getElementById("counter");
const down = document.getElementById("down");
const up = document.getElementById("up");
const reset = document.getElementById("reset");
const step = document.getElementById("step");
let counter = 0;

function adjustCounter() {
	adjustColor();
	counterOutput.innerHTML = counter;
}

function adjustColor() {
	if (counter === 0) {
		counterOutput.style.color = "black";
	} else if (counter < 0) {
		counterOutput.style.color = "#e90056";
	} else if (counter > 0) {
		counterOutput.style.color = "#009a60";
	};
}

function clickUp() {
	counter = counter + parseInt(step.value);
	adjustCounter();
}

function clickDown() {
	counter = counter - parseInt(step.value);
	adjustCounter();
}

function resetCounter() {
	counter = 0;
	adjustCounter();
}

adjustCounter();
up.addEventListener("click", clickUp);
down.addEventListener("click", clickDown);
reset.addEventListener("click", resetCounter);


// met hoeveel stappen verhogen
