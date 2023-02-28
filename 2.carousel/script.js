const slides = document.querySelectorAll(".slide");
const slidePagination = document.querySelector(".slide-page");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

// adding id to each slide
let i = 1;

for (const slide of slides) {
  slide.id = `slide-${i}`;
  i++;
}

// add page dots
for (i = 1; i <= slides.length; i++) {
  const pageDot = document.createElement("div");
  pageDot.classList.add("page-dot");
  pageDot.id = `page-dot-${i}`;
  slidePagination.appendChild(pageDot);
}

const slideDots = document.querySelectorAll(".page-dot");
//initializing active slide,  automatic slide change

let activeSlide = 1;
setActiveSlide(activeSlide);

setInterval(() => {
  if (activeSlide === slides.length) {
    activeSlide = 1;
    setActiveSlide(activeSlide);
    return;
  }
  activeSlide++;
  setActiveSlide(activeSlide);
}, 2000);

//functions

function setActiveSlide(slideNo) {
  for (const slide of slides) {
    if (slide.id == `slide-${slideNo}`) slide.classList.add("show");
    else slide.classList.contains("show") && slide.classList.remove("show");
  }
  for (const slideDot of slideDots) {
    if (slideDot.id == `page-dot-${slideNo}`)
      slideDot.classList.add("active-dot");
    else
      slideDot.classList.contains("active-dot") &&
        slideDot.classList.remove("active-dot");
  }
}

function nextSlide() {
  if (activeSlide === slides.length) activeSlide = 1;
  else activeSlide++;
  setActiveSlide(activeSlide);
}

function prevSlide() {
  if (activeSlide === 1) activeSlide = slides.length;
  else activeSlide--;
  setActiveSlide(activeSlide);
}

// event handlers

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
