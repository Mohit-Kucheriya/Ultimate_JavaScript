/*

If-Else Statement - Used to execute a block of code if a condition is true, or to execute a different block of code if the condition is false. Whaterver we pass in the condition must return a boolean value. So that further operations can be performed.
It is also called as Control Structure, beacuse we have more control over the way that our code is executed.

Syntax:

if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}

*/

let age = 15;

if (age >= 18) {
    console.log(`You can start Driving as he is ${age} years old.`);
} else {
    const yearLeft = 18 - age;
    console.log(
        `Sorry you can't start Driving yet as ${yearLeft} years are left to you to be an adult.`
    );
}

// Variables declare inside the {} are accessible only inside that block.
let birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = "20th Century";
} else {
    century = "21st Century"
}
console.log(century);



