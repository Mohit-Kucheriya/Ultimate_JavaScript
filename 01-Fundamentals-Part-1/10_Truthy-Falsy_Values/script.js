/*

Falsy values in JS - 0, false, null, undefined, NaN and '' (empty string). All these values will be converted to false when we attempt to convert them to boolean.

Truthy values in JS - 1, true, object, string, array, function

*/

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Mohit Kucheriya"));
console.log(Boolean(undefined));

const money = 0;
if (money) {
    console.log(`Don't spend money at all`);
} else {
    console.log(`Try to get a job!`);
}

/*

Explanation - '0' is a falsy value so it will get converted into false and because the condition is false else block will be executed.

No matter what the value is JS will try to convert it into a boolean and that happens using the truthy and falsy values rules.

*/

let height;
if (height) {
    console.log(`YAY Height is defined`);
} else {
    console.log(`NAY Height is UNDEFINED`);
}

/*

Explanation - As we have only declare the variable but not assigned any value to it, so it will be undefined and that will be converted into false and the else block will be executed.

*/

let weight = 0;
if (weight) {
    console.log(`YAY Weight is defined`);
} else {
    console.log(`NAY Weight is UNDEFINED`);
}

/*

Explanation - Even tough '0' is a valid number, it will be converted into false and the else block will be executed. So this is a kind of a bug in JS

*/