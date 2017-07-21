/**
 * Created by nadamo on 2017. 07. 21..
 */
document.getElementById('btnHint').addEventListener('click', (event) => {
	document.getElementById('hints').className = 'shown';
	event.target.className = 'hidden';
});
document.getElementById('btnSolution').addEventListener('click', (event) => {
	document.getElementById('solution').className = 'shown';
	event.target.className = 'hidden';
});