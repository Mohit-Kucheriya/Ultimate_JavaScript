/*

1. Apply Method -
Do the exact same thing as call, but instead of passing the arguments as individual parameters, 
you pass an array of arguments.

*/

const british = {
    airline: "British Airways",
    iataCode: "BA",
    bookings: [],
    book(flightNumber, passengerName) {
        console.log(
            `${passengerName} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
        );
    },
};

british.book(789, "Jonas Smith");

const vistara = {
    airline: "Vistara",
    iataCode: "VS",
    bookings: [],
};

const book = british.book;

book.apply(vistara, [451, "Ginni Lee"]);

/*

1. Here we can use the call method, but we have to pass the arguments as an array.

2. So we can use the spread operator to convert the array into a list of arguments.

*/

const passengerArr = [963, "Draco Malfoy"]
book.call(vistara, ...passengerArr)