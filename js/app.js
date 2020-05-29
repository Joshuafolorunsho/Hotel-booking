window.addEventListener('load', () => {
   loader.classList.add('none');
   document.body.classList.remove('hide-scroll-bar');
});


const ul = document.querySelector('header ul');

const hamburger = document.querySelector('.hamburger-icon');

hamburger.addEventListener('click', () => {
   ul.classList.toggle('show');
   hamburger.classList.toggle('show');
});


// global variables
// hero carousel
let currentIndex = 0;
let previousSlideIndex = 0;

let slides = document.getElementsByClassName('slides');

let heroPrev = document.getElementById('heroPrev');
let heroNext = document.getElementById('heroNext');

let heroNav0 = document.getElementById('heroNav0');
let heroNav1 = document.getElementById('heroNav1');
let heroNav2 = document.getElementById('heroNav2');
let heroNavBtns = document.getElementsByClassName('hero-radio-button');


// load event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', startup());


// 
function startup() {
	initEventListeners();
	liveSlide(currentIndex = 0);
}// end startup()


// 
function initEventListeners() {
	heroPrev.addEventListener('click', function() { nextSlide(-1); });
	heroNext.addEventListener('click', function() { nextSlide(1); });
}// end initEventListeners()


// determine next slide (left or right)
function nextSlide(x) {
	previousSlideIndex = currentIndex;
	currentIndex += x;

	if(currentIndex < 0)
		currentIndex = slides.length - 1;
	else if(currentIndex > slides.length -1)
		currentIndex = 0;
	//currentIndex %= slides.length;
	determineSlide();
}// end nextSlide(...)


// determine live slide
function liveSlide(x) {
	previousSlideIndex = currentIndex;
	currentIndex = x;
	determineSlide();
}// end liveSlide()


// determine which slide to show and which nav button to be selected
function determineSlide() {
	// hide previously displayed slide and deselect nav button
	slides[previousSlideIndex].style.display = 'none';
	// display selected slide and select nav button
	slides[currentIndex].style.display = 'block';
}// end determineSlide()

