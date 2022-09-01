const header = document.querySelector('nav');
const headerImg = document.querySelector('nav img');

window.addEventListener('scroll', () => {
	header.classList.toggle('bg-nav', window.scrollY > 0);
	headerImg.classList.toggle('display-navImg', window.scrollY > 0);
});

const galleryImg = document.querySelectorAll('.gallery-img').forEach((e) => {
	e.onclick = () => {
		document.querySelector('.popUp').style.visibility = 'visible';
		document.querySelector('.popUp').style.opacity = '1';
		document.querySelector('.popUp img').src = e.getAttribute('src');
	};
});

document.querySelector('.popUp span').onclick = () => {
	document.querySelector('.popUp').style.visibility = 'hidden';
	document.querySelector('.popUp').style.opacity = '0';
};

//? Validar datos para adoptar gato
const ADOPTFULLNAME = document.getElementById('adoptFullName');
const ADOPTEMAIL = document.getElementById('adoptEmail');
const ADOPTNUMBER = document.getElementById('adoptNumber');
//* form adopt
const ADOPTFORM = document.querySelector('.adopt-form');

ADOPTFULLNAME.addEventListener('focusout', () => {
	if (ADOPTFULLNAME.value == '' || ADOPTFULLNAME.value == 0 || !isNaN(ADOPTFULLNAME.value)) {
		ADOPTFULLNAME.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Los datos ingresados son numericos o son incorrectos, por favor, intenta de nuevo.'
		})
	} else {
		ADOPTFULLNAME.style.borderColor = 'green';
	}
});

ADOPTEMAIL.addEventListener('focusout', () => {
	if (ADOPTEMAIL.value == '' || ADOPTEMAIL.value == 0 || !isNaN(ADOPTEMAIL.value) || !/\S+@\S+\.\S+/.test(ADOPTEMAIL)) {
		ADOPTEMAIL.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Los datos ingresados son numericos o son incorrectos, por favor, intenta de nuevo.'
		})
	} else {
		ADOPTEMAIL.style.borderColor = 'green';
	}
});

ADOPTNUMBER.addEventListener('focusout', () => {
	if (ADOPTNUMBER.value == '' || ADOPTNUMBER.value == 0 || isNaN(ADOPTNUMBER.value)) {
		ADOPTNUMBER.style.borderColor = 'red';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Los datos ingresados no son numericos o son incorrectos, por favor, intenta de nuevo.'
		})
	} else {
		ADOPTNUMBER.style.borderColor = 'green';
	}
});

ADOPTFORM.addEventListener('submit', (e) => {
	e.preventDefault();
	let btnForm = document.querySelector('form button');
	btnForm.style.borderColor = 'green';
	btnForm.style.color = 'green'
	Swal.fire({
		icon: 'info',
		title: 'Información',
		text: 'Tus datos se han enviado correctamente'
	})
});
