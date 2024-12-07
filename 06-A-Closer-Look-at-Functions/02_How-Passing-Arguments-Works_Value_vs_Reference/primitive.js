// Passing by Value i.e. Copying the value

function changeValue(x) {
    x = 20; // Modifies the local copy 'x'
    console.log("Inside function:", x); // Outputs: 20
}

let b = 12;
console.log("Before function call:", b); // Outputs: 12

changeValue(b); // A copy of 12 is passed, not the original b
console.log("After function call:", b); // Outputs: 12

/*

What Actually Happens in Memory -

1. Before Function Call -
- b = 12 creates a storage location in memory, and the value 12 is stored there.

2.During Function Call -
- When changeValue(b) is executed, the value 12 (stored in b) is copied and passed 
to the parameter x.

- Now, x holds its own copy of the value 12 in a separate memory location.

3. Inside the Function -
- Changing x to 20 only affects the local variable x.

- The original variable b remains unaffected because it’s in a different memory location.

Why Is This Important?
Since x is a copy of b, any changes to x only affect the local variable inside the function. 
The original b remains unchanged.

*/

