// Example 1 - Re-assigning a function without returning, also create tye closure
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};
// So here a variable is inside the bagpack of the f function.

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f)

// Re-assign f function
h();
f();

/*

So it really is true that a closure always makes sure that a function doesn't lose the connection 
to the variable that were present in the function's environment or its birthplace.
So it's always gonna remember them. 

In our case, the function f() was king of born inside of g() first and then it was re-assigned to h().
And so first the closure contained the variable a of it's first birthplace, and then it was re-assigned
to the variable b of it's second birthplace.

*/

