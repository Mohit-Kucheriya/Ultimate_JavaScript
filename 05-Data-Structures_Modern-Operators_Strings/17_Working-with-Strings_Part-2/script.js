/*

1. toLowerCase() - Converts all the characters in the string to lowercase.

2. toUpperCase() - Converts all the characters in the string to uppercase.

3. trim() - Removes whitespace from both sides of the string.

4. replace() - Replaces the first occurrences of a specified value with a new one, takes
two arguments, the first is the value to be replaced and the second is the new value and returns 
the modified string.

5. replaceAll() - Replaces all occurrences of a specified value with a new one. 

*/

const passenger = "mOHit";
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);

const passengerCapitalized =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCapitalized);

const correctPassenger = function (name) {
    const passToLowerCase = name.toLowerCase();
    const passCapitalize =
        passToLowerCase[0].toUpperCase() + passToLowerCase.slice(1);
    return passCapitalize;
};

console.log(correctPassenger("ruChiTA"));
console.log(correctPassenger("HERmoine"));

// Comparing email
const emailRegistered = "kucheriya@meta.io";
const loginEmail = "    mohit@Meta.IO  \n";

const validateEmail = function (loginEmail) {
    const emailToLowerCase = loginEmail.trim().toLowerCase();
    return emailRegistered === emailToLowerCase ? `Valid email` : `Invalid email`;
};

console.log(validateEmail(loginEmail));

const priceINR = "₹ 100";
const priceUS = priceINR.replace("₹", "$");
console.log(priceUS);

const announcement =
    "All pasengers come to boarding on the door 23. Boarding door is open till 10.30 pm";
console.log(announcement.replaceAll("door", "gate"));

/*

Another solution called RegExp i.e. Regular Expression

Syntax -

    const regex = /pattern/flags;

Flags -

    g - Global
    i - Case insensitive

*/

const sayHello = "hi world, hi again!"
console.log(sayHello.replace(/hi/g, "Hello"));


