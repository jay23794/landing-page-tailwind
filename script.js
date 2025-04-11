const navDialog = document.getElementById('nav-dialog');
function handleMenu(){
   navDialog.classList.toggle('hidden')
}
 new Swiper('.cover-swipers', {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
 });

 new Swiper(".customer-swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    // when window width is <= 768px (typical mobile)
    768: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 4,
    }
  },
 
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".testimonial-swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


const house = document.getElementById('house');
const project = document.getElementById('project');
const sale = document.getElementById('sale');
let houseProgress = 0;
let projectProgress = 0;
let saleProgress = 0;

function animateCounter() {
  const interval = setInterval(() => {
    houseProgress += 50;
    projectProgress += 5;
    saleProgress += 50;
    house.textContent = `${houseProgress}`;
    project.textContent = `${projectProgress}`;
    sale.textContent = `${saleProgress}`;
    
    if (projectProgress >= 100) {
       house.textContent = `2000 +`
       project.textContent = `100 +`
       sale.textContent = `1000 +`
       clearInterval(interval);
    }
  }, 30);
}

animateCounter();
