/*

padding a string - 
To add a number of characters to the string until it reaches a certain length.

1. padStart() - Adds the specified number of characters to the beginning of the string.
Takes two arguments, the first is the number of characters to be added and the second 
is the character to be added.

2. padEnd() - Adds the specified number of characters to the end of the string.
Takes two arguments, the first is the number of characters to be added and the second 
is the character to be added.

3. repeat() - Repeats the string a specified number of times.
Takes one argument, the number of times to repeat the string.

*/

const message = "Go to the store";
console.log(message.padStart(20, ">")); // >>>>>Go to the store

console.log(message.padEnd(20, ">")); // Go to the store>>>>>

// Example - A real world use case
const maskingCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "X");
};

console.log(maskingCreditCard(12345789));
console.log(maskingCreditCard(9923556001));

const messageRepeat =
    "Due to the delay, we have to wait for your order to be processed";
console.log(messageRepeat.repeat(3));

const repeatString = function (str, times) {
    return str.repeat(times);
};
console.log(repeatString("Ruchita 💖", 10));
