// 1. Variables (var)

console.log(a); // Output: undefined (hoisted but not initialized)
var a = 10;
console.log(a); // Output: 10


// 2. Variables (let)

// console.log(b); // Error: Cannot access 'b' before initialization (Temporal Dead Zone)
let b = 20;
console.log(b); // Output: 20

// 3. Variables (const)

// console.log(c); // Error: Cannot access 'c' before initialization (Temporal Dead Zone)
const c = 30;
console.log(c); // Output: 30

// 4. Function Declarations

foo(); // Output: "Hello, World!" (Function is hoisted with its body)
function foo() {
    console.log("Hello, World!");
}


// 5. Function Expressions (var)

console.log(bar); // Output: undefined (variable `bar` is hoisted but not initialized)
// bar(); // Error: bar is not a function (still `undefined`)
var bar = function () {
    console.log("Hello from bar!");
};
bar(); // Output: "Hello from bar!"


// 6. Function Expressions (let or const)

// console.log(baz); // Error: Cannot access 'baz' before initialization (Temporal Dead Zone)
let baz = function () {
    console.log("Hello from baz!");
};
baz(); // Output: "Hello from baz!"


// 7. Arrow Functions (var)

console.log(arrow); // Output: undefined (variable `arrow` is hoisted but not initialized)
// arrow(); // Error: arrow is not a function
var arrow = () => {
    console.log("Hello from arrow!");
};
arrow(); // Output: "Hello from arrow!"


// 8. Arrow Functions (let or const)

// console.log(arrowFunc); // Error: Cannot access 'arrowFunc' before initialization (Temporal Dead Zone)
const arrowFunc = () => {
    console.log("Hello from arrowFunc!");
};
arrowFunc(); // Output: "Hello from arrowFunc!"
