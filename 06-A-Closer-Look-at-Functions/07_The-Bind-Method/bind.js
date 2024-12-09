/*

1. Bind Method -

a. Similar to call and apply, bind is used to invoke a function with a specific context.
The difference is that bind does not immediately invoke the function, but returns a bound function.

b. By using bind, we bind 'this' only once, and then we can use the bound function to invoke the function.

c. We can even pass arguments to the bind method, and they will be used as the initial arguments for the 
bound function.

*/

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNumber, passengerName) {
        console.log(
            `${passengerName} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
        );
        this.bookings.push({
            flight: `${this.iataCode}${flightNumber}`,
            passengerName,
        });
    },
};

const book = lufthansa.book;

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const bookEW = book.bind(eurowings);
bookEW(148, "Prof. Dumbledore");

/*

1. Here we can use the bind method to bind the function to a specific context.

2. The bind method returns a new function, which is bound to the context.

3. The new function can be invoked with the same arguments as the original function.

*/

/*

So basically what we did here, specifying parts of the argument beforehand, is actually a common
pattern called partial application.

It is a way to create a new function with some of the arguments already specified.

*/
const book23 = book.bind(eurowings, 23);
book23("Ariella Shackleford");
book23("Lexi Lupin");
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;

lufthansa.buyPlanes = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

/*

As 'this' keyword in event listeners is the element that the event is attached to, So when we clicked 
the button, so 'this' keyword will refer to the button element, and not the lufthansa object.

So we have to use the bind method to bind the function to the lufthansa object.

Here we are not using the call and apply method because they call the function immediately.

*/

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlanes);

document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 100));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(235));

const takeTAX = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const takeVAT = takeTAX(0.23);
console.log(takeVAT(235));
