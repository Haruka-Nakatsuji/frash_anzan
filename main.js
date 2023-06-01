'use strict'

const startBtn = document.getElementById('start');
const hardModeStartBtn = document.getElementById('start_m');
const answerBtn = document.getElementById('answer');
const numberDisplayArea = document.getElementById('number');
const answerInputArea = document.getElementById('input');
const messageArea = document.querySelector(".message");

let resultFrashNumber = 0
let isAbleAnswer = false;

startBtn.addEventListener("click", () => {
	startFrash(99, 10);
	toggleDisable();
});

hardModeStartBtn.addEventListener("click", () => {
	startFrash(999, 100);
	toggleDisable();
});

answerBtn.addEventListener("click", ()=> {
	if (isAbleAnswer === false) {
		return;
	}

	if (isValidAnswer()) {
		messageArea.textContent = "正解！！！";
	} else {
		messageArea.textContent = "不正解w";
	}

	isAbleAnswer = false;
	numberDisplayArea.textContent = "0";
	resultFrashNumber = 0;
	toggleDisable();
});

function startFrash(max, min) {
	let repeatedCount = 0;
	const delay = Number(document.getElementById("dex").value);

	const repeat = setInterval(() => {
		addReasultFrashNumber(max, min);
		repeatedCount++;

		if (repeatedCount === 5) {
			clearInterval(repeat);
		}
	}, delay);

	isAbleAnswer = true;
}

function addReasultFrashNumber(max, min) {
	let frashNumber = Math.floor(Math.random() * (max - min)) + min;
	numberDisplayArea.textContent = frashNumber;
	resultFrashNumber += frashNumber;
}

function isValidAnswer() {
	let userInputAnswer = Number(answerInputArea.value);

	if (resultFrashNumber === userInputAnswer) {
		return true;
	}

	return false;
}

function toggleDisable() {
	answerBtn.classList.toggle("disabled");
}