/*

So, an event is basically a signal that is generated by a certain DOM node and a signal means something has happened
For example - a button has been clicked, a key has been pressed, a mouse has been moved or the user triggered the
full screen mode and anything that important happens on the webpage generates an event.

*/

const span = document.querySelector("span");
span.onmouseenter = function () {
    alert("onmouseenter: Great job! You've entered the span element");
};

const h1 = document.querySelector("h1");

const alertMessage = function () {
    alert("addEventListener: Great job! You've entered the h1 element");

    // Removing event listener 
    h1.removeEventListener("mouseenter", alertMessage);
};

h1.addEventListener("mouseenter", alertMessage);
/*

Advantage of using addEventListener is that we can add multiple event listeners to the same element and we can also
remove event listeners using removeEventListener.

To remove the event listener, we nedd to export the function into a named function and then we can remove it using
removeEventListener, which takes two arguments - name of the event and the function. 

NOTE - If we use onevent listener, we can't add multiple event listeners to the same element because the other event will simply override the first one.

*/

// Handling events using HTML attributes