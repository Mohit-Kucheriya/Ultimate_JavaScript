"use strict";
/*
1. Passing Primitive Values
- When you pass a primitive value to a function, a copy of the value is made 
and passed to the function.

- Any changes made to the value inside the function will not affect the original value 
outside the function.

2. Passing Objects/Arrays
- When you pass an object or array to a function, the reference to the object/array is passed 
(not the actual value).

- This means that changes made to the object/array inside the function will reflect 
outside the function because both the original and the function's parameter point 
to the same object in memory.

*/

const flightNumber = "LH1234";
const mohitObj = {
    name: "Mohit Kucheriya",
    passport: "126482",
};

const checkIn = function (flightNum, passengerObj) {
    flightNum = "AB1234";
    passengerObj.name = "Mr. " + passengerObj.name;

    if (passengerObj.passport === "126482") {
        alert("Check-in Successful");
    } else {
        alert("Check-in Failed");
    }
};

checkIn(flightNumber, mohitObj);
console.log(flightNumber);
console.log(mohitObj);

const newPassport = function (passengerObj) {
    passengerObj.passport = Math.trunc(Math.random() * 100000);
};

newPassport(mohitObj);
checkIn(flightNumber, mohitObj);
console.log(mohitObj);

