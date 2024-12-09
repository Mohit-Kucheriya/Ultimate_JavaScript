/*

1. Call Method -

In JavaScript, functions are reusable, and they depend on the value of 'this' 
(the object they are "called on"). Normally, 'this' is automatically determined 
by how a function is called. But what if you want to use a function with a different 
object? That’s where call() helps.

Syntax -
functionName.call(object, arg1, arg2, ...);

- functionName: The function you want to invoke.

- object: The object to be used as 'this' inside the function.

- arg1, arg2, ...: Arguments passed to the function (if needed).

NOTE - Remember that the properties name in the other object should be the same as inisde the function,
otherwise it will not work.

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
            flight: `${this.iataCode}${flightNumber}`, passengerName,
        })
    },
};

// Here 'this' refers to the lufthansa object
lufthansa.book(623, "Mohit");
lufthansa.book(235, "Ruchita");
console.log(lufthansa);

/* 

Suppose lufthansa has another so called company called 'eurowings', then to create the book method, 
not a good practice

*/

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

const book = lufthansa.book;
console.log(book);

book.call(eurowings, 123, "Draco");
console.log(eurowings);


