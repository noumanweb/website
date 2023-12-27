var slides = document.querySelectorAll('.slider-image');
var index = 0;

var root = document.documentElement;

/* Interval */
var changeSlide;
const intervalDuration = 5000; /* ms */

let hideAll = () => {
    slides.forEach(slide => {
        slide.style.display = "none";
    })
}

let nextSlide = () => {
    hideAll();
    root.style.setProperty("--transitionValue", "3%");
	
	index++;
    if(index == slides.length){
        index = 0;
    }
	slides[index].style.display = "block";

    clearInterval(changeSlide);
    changeSlide = setInterval(nextSlide, intervalDuration);
}

var nextButton = document.querySelector('#next');

nextButton.addEventListener("click", nextSlide);

let prevSlide = () => {
    hideAll();
    root.style.setProperty("--transitionValue", "-3%");
	
	index--;
    if(index == -1){
        index = slides.length-1;
    }
	slides[index].style.display = "block";

    clearInterval(changeSlide);
    changeSlide = setInterval(nextSlide, intervalDuration);
}

changeSlide = setInterval(nextSlide, intervalDuration);


