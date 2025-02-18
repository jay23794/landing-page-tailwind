const slider = document.getElementById("slider");

function nextSlide() { slider.scrollBy({ left: 320, behavior: "smooth" }); }
function prevSlide() { slider.scrollBy({ left: -320, behavior: "smooth" }); }


let currentIndex = 0;
const slides = document.querySelectorAll("#carousel img");
const dots = document.querySelectorAll(".dot");
const title = document.getElementById("carousel-title");
const desc = document.getElementById("carousel-desc");

const slideTexts = [
    { title: "Nature", desc: "A beautiful view of nature." },
    { title: "City Life", desc: "A stunning cityscape at night." },
    { title: "Technology", desc: "Innovation shaping the future." }
];

function updateCarousel() {
    document.getElementById("carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle("bg-white", index === currentIndex);
        dot.classList.toggle("bg-gray-400", index !== currentIndex);
    });
    title.textContent = slideTexts[currentIndex].title;
    desc.textContent = slideTexts[currentIndex].desc;
}

function nextSlideHotelBook() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlideHotelBook() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Auto-play every 3 seconds
setInterval(nextSlide, 3000);