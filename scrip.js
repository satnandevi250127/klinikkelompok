let currentSlide = 0;
const slider = document.getElementById('slider');

function autoSlide() {
    currentSlide++;
    if (currentSlide > 2) {
        currentSlide = 0;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Berjalan setiap 3 detik
setInterval(autoSlide, 3000);