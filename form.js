/**
 * Created by nadamo on 2017. 07. 21..
 */
let solution = document.getElementById('solution');
let form     = document.createElement('form');
let result = document.createElement('h2');
creteButton('Add a new input', () => createInput(i++));
creteButton('Calculate', calculate);
for (var i = 0; i < 5; i++) {
	createInput(i);
}
solution.appendChild(form);
solution.appendChild(result);

function createInput(i) {
	console.log();
	let input         = document.createElement('input');
	let label         = document.createElement('label');
	let div           = document.createElement('div');
	label.textContent = 'Number ' + i;
	input.type        = 'number';
	input.value       = Math.ceil(Math.random()*100);
	div.appendChild(label);
	div.appendChild(input);
	form.appendChild(div);
}

function creteButton(label, eventHandler) {
	let button         = document.createElement('button');
	button.type        = 'button';
	button.textContent = label;
	button.addEventListener('click', eventHandler);
	form.appendChild(button);
}

function calculate() {
	console.log('calculate');
	let inputs = document.querySelectorAll('input[type=number]');
	let sum = Array.prototype.map.call(inputs, (item) => (parseInt(item.value)))
				   .map((value, index, array) => (value + (index - 1 >= 0 ? array[index-1] : 0) + (index + 1 < array.length ? array[index + 1]:0 )))
		.reduce((sum, value) => sum + value,0);
	result.textContent = sum
}