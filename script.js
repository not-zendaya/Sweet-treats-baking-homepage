function generateRandomDessert() {
    const random = desserts[Math.floor(Math.random() * desserts.length)];
    const display = document.getElementById('randomDessert');
    document.getElementById('randomName').textContent = random.name;
    document.getElementById('randomImage').innerHTML = 
    `<img src="${random.image}" alt="${random.name}" 
    style="width: 150px; height: 150px; object-fit: cover; border-radius: 10px;">`;
    document.getElementById('randomDesc').textContent = random.description; 
    display.classList.add('show');
}

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

