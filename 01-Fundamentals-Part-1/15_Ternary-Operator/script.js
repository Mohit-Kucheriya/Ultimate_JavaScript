/*

Ternary Operator - The ternary operator is a conditional operator similar to the if-else statement. It has a condition, followed by a question mark, and then two colons. The condition is followed by a true value, and then a colon, and then the false value.

Syntax: condition ? trueValue : falseValue

Remember that an operator always produces a value. The ternary operator is an expression, not a statement.

*/

const age = 25;
age >= 18 ? console.log(`You are an Adult`) : console.log(`You are Child`);

let drink = age >= 18 ? `Drink Wine 🍷` : `Drink Water 💧`;
console.log(drink);

/*

Explanation - 
age >= 18 ? `Drink Wine 🍷` : `Drink Water 💧`;
As ternary operator is an expression, it will return a value i.e we can store it in a varaible.

2. As here the condition is true, so the true value is returned and get's stored in the drink variable.

*/

// Without ternary operator - Using if-else, we have declare the variable outside the if-else block because declaring it inside won't be accessible outside the block.
let drink2;
if (age >= 18) {
    drink2 = `Drink Wine 🍷`;
} else {
    drink2 = `Drink Water 💧`;
}
console.log(drink2);

// Using ternary operator in template literal

console.log(`I like to ${age >= 18 ? `Drink Wine 🍷` : `Drink Water 💧`}`);
