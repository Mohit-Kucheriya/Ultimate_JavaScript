/*

When you pass a primitive (like let b = 12) to a function in JavaScript, the copy of the actual value 
(in this case, 12) is passed, not the variable itself.

Breaking it Down -

1. Variable b Stores the Actual Value -
let b = 12; // `b` holds the value 12

- The variable b directly holds the value 12 in memory.
- No references or pointers are involved for primitives.

2. When Passed to a Function -

function modifyValue(x) {
    x = 20; // Change the local copy
    console.log("Inside function:", x); // Outputs: 20
}

let b = 12;
modifyValue(b); // Pass a COPY of the value `12`
console.log("After function call:", b); // Outputs: 12 (original `b` remains unchanged)

- When you call modifyValue(b), JavaScript copies the value stored in b (which is 12).
- The function parameter x gets its own copy of 12.
- Changing x does not affect b because they are now two independent values.


Visual Representation -

|     Variable    | Memory Address |    Value    |
|:---------------:|:--------------:|:-----------:|
| b               | 0x001          | 12          |
| x (in function) | 0x002          | 12 (a copy) |

- x gets a new memory location with the copied value of b.
- Modifying x doesn’t affect b because they are separate.


Conclusion -
- The actual value (12) is copied and passed to the function.
- It’s not the variable b that’s passed; it’s the value stored in b.
- Hence, b and the function parameter operate independently.

*/