"use strict";

// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

// Implementing Smooth Scrolling on Learn more button
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function () {
  const section1Coords = section1.getBoundingClientRect();
  console.log(section1Coords);

  /*
  Old way of scrolling
  
  window.scrollTo({
    top: section1Coords.top + window.pageYOffset,
    left: section1Coords.left + window.pageXOffset,
    behavior: "smooth"
  })
  */

  // New way of scrolling
  section1.scrollIntoView({ behavior: "smooth" });
});


/*
Event Propagation i.e. Bubbling and Capturing
addEventListener only listens to the event on the bubbling phase and not on the capturing phase i.e. when the event is first generated on the target element and then it travels up, but we can capture the event on the capturing phase by passing the true as the third argument to addEventListener.
*/
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

// Event Propagation happening during the bubbling phase
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true always in any event handler
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.color = randomColor();
  console.log(`CONTAINER`, e.target, e.currentTarget);
});

// Event Propagation happening during the capturing phase
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log(`NAV`, e.target, e.currentTarget);
  },
  true
);
