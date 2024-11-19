"use strict";
// Step 1: Select DOM elements
const showModalButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Step 2: Add event listeners

// Function to open modal
const openModalFunction = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

// Function to close modal
const closeModalFunction = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < showModalButtons.length; i++) {
    showModalButtons[i].addEventListener("click", openModalFunction);
}

closeModalButton.addEventListener("click", closeModalFunction);

overlay.addEventListener("click", closeModalFunction);

// Adding event listeners to the escape key (esc)
document.addEventListener("keydown", function (event) {
    console.log(event);
    // We want to close the modal, only if it's open or visible
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModalFunction();
    }
});
