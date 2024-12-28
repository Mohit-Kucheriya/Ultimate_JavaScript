// Selecting elements

console.log(document.documentElement); // Will log the entire HTML document
console.log(document.head); // Will log the <head> element
console.log(document.body); // Will log the <body> element

const header = document.querySelector(".header"); // log the first element with class "header"

const allSection = document.querySelectorAll(".section"); // Returns a NodeList

document.getElementById("section--1"); // Returns the element with id "section--1"

const allButtons = document.getElementsByTagName("button");
console.log(allButtons); // Returns HTMLCollection

console.log(document.getElementsByClassName("section__title"));

/*

HTMLCollection is actually called so called "live collection" because it is a live list of elements that are being updated as the DOM is being modified.

*/

// Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
    "We are gonna use some cookies to make it more functional! <button class='btn btn__close_cookie'>Got it!</button>";

header.prepend(message); // Get's added to the top of the header

// Deleting elements
document.querySelector(".btn__close_cookie").addEventListener("click", function () {
    // message.remove()
    message.parentNode.removeChild(message);

    /*
    this way of moving up and down in the DOM tree like selecting, the parent element is called DOM traversing.
    */
});