/*

1. First-Class Functions -
- A function is treated as an object in JavaScript.

- This means that functions are simply values, and can be assigned to variables, 
passed as arguments, and returned from functions.

2. Higher-Order Functions -
- A higher-order function is a function that takes one or more functions as arguments 
or returns a new function or both.

- This is possible because functions are first-class objects in JavaScript.

*/

// 1. Function that recieves another function as an argument
const greet = () => console.log("Hello!");
btnClose.addEventListener("click", greet);

/*

1. Here addEventListener is a higher-order function because it takes a function as an argument.

2. The function passed to addEventListener i.e. greet() is the callback function.
It is called a callback function will be called later by the higher-order function.

3. The higher-order function is called addEventListener, and the callback function is greet().

4. In this case, add event listener will call the greet() callback later as soon as the button is clicked.

*/

// 2. Function that returns another function
function counter() {
    let count = 0;
    return function () {
        count++;
    };
}

/*

1. Here counter() is a higher-order function because it returns a function.

2. And the it returns a function that increments the count variable.

*/