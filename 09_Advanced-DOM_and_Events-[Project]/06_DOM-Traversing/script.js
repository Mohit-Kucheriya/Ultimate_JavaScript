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

Event Delegation: Implementing Page Navigation
In the below code, it will work just fine, but exact same function is now attached to all the links in the navigation bar.

document.querySelectorAll(".nav__link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  });
});

*/


/*

So, the best way of doing is to use event delegation, where we attach the event listener to the parent element and then check if the target element is a link or not.

So in Event Delegation, we basically need two steps.
First, we add the event listener to a common parent element.
Second, Determine what element originated the event 

*/
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  }
})


// DOM traversal
const h1 = document.querySelector("h1");
console.log(h1);

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes); // returns every single type of node that exists

console.log(h1.children); // returns only the direct child nodes
h1.firstElementChild.style.color = "white"
h1.lastElementChild.style.color = "purple"

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

/*

However, most of the time we actually need a parent element which is not the direct parent. And for that
we have the closest() method.

The closest() method returns the closest parent element that matches the selector.
NOTE - Very important, especially for event delegation

Syntax:

closest(selector)

*/

h1.closest(".header").style.backgroundColor = "#f1f1f1";

/*
Two important methods -
1. querySelector() - finds children no matter how deeply nested 
2. closest() - finds parents no matter how deeply nested
*/

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// Working with all sibling elements of one element
[...h1.parentElement.children].forEach(function (child) {
  if (child !== h1) {
    child.style.transform = "scale(0.5)"
  }
})


