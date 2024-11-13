/*

Iteration - The for loop

1. The for loop is a loop that executes a block of code a specified number of times. Use to automate repetitive tasks. 

2. The for loop has three parts -
a. First part is the initial value of the loop counter.
b. Second part, is a logical condition that is evaluated before each iteration. If the condition is true, the loop will 
execute the code inside the loop. But as soon as the condition is false, the loop will stop executing.
c. Third part is the increment value of the loop counter.

Syntax:

for (initialization; condition; increment) {
    // code
}

*/

// Without loop
console.log(`Hello World! with out for-loop `);
console.log(`Hello World! with out for-loop `);
console.log(`Hello World! with out for-loop `);
console.log(`Hello World! with out for-loop `);

// With loop
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Hello world! with for-loop ${rep}`);
}
