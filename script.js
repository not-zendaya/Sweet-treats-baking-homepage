let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

slides[currentSlide].classList.add("active");

function nextSlide() {
    slides[currentSlide].classList.remove("active");

    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000);

