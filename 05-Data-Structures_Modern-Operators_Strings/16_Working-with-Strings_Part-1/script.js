let airline = "AIR India";
const flightNumber = "AA123";

console.log(airline[0]); // A
console.log(airline[airline.length - 1]); // a

// Strings are immutable, meaning once created, their individual characters cannot be changed.
airline[0] = "a";
console.log(airline); // Air India,

// No error but no change - Even though the syntax doesn't produce an error, the value of the string
// remains unchanged. The operation (airline[0] = "a") is simply ignored.

/*

Strings also have different methods that allow us to manipulate them.

1. indexOf() - Returns the index of the first occurrence of a specified character or substring.
Direction - Searches from left to right (beginning to end).

2. lastIndexOf() - Returns the index of the last occurrence of a specified character or substring.
Direction - Searches from right to left (end to beginning).
Even though it searches backward, it returns the index as a 0-based value from the start of the string (left-to-right order).

3. slice() - Returns a new string that is a subset of the original string, we can specify the start and end index, but the end index is not included
NOTE - If the end index is not specified, it defaults to the length of the string.
When we specify the start index and the end index, the new string will contain all characters from the start index to the end index, but not including the end index .

*/

console.log(airline.indexOf("I")); // 1

console.log(airline.lastIndexOf("I")); // 4

const newAirline = airline.slice(4);
console.log(newAirline);

console.log(airline.slice(0, airline.lastIndexOf(" ")));

console.log(flightNumber.slice(-2));
/*

Using -2 means we want the last 2 characters of the string, -ve means from the end

But behind the scenes, it is the same as saying flightNumber.slice(flightNumber.length - 2),
i.e. flightNumber.slice(5 - 2) = flightNumber.slice(2)

 */

// Example

const checkMiddleSeat = function (seat) {
    // To get the last character of the string, we can use the slice method
    const seatNumber = seat.slice(-1);

    // To check if the seatNumber contains the letter 'B' or 'E'
    if (seatNumber === "B" || seatNumber === "E") {
        console.log(`You got middle seat 😐 `);
    } else console.log(`You got lucky 😉`);
};

checkMiddleSeat("AB123");
checkMiddleSeat("11B");

/*

Q - As strings are primitive, why do they have methods?
Answer - Whenever we call a method on a string, JacaScript automatically behind the scenes convert that
string primitive to a string object with a same content.  And then it's on that object where the method 
are called. This is called autoboxing.

*/
