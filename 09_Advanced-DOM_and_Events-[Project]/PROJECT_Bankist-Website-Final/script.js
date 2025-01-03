"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabBtn = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");

console.log("---------------------Modal window---------------------");
// Open modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Close modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

console.log(
  "----------Implementing Smooth Scrolling on Learn morebutton----------"
);

btnScrollTo.addEventListener("click", function () {

  // New way of scrolling
  section1.scrollIntoView({ behavior: "smooth" });
});


console.log("---------------Implementing Page Navigation---------------");
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  }
});

console.log("---------------------Tabbed Component---------------------");
tabContainer.addEventListener("click", function (e) {
  // In the button element we have a span element, so even the click is on the span, we need the button element. So closest() method is used as it will return the closest parent element that matches the selector
  const clickedBtn = e.target.closest(".operations__tab");
  console.log(clickedBtn);

  // As we have added the event listener to the parent element, we need to check if the target element is a button or not.
  if (!clickedBtn) return;

  // We need to remove the active class from all the buttons and add it to the clicked button
  tabBtn.forEach((btn) => btn.classList.remove("operations__tab--active"));

  // Adding the active class to the clicked button i.e. the button
  clickedBtn.classList.add("operations__tab--active");

  // We need to remove the active class from all the content and add it to the clicked button
  tabContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // Adding the active class to the clicked button i.e. the content
  document
    .querySelector(`.operations__content--${clickedBtn.dataset.tab}`)
    .classList.add("operations__content--active");
});

console.log("---------------------Menu Fade Animation---------------------");
const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;

    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((sibling) => {
      if (sibling !== link) {
        sibling.style.opacity = opacity;
        logo.style.opacity = opacity;
      }
    });
  }
};

// Fade in effect
nav.addEventListener("mouseover", function (e) {
  handleHover(e, "0.5");
});

// Fade out effect
nav.addEventListener("mouseout", function (e) {
  handleHover(e, "1");
});


console.log("----------A Better Way: The Intersection Observer API----------");
const header = document.querySelector(".header");

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);


console.log("--------------------Revealing Elements on Scroll--------------------");
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target)
  })
};

const revealSectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  revealSectionObserver.observe(section);
  section.classList.add("section--hidden");
});

console.log("---------------------Lazy Loading Images---------------------");

const lazyImages = document.querySelectorAll("img[data-src]");

const lazyLoad = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);

};

const lazyObserve = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0,
});

lazyImages.forEach((img) => lazyObserve.observe(img));

console.log("---------------Building a Slider Component---------------");

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length;

// Adding Dots
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

// Adding Event Listener to Dots
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    currentSlide = Number(e.target.dataset.slide);
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
});

// Activating Dots on Slide first remove active class from all dots and add active class to clicked dot
const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0)

const goToSlide = (slide) => {
  slides.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
// Initial Slide
goToSlide(0);

// Next Slide
const nextSlide = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

// Previous Slide
const previousSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

// Using Arrow Keys
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    previousSlide();
  }
});
