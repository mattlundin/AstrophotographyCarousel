const slides = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const totalSlides = slides.length;

let slidePosition = 0;

nextBtn.addEventListener('click', () => {
	nextSlide();
});

prevBtn.addEventListener('click', () => {
	previousSlide();
});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove('visible');
	}
	slides[slidePosition].classList.add('visible');
}

function nextSlide() {
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	updateSlidePosition();
}

function previousSlide() {
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}
	updateSlidePosition();
}
