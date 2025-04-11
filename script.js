const navDialog = document.getElementById('nav-dialog');
function handleMenu(){
   navDialog.classList.toggle('hidden')
}
 new Swiper('.cover-swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
  
 });

 new Swiper(".customer-swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 3,
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
