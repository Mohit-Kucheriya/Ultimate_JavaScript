"use strict";

function calcAge(birthYear) {
    const age = 2024 - birthYear;
    console.log(firstName);
    return age;
}

// calcAge(2000) ReferenceError: Cannot access 'firstName' before initialization
const firstName = "Mohit";
calcAge(2000);

function calculateAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        console.log(`Your current age is ${age} and birthYear is ${birthYear}`);

        if (birthYear >= 1986 && birthYear <= 1996) {
            var millenial = true;

            // Creating NEW variable with same name as outer's scope variable
            const firstName = "Harry";
            const str = `${firstName} yau are a millenial!`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            console.log(add(10, 20)); // 30
        }
        // console.log(add(40, 50)); ReferenceError: add is not defined, in strict mode

        console.log(millenial);
    }
    printAge();

    // add(10, 20) ReferenceError: add is not defined

    return age;
}

calculateAge(1986);

/*

Explanation -

1. Here in the above code we have a function calculateAge() which is declare in the global scope.

2. age variable is only accessible insdie the function itself. And to its all child scope

3. printAge() function takes the age variable and the birthYear, both are not declare in the current function scope, So it will have a variable lookup and try to find the variable in its parent scope.

4. Only the inner scope has the access to the outer scope variable.

5. Same for the function printAge() which is declared inside the calculateAge() function. We call the printAge() function outside the calculateAge() function. 

6. Here millenial variable is declared with var keyword, and variable declare with var simply ignore the block scope. So its a function scope variable, which is accessible outside the if block.

7. It will be accessible to that particular function only.

8. add() function is declared inside the if block, and the if block is declared inside the printAge() function.

*/
