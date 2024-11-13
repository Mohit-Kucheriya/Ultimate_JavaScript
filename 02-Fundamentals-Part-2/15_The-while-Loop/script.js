/*

1. while loop - Also needs the same components as for loop.
a. First part, is the initial value or the counter. 
b. Second part, needs a condition so that we know when to stop the loop.
c. Third part, is the increment value of the counter.

2. The while loop will execute the code inside the loop as long as the condition is true.

3. while-loop is useful, whenever you don't know how many times or how many iterations the loop will have to run.

Syntax - while (condition) {
    // code to be executed
}

Example -

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

*/

let i = 1;
while (i <= 5) {
    console.log(`While loop ${i}`);
    i++;
}

// Activity 
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) { // basically, while dice is not equal to 6, keep rolling the dice and keep changing the value of dice variable. When dice is equal to 6, then we stop the loop.
    console.log(`Rolling dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
}