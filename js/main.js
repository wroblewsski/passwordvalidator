const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'super hasło';
		p.style.color = 'lime';
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = 'dobre hasło';
		p.style.color = 'gold';
	} else {
		p.textContent = 'masz słabe hasło';
		p.style.color = 'tomato';
	}
};

pass.addEventListener('keyup', showMsg);
