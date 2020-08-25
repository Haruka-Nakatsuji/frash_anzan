'use strict'

const startBtn = document.getElementById('start');
const startBtn_m = document.getElementById('start_m');
const answerBtn = document.getElementById('answer');
const number = document.getElementById('number');
const answer = document.getElementById('input');
const dex = document.getElementById('dex');
const ca = document.querySelector('.a');

let frashNumber = 0;

{
	startBtn.addEventListener('click', () => {
		startBtn.disabled = true;
		startBtn_m.disabled = true;
		document.querySelector('.mumble').textContent = '';
		let count = 0;
		let dexVal = Number(dex.value);
		ca.textContent = '';
		ca.classList.remove('correct');
		let changeNum = function() {
			let n = Math.floor(Math.random() * 89) + 10;
			number.textContent = n;
			frashNumber += n;
			count += 1;
			console.log(frashNumber);
			let timeoutId = setTimeout(changeNum, dexVal);

			if(count === 5) {
				clearTimeout(timeoutId);
			}
		}
		changeNum();
	});

	startBtn_m.addEventListener('click', () => {
		startBtn.disabled = true;
		startBtn_m.disabled = true;
		document.querySelector('.mumble').textContent = '';
		let count = 0;
		let dexVal = Number(dex.value);
		ca.textContent = '';
		ca.classList.remove('correct');
		let changeNum = function() {
			let n = Math.floor(Math.random() * 899) + 100;
			number.textContent = n;
			frashNumber += n;
			count += 1;
			console.log(frashNumber);
			let timeoutId = setTimeout(changeNum, dexVal);

			if(count === 10) {
				clearTimeout(timeoutId);
			}
		}
		changeNum();
	});

	answerBtn.addEventListener('click', () => {
		if (Number(answer.value) === frashNumber) {
			ca.textContent = '正解でございます！！！！！！！！';
			ca.classList.add('correct');
		} else {
			ca.textContent = '不正解';
			ca.classList.remove('correct');
			document.querySelector('.mumble').textContent = `ちなみに正解は${frashNumber}でした。`
		}
		frashNumber = 0;
		number.textContent = '0';
		startBtn.disabled = false;
		startBtn_m.disabled = false;
	});
}