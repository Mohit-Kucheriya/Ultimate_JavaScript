"use strict";
/*

1. If we don't pass any value for the parameter, undefined is assigned to it, which is the falsy value.
So, assigning the default value is the best way to handle this.

Default Parameters - 
Functions can have default parameters which are used if no value is passed for that parameter.

Example -
function add(a, b = 10) {
    return a + b;
}

console.log(add(10)); // 20

*/

const bookingArray = [];

const creatingBooking = function (
    flightNumber = "No Flight Number",
    numOfPassenger = 1,
    price = 1999 * numOfPassenger // this will only work if numOfPassenger is defined
) {
    const bookingObj = {
        flightNumber,
        numOfPassenger,
        price,
    };
    console.log(bookingObj);
    bookingArray.push(bookingObj);
};
creatingBooking("LH1234", 2, 1000);
creatingBooking("AB1234", 3);
