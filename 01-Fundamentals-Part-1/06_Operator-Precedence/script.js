/*

Operator precedence is the order in which the operators are executed.

*/

const now = 2024;
const ageDumble = now - 1956;
const ageSnape = now - 1978;

// First of all, we need to understand the order of execution of the operators. '-' has higher precedence than '>'. So both '-' operations will be executed first and then '>' will be executed.
console.log(now - 1956 > now - 1978);

// Assignment Operator, is assigned from right to left.
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x);
console.log(y);

// Without parenthesis, the order of execution is different. First 'division' is perform and then it gets add.
const averageAge = ageDumble + ageSnape / 2;
console.log(averageAge); // 

// With parenthesis, the parenthesis are evaluated first. Here (ageDumble + ageSnape) is evaluated first and then it gets divided by 2.
const averageBothAge = (ageDumble + ageSnape) / 2;
console.log(averageBothAge);

